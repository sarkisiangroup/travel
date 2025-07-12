<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Checkout</title>

  <style>
    /* Two-column desktop, one-column mobile */
    #stickyio_order_form .fields {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    #stickyio_order_form .field {
      flex: 1;
      min-width: 200px;
    }
    @media (max-width: 600px) {
      #stickyio_order_form .fields {
        flex-direction: column;
      }
    }

    /* Basic form styling */
    #stickyio_order_form {
      max-width: 500px;
      margin: auto;
      padding: 24px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    }
    #stickyio_order_form label {
      font-weight: 600;
      margin-bottom: 4px;
      display: block;
    }
    #stickyio_order_form input,
    #stickyio_order_form select {
      width: 100%;
      padding: 8px 10px;
      margin-bottom: 12px;
      border: 1px solid #ccc;
      border-radius: 6px;
      box-sizing: border-box;
      background: #fff;
    }
    #stickyio_submit {
      width: 100%;
      padding: 12px;
      font-size: 16px;
      background: #111;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    #stickyio_submit:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    /* Certification panel styling */
    .cert-panel {
      max-width: 500px;
      margin: 2rem auto;
      padding: 1.5rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #fafafa;
      text-align: left;
    }
    .cert-panel h2 {
      margin: 0 0 .5rem;
      font-size: 1.5rem;
    }
    .cert-panel p {
      margin: .5rem 0;
    }
    .cert-panel .price {
      text-align: right;
      font-weight: 600;
      font-size: 1.1rem;
    }
  </style>
</head>
<body>

  <!-- Certification panel -->
  <div class="cert-panel">
    <h2>Travel Agent Certification</h2>
    <p>
      The Travel Agent Certification is a professional requirement that allows you
      to access exclusive travel deals, book trips for clients, and earn commission
      on every booking.
    </p>
    <p class="price">$97.00 / month</p>
  </div>

  <form id="stickyio_order_form" onsubmit="return false;">
    <div class="fields">
      <div class="field">
        <label>First Name</label>
        <input type="text" id="first_name" required>
      </div>
      <div class="field">
        <label>Last Name</label>
        <input type="text" id="last_name" required>
      </div>
      <div class="field">
        <label>Email</label>
        <input type="email" id="email" required>
      </div>
      <div class="field">
        <label>Phone</label>
        <!-- plain phone input, no flag or country code -->
        <input type="tel" id="phone" required>
      </div>
      <div class="field">
        <label>Address</label>
        <input type="text" id="address" placeholder="Start typing address…" required>
      </div>
      <div class="field">
        <label>City</label>
        <input type="text" id="city" required>
      </div>
      <div class="field">
        <label>State</label>
        <input type="text" id="state" required>
      </div>
      <div class="field">
        <label>Zip</label>
        <input type="text" id="zip" required>
      </div>
      <div class="field">
        <label>Country</label>
        <select id="country" required>
          <option value="">Select country</option>
        </select>
      </div>
    </div>

    <!-- Sticky.io Card iFrame -->
    <div id="stickyio_card" style="margin-bottom:12px;"></div>

    <button id="stickyio_submit" disabled>
      Complete Registration
    </button>
  </form>

  <!-- 2) Load Google Places API -->
  <script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_XrCO4LoCfBiHJCeDox6cMolXyQPJPHw&libraries=places&callback=initAutocomplete"
    async defer
  ></script>
  <!-- 3) Sticky.io SDK only -->
  <script src="https://cdn.sticky.io/jssdk-v2/stickyio-sdk.js"></script>

  <script>
    // 1) Populate country dropdown with ISO→Name
    document.addEventListener('DOMContentLoaded', () => {
      const isoToName = {
        AF:"Afghanistan", AX:"Aland Islands", AL:"Albania", DZ:"Algeria", AS:"American Samoa",
        AD:"Andorra", AO:"Angola", AI:"Anguilla", AQ:"Antarctica", AG:"Antigua and Barbuda",
        AR:"Argentina", AM:"Armenia", AW:"Aruba", AU:"Australia", AT:"Austria", AZ:"Azerbaijan",
        BS:"Bahamas", BH:"Bahrain", BD:"Bangladesh", BB:"Barbados", BY:"Belarus", BE:"Belgium",
        BZ:"Belize", BJ:"Benin", BM:"Bermuda", BT:"Bhutan", BO:"Bolivia", BA:"Bosnia and Herzegovina",
        BW:"Botswana", BV:"Bouvet Island", BR:"Brazil", IO:"British Indian Ocean Territory", BN:"Brunei",
        BG:"Bulgaria", BF:"Burkina Faso", BI:"Burundi", CV:"Cabo Verde", KH:"Cambodia", CM:"Cameroon",
        CA:"Canada", KY:"Cayman Islands", CF:"Central African Republic", TD:"Chad", CL:"Chile", CN:"China",
        CX:"Christmas Island", CC:"Cocos Islands", CO:"Colombia", KM:"Comoros", CG:"Congo", CD:"DR Congo",
        CK:"Cook Islands", CR:"Costa Rica", CI:"Côte d’Ivoire", HR:"Croatia", CU:"Cuba", CW:"Curaçao",
        CY:"Cyprus", CZ:"Czech Republic", DK:"Denmark", DJ:"Djibouti", DM:"Dominica", DO:"Dominican Republic",
        EC:"Ecuador", EG:"Egypt", SV:"El Salvador", GQ:"Equatorial Guinea", ER:"Eritrea", EE:"Estonia",
        SZ:"Eswatini", ET:"Ethiopia", FK:"Falkland Islands", FO:"Faroe Islands", FJ:"Fiji", FI:"Finland",
        FR:"France", GF:"French Guiana", PF:"French Polynesia", TF:"French Southern Territories", GA:"Gabon",
        GM:"Gambia", GE:"Georgia", DE:"Germany", GH:"Ghana", GI:"Gibraltar", GR:"Greece", GL:"Greenland",
        GD:"Grenada", GP:"Guadeloupe", GU:"Guam", GT:"Guatemala", GG:"Guernsey", GN:"Guinea", GW:"Guinea-Bissau",
        GY:"Guyana", HT:"Haiti", HM:"Heard & McDonald Islands", VA:"Vatican City", HN:"Honduras", HK:"Hong Kong",
        HU:"Hungary", IS:"Iceland", IN:"India", ID:"Indonesia", IR:"Iran", IQ:"Iraq", IE:"Ireland", IM:"Isle of Man",
        IL:"Israel", IT:"Italy", JM:"Jamaica", JP:"Japan", JE:"Jersey", JO:"Jordan", KZ:"Kazakhstan", KE:"Kenya",
        KI:"Kiribati", KP:"North Korea", KR:"South Korea", KW:"Kuwait", KG:"Kyrgyzstan", LA:"Laos", LV:"Latvia",
        LB:"Lebanon", LS:"Lesotho", LR:"Liberia", LY:"Libya", LI:"Liechtenstein", LT:"Lithuania", LU:"Luxembourg",
        MO:"Macao", MG:"Madagascar", MW:"Malawi", MY:"Malaysia", MV:"Maldives", ML:"Mali", MT:"Malta", MH:"Marshall Islands",
        MQ:"Martinique", MR:"Mauritania", MU:"Mauritius", YT:"Mayotte", MX:"Mexico", FM:"Micronesia", MD:"Moldova",
        MC:"Monaco", MN:"Mongolia", ME:"Montenegro", MS:"Montserrat", MA:"Morocco", MZ:"Mozambique", MM:"Myanmar",
        NA:"Namibia", NR:"Nauru", NP:"Nepal", NL:"Netherlands", NC:"New Caledonia", NZ:"New Zealand", NI:"Nicaragua",
        NE:"Niger", NG:"Nigeria", NU:"Niue", NF:"Norfolk Island", MK:"North Macedonia", MP:"Northern Mariana Islands",
        NO:"Norway", OM:"Oman", PK:"Pakistan", PW:"Palau", PS:"Palestine", PA:"Panama", PG:"Papua New Guinea",
        PY:"Paraguay", PE:"Peru", PH:"Philippines", PN:"Pitcairn Islands", PL:"Poland", PT:"Portugal", PR:"Puerto Rico",
        QA:"Qatar", RE:"Réunion", RO:"Romania", RU:"Russia", RW:"Rwanda", BL:"Saint Barthélemy", SH:"Saint Helena",
        KN:"Saint Kitts & Nevis", LC:"Saint Lucia", MF:"Saint Martin", PM:"Saint Pierre & Miquelon",
        VC:"Saint Vincent & Grenadines", WS:"Samoa", SM:"San Marino", ST:"São Tomé & Príncipe",
        SA:"Saudi Arabia", SN:"Senegal", RS:"Serbia", SC:"Seychelles", SL:"Sierra Leone", SG:"Singapore",
        SX:"Sint Maarten", SK:"Slovakia", SI:"Slovenia", SB:"Solomon Islands", SO:"Somalia", ZA:"South Africa",
        GS:"South Georgia & Sandwich Islands", SS:"South Sudan", ES:"Spain", LK:"Sri Lanka", SD:"Sudan", SR:"Suriname",
        SJ:"Svalbard & Jan Mayen", SE:"Sweden", CH:"Switzerland", SY:"Syria", TW:"Taiwan", TJ:"Tajikistan", TZ:"Tanzania",
        TH:"Thailand", TL:"Timor-Leste", TG:"Togo", TK:"Tokelau", TO:"Tonga", TT:"Trinidad & Tobago", TN:"Tunisia",
        TR:"Turkey", TM:"Turkmenistan", TC:"Turks & Caicos Islands", TV:"Tuvalu", UG:"Uganda", UA:"Ukraine",
        AE:"United Arab Emirates", GB:"United Kingdom", US:"United States", UY:"Uruguay", UZ:"Uzbekistan",
        VU:"Vanuatu", VE:"Venezuela", VN:"Vietnam", EH:"Western Sahara", YE:"Yemen", ZM:"Zambia", ZW:"Zimbabwe"
      };
      const sel = document.getElementById('country');
      Object.entries(isoToName)
        .sort((a,b) => a[1].localeCompare(b[1]))
        .forEach(([iso,name]) => {
          const o = document.createElement('option');
          o.value = iso;
          o.textContent = name;
          sel.appendChild(o);
        });
    });

    // 2) Google Places Autocomplete → auto-fill city/state/zip + ISO country
    function initAutocomplete() {
      const addr = document.getElementById('address');
      const ac = new google.maps.places.Autocomplete(addr, { types: ['address'] });
      ac.addListener('place_changed', () => {
        const p = ac.getPlace(), comps={}, iso2=[];
        p.address_components.forEach(c => {
          const t = c.types[0];
          if (t==='street_number')        comps.sn  = c.long_name;
          if (t==='route')                comps.rt  = c.long_name;
          if (t==='locality')             comps.city= c.long_name;
          if (t==='administrative_area_level_1') comps.st = c.short_name;
          if (t==='postal_code')          comps.zip = c.long_name;
          if (t==='country')              iso2[0]    = c.short_name;
        });
        if (comps.sn && comps.rt) addr.value = `${comps.sn} ${comps.rt}`;
        if (comps.city)  document.getElementById('city').value  = comps.city;
        if (comps.st)    document.getElementById('state').value = comps.st;
        if (comps.zip)   document.getElementById('zip').value   = comps.zip;
        if (iso2[0])     document.getElementById('country').value = iso2[0];
      });
    }

    // 3) Sticky.io setup
    stickyio.init('sarkisiangroup', {
      version: 1,
      cleanExistingCSS: false,
      customCSS: `
        #stickyio_cc_number, #stickyio_cc_expiry, #stickyio_cc_cvv {
          font-size: 16px; padding: 10px; border-radius: 6px; background: #fff;
        }
      `
    });
    stickyio.onCardValidation = valid => {
      document.getElementById('stickyio_submit').disabled = !valid;
    };
    stickyio.onTokenSuccess = token => {
      const payload = {
        firstName:     document.getElementById('first_name').value,
        lastName:      document.getElementById('last_name').value,
        email:         document.getElementById('email').value,
        phone:         document.getElementById('phone').value,
        address:       document.getElementById('address').value,
        city:          document.getElementById('city').value,
        state:         document.getElementById('state').value,
        zip:           document.getElementById('zip').value,
        country:       document.getElementById('country').value,
        payment_token: token,
        ip: '',
  domain: window.location.origin
      };
      fetch('https://sticky-order-handler.edwin-b8e.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(r => r.json())
      .then(res => {
        if (res.response_code==='100' && res.redirectUrl) {
          window.location.href = res.redirectUrl;
        } else {
          alert('❌ Sticky Order Failed: ' + (res.error_message||JSON.stringify(res)));
        }
      })
      .catch(()=>alert('❌ There was a problem processing your order.'));
    };
    stickyio.onTokenError = () =>
      alert('❌ Payment details invalid—please check and try again.');
    document.getElementById('stickyio_submit').onclick = () => {
      const f = document.getElementById('stickyio_order_form');
      if (!f.checkValidity()) { f.reportValidity(); return; }
      stickyio.tokenizeCard();
    };
  </script>
</body>
</html>
