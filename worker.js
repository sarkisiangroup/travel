
export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', {
        status: 405,
        headers: { 'Access-Control-Allow-Origin': '*' }
      });
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // normalize country to ISO-3166-1 alpha-2
    const countryMap = {
      "afghanistan":"AF","aland islands":"AX","albania":"AL","algeria":"DZ","american samoa":"AS",
      "andorra":"AD","angola":"AO","anguilla":"AI","antarctica":"AQ","antigua and barbuda":"AG",
      "argentina":"AR","armenia":"AM","aruba":"AW","australia":"AU","austria":"AT","azerbaijan":"AZ",
      "bahamas":"BS","bahrain":"BH","bangladesh":"BD","barbados":"BB","belarus":"BY","belgium":"BE",
      "belize":"BZ","benin":"BJ","bermuda":"BM","bhutan":"BT","bolivia":"BO","bosnia and herzegovina":"BA",
      "botswana":"BW","bouvet island":"BV","brazil":"BR","british indian ocean territory":"IO","brunei":"BN",
      "bulgaria":"BG","burkina faso":"BF","burundi":"BI","cabo verde":"CV","cambodia":"KH","cameroon":"CM",
      "canada":"CA","cayman islands":"KY","central african republic":"CF","chad":"TD","chile":"CL","china":"CN",
      "christmas island":"CX","cocos islands":"CC","colombia":"CO","comoros":"KM","congo":"CG",
      "congo, democratic republic of the":"CD","cook islands":"CK","costa rica":"CR","côte d’ivoire":"CI",
      "croatia":"HR","cuba":"CU","curaçao":"CW","cyprus":"CY","czech republic":"CZ","denmark":"DK",
      "djibouti":"DJ","dominica":"DM","dominican republic":"DO","ecuador":"EC","egypt":"EG","el salvador":"SV",
      "equatorial guinea":"GQ","eritrea":"ER","estonia":"EE","eswatini":"SZ","ethiopia":"ET",
      "falkland islands":"FK","faroe islands":"FO","fiji":"FJ","finland":"FI","france":"FR",
      "french guiana":"GF","french polynesia":"PF","french southern territories":"TF","gabon":"GA",
      "gambia":"GM","georgia":"GE","germany":"DE","ghana":"GH","gibraltar":"GI","greece":"GR",
      "greenland":"GL","grenada":"GD","guadeloupe":"GP","guam":"GU","guatemala":"GT","guernsey":"GG",
      "guinea":"GN","guinea-bissau":"GW","guyana":"GY","haiti":"HT","heard island and mcdonald islands":"HM",
      "holy see":"VA","honduras":"HN","hong kong":"HK","hungary":"HU","iceland":"IS","india":"IN",
      "indonesia":"ID","iran":"IR","iraq":"IQ","ireland":"IE","isle of man":"IM","israel":"IL","italy":"IT",
      "jamaica":"JM","japan":"JP","jersey":"JE","jordan":"JO","kazakhstan":"KZ","kenya":"KE","kiribati":"KI",
      "kosovo":"XK","kuwait":"KW","kyrgyzstan":"KG","laos":"LA","latvia":"LV","lebanon":"LB","lesotho":"LS",
      "liberia":"LR","libya":"LY","liechtenstein":"LI","lithuania":"LT","luxembourg":"LU","macao":"MO",
      "madagascar":"MG","malawi":"MW","malaysia":"MY","maldives":"MV","mali":"ML","malta":"MT",
      "marshall islands":"MH","martinique":"MQ","mauritania":"MR","mauritius":"MU","mayotte":"YT",
      "mexico":"MX","micronesia":"FM","moldova":"MD","monaco":"MC","mongolia":"MN","montenegro":"ME",
      "montserrat":"MS","morocco":"MA","mozambique":"MZ","myanmar":"MM","namibia":"NA","nauru":"NR",
      "nepal":"NP","netherlands":"NL","new caledonia":"NC","new zealand":"NZ","nicaragua":"NI",
      "niger":"NE","nigeria":"NG","niue":"NU","norfolk island":"NF","north macedonia":"MK","northern mariana islands":"MP",
      "norway":"NO","oman":"OM","pakistan":"PK","palau":"PW","palestine":"PS","panama":"PA","papua new guinea":"PG",
      "paraguay":"PY","peru":"PE","philippines":"PH","pitcairn":"PN","poland":"PL","portugal":"PT","puerto rico":"PR",
      "qatar":"QA","réunion":"RE","romania":"RO","russia":"RU","rwanda":"RW","saint barthélemy":"BL",
      "saint helena":"SH","saint kitts and nevis":"KN","saint lucia":"LC","saint martin":"MF",
      "saint pierre and miquelon":"PM","saint vincent and the grenadines":"VC","samoa":"WS","san marino":"SM",
      "são tomé and príncipe":"ST","saudi arabia":"SA","senegal":"SN","serbia":"RS","seychelles":"SC",
      "sierra leone":"SL","singapore":"SG","sint maarten":"SX","slovakia":"SK","slovenia":"SI","solomon islands":"SB",
      "somalia":"SO","south africa":"ZA","south georgia and the south sandwich islands":"GS","south korea":"KR",
      "south sudan":"SS","spain":"ES","sri lanka":"LK","sudan":"SD","suriname":"SR",
      "svalbard and jan mayen":"SJ","sweden":"SE","switzerland":"CH","syria":"SY","taiwan":"TW","tajikistan":"TJ",
      "tanzania":"TZ","thailand":"TH","timor-leste":"TL","togo":"TG","tokelau":"TK","tonga":"TO","trinidad and tobago":"TT",
      "tunisia":"TN","turkey":"TR","turkmenistan":"TM","turks and caicos islands":"TC","tuvalu":"TV","uganda":"UG",
      "ukraine":"UA","united arab emirates":"AE","united kingdom":"GB","united states":"US","uruguay":"UY","uzbekistan":"UZ",
      "vanuatu":"VU","venezuela":"VE","vietnam":"VN","western sahara":"EH","yemen":"YE","zambia":"ZM","zimbabwe":"ZW"
    };
    const raw = (data.country || '').toLowerCase();
    const iso2 = countryMap[raw] || raw.length === 2 ? raw.toUpperCase() : '';

    const payload = {
      firstName:            data.firstName,
      lastName:             data.lastName,
      billingFirstName:     data.firstName,
      billingLastName:      data.lastName,
      billingAddress1:      data.address,
      billingCity:          data.city,
      billingState:         data.state,
      billingZip:           data.zip,
      billingCountry:       iso2,
      phone:                data.phone,
      email:                data.email,
      creditCardType:       data.creditCardType || 'VISA',
      creditCardNumber:     data.creditCardNumber,
      expirationDate:       data.expirationDate,
      CVV:                  data.CVV,
      payment_token:        data.payment_token,
      shippingId:           "2",
      tranType:             "Sale",
      ipAddress:            data.ip || "198.51.100.1",
      campaignId:           "1",
      offers: [
        { offer_id:1, product_id:1, billing_model_id:3, quantity:1 }
      ],
      billingSameAsShipping: "YES",
      shippingAddress1:     data.address,
      shippingCity:         data.city,
      shippingState:        data.state,
      shippingZip:          data.zip,
      shippingCountry:      iso2
    };

    // 1) send to Sticky.io
    const res = await fetch(
      "https://sarkisiangroup.sticky.io/api/v1/new_order",
      {
        method:  "POST",
        headers: {
          "Authorization": "Basic " + btoa("sarkisiangroupfreetrial_12311:d3ae78696452ee"),
          "Content-Type":  "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    const text = await res.text();
    let json;
    try { json = JSON.parse(text) }
    catch { json = { raw_response: text } }

    // 2) on success, await Zapier, then return JSON with redirectUrl
    if (json.response_code == 100) {
      const origin = data.domain || 'no-domain-sent';
      const zapPayload = {
        firstName:    data.firstName,
        lastName:     data.lastName,
        phone:        data.phone,
        email:        data.email,
        address:      data.address,
        city:         data.city,
        state:        data.state,
        zip:          data.zip,
        country:      iso2,
        order_id:     json.order_id,
        orderTotal:   json.orderTotal,
        transactionID:json.transactionID,
        avs_response: json.avs_response,
        cvv_response: json.cvv_response,
        totals_breakdown: json.totals_breakdown,
        subscription: json.subscription_id,
        domain:       origin,
        timestamp:    new Date().toISOString()
      };

      console.log('⏳ Sending to Zapier:', zapPayload);
      try {
        const zapRes = await fetch(
          "https://hooks.zapier.com/hooks/catch/3129081/u3a2w6o/",
          {
            method:  "POST",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify(zapPayload)
          }
        );
        console.log('✅ Zapier status:', zapRes.status);
      } catch (err) {
        console.error('❌ Zapier error:', err);
      }

      return new Response(JSON.stringify({
        response_code: json.response_code,
        order_id:      json.order_id,
        orderTotal:    json.orderTotal,
        redirectUrl: `${origin}/order-confirmation?order_id=${json.order_id}&amount=${json.orderTotal}`
      }), {
        status: 200,
        headers: {
          "Content-Type":               "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    // 3) fallback
    return new Response(JSON.stringify(json), {
      status: 200,
      headers: {
        "Content-Type":               "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
