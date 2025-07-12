
Public
ENVIRONMENT
No Environment
LAYOUT
Double Column
LANGUAGE
cURL - cURL
sticky.io JSON API & Integration v8.52
Introduction
API
Integrations
sticky.io JSON API & Integration v8.52
sticky.io JSON API & Integrations

Legacy API

Don't see a method you are looking for? Check out our Fully Restful V2 JSON API

AUTHORIZATION
Basic Auth
Username
{{api_username}}

Password
{{api_password}}

Orders
There are currently three methods that can be used to post new orders into the system which include:

new_order (requiring all fields re-entered each time and re-passed to the API each time)
new_order_card_on_file (passing in an existing order's information, but new product, campaign and shipping parameters to make a sale of a card on file)
new_order_with_prospect (first using the new_prospect method to create a prospect record which returns a prospectId that will be used for this method. The existing information you captured earlier from new_prospect will be used to complete the sale and clean up the prospect record if sale is completed without decline. The prospect will be converted to a customer upon a successful sale)
Request Parameters
View More
Parameter	Example	Required	Method(s)	Comments
offers	[]	Required	
new_order
new_order_with_prospect
new_order_card_on_file
An array of offer configuration data objects. Required for all new Order calls. See below for a further breakdown of format. Building the offers array will require elements from Billing Models and Offers Section
offers.*.offer_configuration_id	1	Optional	See offers	Requires a valid Offer Configuration to have been created. If passed, the Offer Configuration's default values will be used. By default, an Offer Configuration will populate these values: offer_id, product_id, billing_model_id, price, quantity, step_num, trial.product_id. Any other values passed in the request will override the Offer Configuration's value for that parameter.
offers.*.offer_id	1	Required	See offers	The Offer ID for this product
offers.*.billing_model_id	1	Optional	See offers	The Billing Model for this product. This will determine the billing frequency of the product. If omitted your default Billing Model will be used
offers.*.product_id	1	Conditional	See offers	The product_id to be included with this product. This field is required if position is not passed
offers.*.position	3	Conditional	See offers	This value should be passed if the offer_id is a Seasonal Offer. If position is passed, product_id will be ignored. This field is required if the offer is a Seasonal Offer
offers.*.prepaid_cycles	6	Conditional	See offers	If the offer_id supplied is a Prepaid Offer, this field is required
offers.*.quantity	1	Required	See offers	Quantity for this product
offers.*.price	9.99	Optional	See offers	If a custom price is desired, it can be passed here. If not supplied or empty, the product price will be used
offers.*.variant	[]	Conditional	See offers	An array of variant attributes OR an object that contains the variant_id. Required IF the product_id supplied has variants. See offers array below for example
offers.*.variant.variant_id	12	Conditional	See offers	The variant ID associated with the offer product. Required IF the product_id supplied has variants and attributes are not passed. See offers array below for example
offers.*.variant.*.attribute_name	Color	Conditional	See offers	The variant attribute name associated with the offer product. Required IF the product_id supplied has variants and variant_id is not passed. See offers array below for example
offers.*.variant.*.attribute_value	Red	Conditional	See offers	The variant attribute value associated with the offer product. Required IF the product_id supplied has variants and variant_id is not passed. See offers array below for example
offers.*.preserve_price	1	Optional	See offers	Preserve the price throughout the subscription for product
offers.*.children	[]	Conditional	See offers	If the product_id supplied is a Custom Bundle Product, this parameter is *Required
offers.*.children.*.product_id	34	Conditional	See offers	The bundle child product ID. If the offer.*.product_id supplied is a Custom Bundle Product, this parameter is *Required
offers.*.children.*.quantity	1	Conditional	See offers	The bundle child product quantity. If the product_id supplied is a Custom Bundle Product, this parameter is *Required
offers.*.trial	{}	Optional	See offers	Object of trial data if the order has a trial element. See example below. This field will no be used if the offer is a Seasonal Offer
offers.*.trial.use_workflow	1	Optional	See offers	When one is passed, the platform will use the trial workflow configuration associated with the offer.
offers.*.trial.trial_workflow_id	12	Conditional	See offers	This field specifies a specific trial_workflow_id to use with the offer. Required when use_workflow is passed and set to 1. When not passed, the platform will use the default trial workflow configuration associated with the offer.
offers.*.trial.product_id	1	Conditional	See offers	The trial product_id to be included with this product. If not passed, the product passed in the offers.*.product_id will be used
offers.*.trial.quantity	1	Optional	See offers	Quantity for this trial product. If not passed, the trial quantity will be set to 1.
offers.*.trial.price	9.99	Optional	See offers	If a custom trial price is desired, it can be passed here. If not supplied or empty, the configured trial price will be used. Otherwise, the product price will be used
offers.*.trial.variant	[]	Conditional	See offers	An array of variant attributes OR an object that contains the variant_id. Required IF the trial product_id supplied has variants. See offers array below for example.
offers.*.trial.variant.variant_id	12	Conditional	See offers	The variant ID associated with the offer trial product. Required IF the trial product_id supplied has variants and attributes are not passed. See offers array below for example
offers.*.trial.variant.*.attribute_name	Color	Conditional	See offers	The variant attribute name associated with the offer trial product. Required IF the trial product_id supplied has variants and variant_id is not passed. See offers array below for example
offers.*.trial.variant.*.attribute_value	Red	Conditional	See offers	The variant attribute value associated with the offer trial product. Required IF the trial product_id supplied has variants and variant_id is not passed. See offers array below for example
offers.*.step_num	2	Optional	See offers	This is passed if the item is an upsell or was selected on a different step
offers.*.options	[]	Optional	See offers	An array of line item custom field options.
offers.*.options.*.name	x_key	Conditional	See offers	The line item custom option name. If offer.*.options is passed, this parameter is *Required
offers.*.options.*.value	68767987hiuhukjjh	Conditional	See offers	The line item custom option value. If offer.*.options is passed, this parameter is *Required
previousOrderId	12345	Required	
new_order_card_on_file
Pass previous order_id for the card on file and all previous sale information will be used for the new_order_on_file
firstName	George	Required/Optional	
new_order
new_order_with_prospect
Required for new_order ONLY
lastName	Lastings	Required/Optional	
new_order
new_order_with_prospect
Required for new_order ONLY
shippingAddress1	123 Testing St	Required/Optional	
new_order
new_order_with_prospect
Required for new_order ONLY
shippingAddress2	Apt 50	Optional	
new_order
new_order_with_prospect
shippingCity	Tampa	Required/Optional	
new_order
new_order_with_prospect
Required for new_order ONLY
shippingState	FL	Required/Optional	
new_order
new_order_with_prospect
Required for new_order ONLY For US states, use the 2 character abbreviation for other countries use the full state name or state code
shippingZip	33607	Required/Optional	
new_order
new_order_with_prospect
Required for new_order ONLY
shippingCountry	US	Required/Optional	
new_order
new_order_with_prospect
Required for new_order ONLY Customer's shipping country (ISO2 2-Character Country Code)
phone	8135551212	Required/Optional	
new_order
new_order_with_prospect
Required for new_order ONLY Customer's phone number. If using Kount, and NOT collecting a phone number, please use 0123456789
email	george234@test.com	Required/Optional	
new_order
new_order_with_prospect
Required for new_order ONLY
creditCardType	visa	Required	
new_order
new_order_with_prospect
amex
visa
master
discover
checking
bacs
offline
solo
maestro
boleto
paypal
amazonpay
applepay
diners
hipercard
aura
eft_germany
giro
amazon
icepay
bitcoin_pg
eurodebit
sepa
boleto_bradesco
boleto_caixa_eco_fed
boleto_hsbc
boleto_banco_do_bras
boleto_itau
cielo_visa
cielo_mastercard
cielo_amex
cielo_diners
cielo_elo
redecard_webs_visa
redecard_webs_master
banrisul_tef
banco_brazil_tef
bradesco_tef
itau_tef
ebanxaccount
eb_boleto_bancario
elo
creditCardNumber	1444444444444440	Required	
new_order
new_order_with_prospect
Credit card or CNPJ or CPF ID if using Boleto
expirationDate	0422	Required	
new_order
new_order_with_prospect
CVV	123	Required	
new_order
new_order_with_prospect
Required if creditCardType not checking or offline. Use "CVV":"OVERRIDE" to exclude the CVV from the gateway post. Used as issue id if creditCardType is
switch
solo
maestro
checkAccountNumber	1234567890	Required/Optional	
new_order
new_order_with_prospect
Required if creditCardType is checking or eft_germany
checkRoutingNumber	063100277	Required/Optional	
new_order
new_order_with_prospect
Required if creditCardType is checking or eft_germany
sepa_iban	12345	Required/Optional	
new_order
new_order_with_prospect
Required if creditCardType is sepa
sepa_bic	12345	Required/Optional	
new_order
new_order_with_prospect
Required if creditCardType is sepa
eurodebit_acct_num	12345	Required/Optional	
new_order
new_order_with_prospect
Required if creditCardType is eurodebit
eurodebit_route_num	12345	Required/Optional	
new_order
new_order_with_prospect
Required if creditCardType is eurodebit
account_number	12345	Optional	
new_order
new_order_with_prospect
Generic account number that can be required for specific payment providers or alternative payment providers
bank_code	12345	Optional	
new_order
new_order_with_prospect
Generic bank code that can be required for specific payment providers or alternative payment providers
branch_code	12345	Optional	
new_order
new_order_with_prospect
Generic branch code that can be required for specific payment providers or alternative payment providers
danish_identity_number	12345	Optional	
new_order
new_order_with_prospect
Generic account number that can be required for specific payment providers or alternative payment providers
tranType	Sale	Required	
new_order
new_order_with_prospect
Cannot be blank. Tells what kind of credit card sale to run
ipAddress	127.0.0.1	Required	
new_order
new_order_with_prospect
Customer's IP address (from the end-user browser not the server)
secretSSN	1234	Conditional	
new_order
new_order_with_prospect
Required if using Actum Processing as the check provider
AFID	affiliate1	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Affiliate Id
SID	subaffiliate1	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Sub-Affiliate Id
AFFID	affiliate1	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Affiliate Id
C1	subaffiliate1	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Sub-Affiliate Id
C2	subaffiliate1	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Sub-Affiliate Id
C3	subaffiliate1	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Sub-Affiliate Id
AID	affiliate1	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Affiliate Id
OPT	subaffiliate1	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Sub-Affiliate Id
click_id	abcde12345	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Click ID used by your affiliate tracking system to identify unique clicks/requests
campaignId	1	Required	
new_order
new_order_with_prospect
new_order_card_on_file
Valid sticky.io campaign ID
shippingId	1	Required	
new_order
new_order_with_prospect
new_order_card_on_file
Valid sticky.io shipping ID
billingSameAsShipping	YES	Optional	
new_order
new_order_with_prospect
YES or NO whether billing address is same as shipping address. If blank, will default to YES and will copy all the shipping fields into the billing fields
notes	Some Order Note	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Notes to be appended to the order history on the order detail
forceGatewayId	0	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
sticky.io gateway to fore the transaction into
preserve_force_gateway	0	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Flag to preserve the forceGatewayId (if provided). Defaults to 0 if not provided
thm_session_id	abc123	Optional	
new_order
new_order_with_prospect
Threat Matrix Sessiod Id
total_installments	0	Optional	
new_order
new_order_with_prospect
Total installments for Cobre Bern or eBanx Gateways
alt_pay_token	abc123	Optional	
new_order
new_order_with_prospect
Alternative payment token retrieved. Required if creditCardType is
paypal
amazon
icepay
alt_pay_payer_id	abc123	Optional	
new_order
new_order_with_prospect
Alternative payment PayerId retrieved. Required if creditCardType is
paypal
amazon
icepay
promoCode	10percent	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
sticky.io promo code in coupon profile that is attached to campaign. See coupon_validate for more information
temp_customer_id	123	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Value returned from authorize_payment when save_customer is enabled. If used, omit creditCardType, creditCardNumber, expirationDate, and CVV
three_d_redirect_url		Optional	
new_order
new_order_with_prospect
If gateway has 3D Secure enabled
fields_document_id		Optional	
new_order
new_order_with_prospect
new_order_card_on_file
CPF number required for brazilian orders processed using EBANX gateway
alt_pay_return_url		Optional	
new_order
new_order_with_prospect
Required for some alternative payment types but otherwise optional. This value is used to indicate the final URL for the alternative payment provider to return to after a redirect to an external payment page
sessionId		Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Kount sessionId if using Kount
cascade_override	0	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
If passed as 1 the cascade profile will be overridden
create_member	1	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
If passed as 1 a member will be created
event_id	1	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
If creating a member and you want to send a notification, include the ID if the event you want to trigger. Must be a Member Creation type event.
is_any_product_recurring	1	Optional	
order_find
If you would like to only find orders where the main product or any add-ons are recurring, you may pass the is_any_product_recurring field. Unlike the recurring parameter, this field will return orders for items with recurring add-ons (as well as main products).
ssn_nmi	123456789	Optional	
new_order
new_order_with_prospect
If using NMI as a gateway and BlueSnap as a processor for LatAm transactions
utm_source	google	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Use utm source to identify a search engine, newsletter name or other source
utm_medium	cpc	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Use utm medium to identify a medium such as email or cost per click
utm_campaign	sale	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Used for keyword analysis. Use utm campaign to identify a specific product promotion or strategic campaign
utm_term	shoes	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Used for paid search. Use utm term to note the keywords for this ad
utm_content	logolink	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Used for AB testing and content targeted ads. Use utm content to differentiate ads or links that point to the same URL
device_category	mobile	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Use device category to identify the device used
billingFirstName	George	Optional	
new_order
new_order_with_prospect
Customer's Billing First Name if not using billingSameAsShipping
billingLastName	Lastings	Optional	
new_order
new_order_with_prospect
Customer's Billing Last Name if not using billingSameAsShipping
billingAddress1	123 Testing St	Optional	
new_order
new_order_with_prospect
Customer's Billing Address 1 if not using billingSameAsShipping
billingAddress2	Apt 50	Optional	
new_order
new_order_with_prospect
Customer's Billing Address 2 if not using billingSameAsShipping
billingCity	Tampa	Optional	
new_order
new_order_with_prospect
Customer's Billing City if not using billingSameAsShipping
billingState	FL	Optional	
new_order
new_order_with_prospect
If not using billingSameAsShipping - Customer's billing state. For US states, use the 2 character abbreviation for other countries use the full state name or state code
billingZip	33607O	Optional	
new_order
new_order_with_prospect
Customer's Billing Zip if not using billingSameAsShipping
billingCountry	US	Optional	
new_order
new_order_with_prospect
Customer's billing country (ISO2 2-Character Country Code) if not using billingSameAsShipping
referred_id	ABCD1234EFG	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Optional parameter if sending in referrer info for ReferralCandy
conversion_id	addc703c-6ffd-11e8-a1ea-12f0b4779fbe	Optional	
new_order_with_prospect
This is used to identify the prospect provider that should get credit for the conversion of prospect to a customer
cavv	BwABAwJoEAAAAABhdWgQAAAAAAA=	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
This is a 3D Verify parameter (Cardholder Authentication Verification Value)
eci	06	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
This is a 3D Verify parameter (Electronic Commerce Indicator)
xid	YmUyMnFoMmJpbHM1aGJzNjd2MGc=	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
This is a 3D Verify parameter (3D Verify transaction ID)
3d_version	2.1.0	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
This is a 3D Secure / 3D Verify 2.0 Only parameter - Version Number
ds_trans_id	123nFoMmJpbHM1aG	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
This is a 3D Secure / 3D Verify 2.0 Only parameter - Directory Server Transaction ID
acs_trans_id	12398ah9sdfhG	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
This is a 3D Secure / 3D Verify 2.0 Only parameter - ACS Transaction ID
browser_color_depth	24	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
JavaScript Browser Information - Optional parameter for 3D Secure Version 2.0 Protocol
browser_language	en	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
JavaScript Browser Information - Optional parameter for 3D Secure Version 2.0 Protocol
browser_java_enabled	true	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
JavaScript Browser Information - Optional parameter for 3D Secure Version 2.0 Protocol
browser_screen_height	1280	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
JavaScript Browser Information - Optional parameter for 3D Secure Version 2.0 Protocol
browser_screen_width	1920	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
JavaScript Browser Information - Optional parameter for 3D Secure Version 2.0 Protocol
browser_tz	0	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
JavaScript Browser Information - Optional parameter for 3D Secure Version 2.0 Protocol
website	www.myoffersite.com	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
The website the order was purchased from
consent_required	1	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
If consent is required before the order can rebill, pass 1
stripe_token	1ENReuAZTse2QsifxHwnj4kn	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Stripe Token can be sent in place of credit card details if using Apple Pay, Google Pay, Microsoft Pay or Stripe's Payment Request Button feature.
square_token	1ENReuAZTse2QsifxHwnj4kn	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Square Token needs to be sent in place of credit card details to charge the order.
wallet_token	1ENReuAZTse2QsifxHwnj4kn	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Any Wallet Token needs to be sent in place of credit card details to charge the order that is obtained from any third-party, front-end implementation.
dynamic_shipping_charge	65	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
Allows ability to override the shipping price. Can be sent as either a string or an integer.
custom_field		Optional	
new_order
new_order_with_prospect
new_order
Custom Field Payload. Example Payload Here
keep_line_items_separate	0	Optional	
new_order
new_order_with_prospect
new_order_card_on_file
This field allows you to prevent the system from consolidating line items with the same product ID. When set to 1, line items with the same product ID will not combine and will instead be stored as separate items in the platform.
Example children array:
View More
Plain Text
{
    "children":
    [
        {
            "product_id":"1",
            "quantity":"2"
        },
        {
            "product_id":"2",
            "quantity":"1"
        }
    ]
}
Example products array. ** PLEASE NOTE THIS WILL BE DEPRECATED 12/31/2018 IN LIEU OF OFFERS ARRAY **:
View More
Plain Text
{
   "4":
   {
      "offer_id":"8",
      "billing_model_id":"6",
      "quantity":"1",
      "children":
      [
         {
            "product_id":"1",
            "quantity":"2"
         },
         {
            "product_id":"2",
            "quantity":"1"
         }
      ],
      "trial":
      {
         "product_id":"4",
         "children":
         [
            {
               "product_id":"1",
               "quantity":"2"
            },
            {
               "product_id":"2",
               "quantity":"1"
            }
         ],
         "price":"0.99",
         "quantity":1
      }
   },
      "16":
   {
      "offer_id":"8",
      "billing_model_id":"4",
      "quantity":"2",
      "step_num":"2"
   }
}
Example offers Array:
View More
Plain Text
"offers":
  [
    {
      "offer_id":"8",
      "product_id":"4",
      "billing_model_id":"6",
      "quantity":"1",
      "children":
      [
        {
          "product_id":"1",
          "quantity":"2"
        },
        {
          "product_id":"2",
          "quantity":"1"
        }
      ],
      "trial":
      {
         "product_id":"4",
         "price":"9.99",
         "children":
         [
           {
              "product_id":"1",
              "quantity":"2"
           },
           {
              "product_id":"2",
              "quantity":"1"
           }
         ]
      }
    },
    {
      "offer_id":"8",
      "product_id":16,
      "billing_model_id":"4",
      "quantity":"2",
      "step_num":"2",
      "variant":
      [
        {
          "attribute_name":"color",
          "attribute_value":"Blue"
        }
                
      ]
    }
  ]
Common Response Parameter's for any API call that creates a new Order:
View More
Response Param	Example Values	Data Format	Comments
error_found	0	number	If 1, then error_message will be posted
error_message	Error Message	string	Error Response when errorFound is 1
response_code	800	number	Response of transaction. See Code Definitions
transactionID	3213281	string	Passed when response_code is 100
authId	123456	string	Passed when response_code is 100
customer_id	123456	number	sticky.io Customer ID
orderId	123456	number	sticky.io Order ID
orderTotal	13.67	number	Total charged to customer
orderSalesTaxPercent	7.75	number	Percent sales tax
orderSalesTaxAmount	1.65	number	Amount of order that is sales tax
test	1	number	Passed as 1 when this is a test order
product1DigitalURL	http://test.com/test	string	Digital URL associated with the product ID
product1DigitalUsername	user	string	Digital good username associated with the product ID
product1DigitalPassword	pw	string	Digital good password associated with the product ID
product1DigitalCustomFields	product1DigitalCustomFields=field1:value1	string	only posted if product is a digitally delivered good and additional fields have been requested for the provider. Each field/value pair will be colon : separated, each set will be pipe separated
alt_pay_url	http://test.com/test	string	Returned when using alternative payment providers (i.e. Bitcoin Paygate). This is the redirect URL for Bitcoin transactions.
decline_reason	Gateway Error	string	Gateway Error Response when response_code is 800
return	0	boolean	Designates if an order has been returned.
is_cancel	0	boolean	Designates if an order has been canceld.
gatewayId	1	number	sticky.io gateway ID that the authorization was charged against
gatewayDescriptor	TEST 123	string	For the gatewayId charged, this is the value of any non-empty value that is stored as the descriptor in the gateway popup
gatewayCustomerService	8005551212	string	For the gatewayId charged, this is the value of any non-empty value that is stored as the customer service number in the gateway popup
gateway_id	No	number	sticky.io gateway ID that was used to charge the order
gateway_alias	No	string	sticky.io gateway alias name that was used to charge the order
prepaid_match	No	string	Identifies whether or not a credit card matched a prepaid BIN, Yes or No
subscription_id	{"1":"1fb3e8d5959a1e62bf222772cdb8d7a5"}	array	Array of "product_id":"subscription_id"
resp_msg	Approved	string	response message (note: for new_order_with_prospect and new_order_card_on_file, this parameter will only be shown for TEST cards)
processor_id	FDMS SOUTH	string	Returned when using a gateway integration that passes back the processor ID for the sale. Post Processor ID must be enabled in the gateway profile.
provider_type	PAYMENT	string	Passed when response_code is 800 indicating type of provider declining: CHECK, FRAUD, PAYMENT
provider_name	NETWORK MERCHANT INC	string	Passed when response_code is 800 indicating name of provider
source	Internal	string	Passed when response_code is 800 indicating if this was an Internal or External provider declining
member_created	1	number	Boolean if member was created or not
member_error	A member already exists for this customer	string	If there is an error creating the member, it will be displayed here
member_notice	Member already existed with another Customer ID. Customer ID has been added to existing member. Note: Member password may need to be reset.	string	If a member already exists with a different customer ID, you will get this notice
member_notification_sent	1	number	Boolean if a member notification was sent
member_notification_error	Invalid event_id supplied	string	If there is an error sending a member notification, it will be displayed here
is_any_product_recurring	1	Boolean	Indicates whether the order has any products or add-on products that are recurring.
AUTHORIZATION
Basic Auth
This folder is using Basic Auth from collectionsticky.io JSON API & Integration v8.52
POST
authorize_payment
https://{{app_key}}.{{domain}}{{api_ext}}authorize_payment
This method utilizes the billing and card data fields used by new_order, as well as some basic CRM identifiers for campaign and product, and sends an authorization request to the gateway. No order is created. Upon successful authorization, the transaction information will be returned, otherwise the decline reason is provided. If no auth_amount is provided, it will default to a 1.00 authorization.

Max Requests Per Minute: 120

Request Parameters
View More
Parameter	Example	Required	Comments
billingAddress1	123 Testing St	required	Customer's billing address line 1
billingCity	Tampa	required	Customer's billing city
billingState	FL	required	Customer's billing state. For US states, use the 2 character abbreviation for other countries use the full state name or state code
billingZip	33607	required	Customer's billing zip
billingCountry	US	required	Customer's billing country (ISO2 2-Character Country Code)
phone	8135551212	required	Customer's phone number. If using Kount, and NOT collecting a phone number, please use 0123456789
email	george234@test.com	required	Customer's email address
creditCardType	visa	required	amex, visa, master, discover, checking, offline, solo, maestro, switch, boleto, paypal, diners, hipercard, aura, eft_germany, giro, amazon, icepay, bitcoin_pg, eurodebit, sepa, boleto_bradesco, boleto_caixa_eco_fed, boleto_hsbc, boleto_banco_do_bras, boleto_itau, cielo_visa, cielo_mastercard, cielo_amex, cielo_diners, cielo_elo, redecard_webs_visa, redecard_webs_master
creditCardNumber	1444444444444440	required	Credit card or CNPJ or CPF ID if using Boleto
expirationDate	0422	required	Expiration date in MMYY format, 4 digits only
CVV	123	required	Required if creditCardType not checking or offline. Used as issue id if creditCardType is switch,solo, or maestro. Use "CVV":"OVERRIDE" to exclude the CVV from the gateway post.
ipAddress	127.0.0.1	required	Customer's IP address (from the end-user browser not the server)
productId	123	required	Valid sticky.io product ID to use for the order
campaignId	1	required	Valid sticky.io campaign ID
auth_amount	123.45	required	Amount to authorize. Defaults to 1.00 if not supplied or invalid
billingFirstName	Bob	optional	Customer's Billing First Name
billingLastName	McLastings	optional	Customer's Billing Last Name
billingAddress2	Apt 50	optional	Customer's billing address line 2
cascade_enabled	0	optional	If enabled, allows the authorization to follow a cascade profile
save_customer	0	optional	If enabled, saves temporary customer data
save_customer_days	2	optional	To extend the period of temporary customer period.
(save_customer must be enabled.)
1 to 30 are possible value.
validate_only_flag	0	optional	If passed as 1, the card will be validated. If passed as 0, the card will be authorized at the auth_amount.
void_flag	0	optional	If passed as 1, the authorization will be immediately voided. If passed as 0, the authorization will remain.
An optional parameter save_customer will temporarily save the encrypted card data. Upon successfully saving the information, you will receive a temp_customer_id in the response in which this Id will be available for use with the new_order, new_order_card_on_file, or new_order_with_prospect method for up to 24 hours after the call is made. To extend the duration of a temporary customer, pass the save_customer_days parameter and a value between 1 and 30.

View More
Response Param	Example Values	Data Format	Comments
response_code	800	number	Response of transaction. See Code Definitions
error_found	0	number	If 1, then error_message will be posted
error_message	Error Message	string	Error Response when error_found is 1
transactionID	3213281	string	Passed when response_code is 100
authId	123456	string	Passed when response_code is 100
decline_reason	Gateway Error	string	Gateway Error Response when responseCode is 800
gateway_id	1	number	sticky.io gateway_id that the authorization was charged against
gateway_descriptor	TEST 123	string	For the gateway_id charged, this is the value of any non-empty value that is stored as the descriptor in the gateway popup
fields_document_id	823235132	optional	CPF number required for brazilian orders processed using EBANX gateway
gateway_customer_service	8005551212	string	For the gateway_id charged, this is the value of any non-empty value that is stored as the customer service number in the gateway popup
prepaid	0	number	Identifies whether or not a credit card matched a prepaid BIN, if applicable
prepaid_match	No	String	Identifies whether or not a credit card matched a prepaid BIN
temp_customer_id	11111111	number	Optional, provided when passing the save_customer parameter with this method
expiry_date	2018-02-07	date	Optional, provided when passing the save_customer parameter with this method, shows the date the authorization is valid until
processor_id	FDMS SOUTH	string	Returned when using a gateway integration that passes back the processor ID for the sale. Post Processor ID must be enabled in the gateway profile.
provider_type	PAYMENT	string	Passed when response_code is 800 indicating type of provider declining: CHECK, FRAUD, PAYMENT
provider_name	NETWORK MERCHANT INC	string	Passed when responseCode is 800 indicating name of provider
source	Internal	string	Passed when responseCode is 800 indicating if this was an Internal or External provider declining
AUTHORIZATION
Basic Auth
Username
{{api_username}}

Password
{{api_password}}

HEADERS
Content-Type
application/json

Body
raw
View More
{
	"billingFirstName": "PostingBilling",
	"billingLastName": "APILastname",
	"billingAddress1": "56 Escobar St",
	"billingAddress2": "FL 7",
	"billingCity": "Houston",
	"billingState": "TX",
	"billingZip": "33655",
	"billingCountry": "US",
	"phone": "8135551212",
	"email": "postman@apitest.com",
	"creditCardType": "VISA",
	"creditCardNumber": "1444444444444440",
	"expirationDate": "0628",
	"CVV": "123",
	"shippingId": "2",
	"tranType": "Sale",
	"ipAddress": "198.4.3.2",
	"campaignId": "4",
	"products":
	{
		"16":
		{
			"offer_id":"8",
			"billing_model_id":"4",
			"quantity":"2"
		},
		"4":
		{
			"offer_id": "8",
			"billing_model_id": "6",
			"quantity": "1",
			"children":
			[
				{
					"product_id":"1",
					"quantity":"2"
				},
				{
					"product_id":"2",
					"quantity":"1"
				}
			]
		}
	},
	"gift":
	{
		"email":"gift@email.com",
		"message":"This is a gift order and this is a gift message"
	},
	"notes": "This is a test order",
	"AFID":"AFID",
	"SID":"SID",
	"AFFID":"AFFID",
	"C1":"C1",
	"C2":"C2",
	"C3":"C3",
	"AID":"AID",
	"OPT":"OPT",
	"click_id":"abc123",
	"billingSameAsShipping":"YES",
	"shippingAddress1": "123 Medellin St",
	"shippingAddress2": "APT 7",
	"shippingCity": "Santo Alto",
	"shippingState": "TX",
	"shippingZip": "33544",
	"shippingCountry": "US",
	"forceGatewayId":"",
	"preserve_force_gateway":"",
	"createdBy":"",
	"thm_session_id":"",
	"total_installments":"",
	"alt_pay_token":"",
	"alt_pay_payer_id":"",
	"secretSSN":"",
	"force_subscription_cycle":"",
	"recurring_days":"",
	"subscription_week":"",
	"subscription_day":"",
	"master_order_id":"",
	"promoCode":"",
	"temp_customer_id":"",
	"three_d_redirect_url":"",
	"alt_pay_return_url":"",
	"sessionId":"",
	"cascade_override":"",
	"create_member":"",
	"event_id":"",
	"ssn_nmi":"",
	"utm_source": "source",
	"utm_medium": "medium",
	"utm_campaign": "campaign",
	"utm_content": "content",
	"utm_term": "term",
	"device_category":"mobile",
	"checkingAccountNumber":"",
	"checkingRoutingNumber":"",
	"sepa_iban":"",
	"sepa_bic":"",
	"eurodebit_acct_num":"",
	"eurodebit_route_num":"",
	"referrer_id":""
}
Example Request
authorize_payment
View More
curl
curl --location -g 'https://{{app_key}}.{{domain}}{{api_ext}}authorize_payment' \
--header 'Content-Type: application/json' \
--data-raw '{
	"billingFirstName":"PostingBilling",
	"billingLastName":"APILastname",
	"billingAddress1":"56 Escobar St",
	"billingAddress2":"FL 7",
	"billingCity":"Houston",
	"billingState":"TX",
	"billingZip":"33655",
	"billingCountry":"US",
	"phone":"8135551212",
	"email":"postman@apitest.com",
	"creditCardType":"VISA",
	"creditCardNumber":"1444444444444440",
	"expirationDate":"0628",
	"CVV":"123",
	"shippingId":"2",
	"tranType":"Sale",
	"ipAddress":"198.4.3.2",
	"campaignId":"4",
	"productId":"4",
	"auth_amount":"1.00",
	"cascade_enabled":"0",
	"save_customer":"0",
	"validate_only_flag":"0",
	"void_flag":"0"
}'
200 OK
Example Response
Body
Headers (8)
json
{
  "response_code": "100",
  "error_found": "0",
  "error_message": "This transaction has been approved",
  "transactionID": "Not Available",
  "authId": "Not Available",
  "prepaid": "0",
  "prepaid_match": "No"
}
POST
coupon_validate
https://{{app_key}}.{{domain}}{{api_ext}}coupon_validate
The coupon_validate method is used to check if a promo code that was entered is still valid to apply the discount.

Max Requests Per Minute: 120

AUTHORIZATION
Basic Auth
Username
{{api_username}}

Password
{{api_password}}

HEADERS
Content-Type
application/json

Body
raw
View More
{
    "shipping_id": 4,
    "promo_code": "10percent",
    "email": "vpulatov@sticky.io",
    "campaign_id": 327,
    "products": [
        {
            "product_id": 1,
            "quantity": 2
        },
        {
            "product_id": 2,
            "quantity": 1
        },
        {
            "product_id": 3
        },
        {
            "product_id": 4,
            "variant_id": 7
        },
        {
            "product_id": 5,
            "product_attributes": {
                "Color": "ReD",
                "Brand": "ReeBok"
            }
        }
    ]
}
Example Request
coupon_validate
View More
curl
curl --location -g 'https://{{app_key}}.{{domain}}{{api_ext}}coupon_validate' \
--header 'Content-Type: application/json' \
--data-raw '{
    "campaign_id": 1,
    "shipping_id": 4,
    "email": "postman@sticky.io",
    "products": [
        {
            "product_id": 1,
            "quantity": 2
        },
        {
            "product_id": 2,
            "quantity": 1
        },
        {
            "product_id": 3
        },
        {
            "product_id": 4
        },
        {
            "product_id": 5
        }
    ],
    "promo_code": "10percent"
}'
200 OK
Example Response
Body
Headers (0)
json
{
  "response_code": "100",
  "coupon_amount": "18.6"
}
POST
new_order
https://{{app_key}}.{{domain}}{{api_ext}}new_order
Place a new order. Parameters in the example request from firstName to product are REQUIRED with the exception of billingAddress2. For orders with only digital products, parameters from firstName to product are NOT REQUIRED with the exception of billingCountry. Fields beyond that are OPTIONAL See Orders section for a table of required and optional parameters.

Place order with member token and omit payment information. An order can be placed by passing the member object and including the member token and wallet id. Billing address id and shipping address id are optional but if is passed they will replace the addresses that correspond to that wallet id.

AUTHORIZATION
Basic Auth
This request is using Basic Auth from collectionsticky.io JSON API & Integration v8.52
HEADERS
Content-Type
application/json

Body
raw
View More
{
    "firstName": "Currencytest",
    "lastName": "Test",
    "currency": "JPYY",
    "billingFirstName": "LimeLight",
    "billingLastName": "Test",
    "billingAddress1": "123 Test St",
    "billingCity": "Palm Harbor",
    "billingState": "FL",
    "billingZip": "34684",
    "billingCountry": "US",
    "phone": "9876543210",
    "email": "currencytest@apitest.com",
    "creditCardType": "VISA",
    "creditCardNumber": "4263982640269299",
    "expirationDate": "0223",
    "CVV": "837",
    "shippingId": "52",
    "tranType": "Sale",
    "ipAddress": "2600:1003:b110:ce17:fc26:ae54:ad0d:f67",
    "campaignId": "557",
    "offers": [
        {
            "offer_id": 704,
            "product_id": 855,
            "billing_model_id": 2,
            "quantity": 1
        },
        {
            "offer_id": 704,
            "product_id": 884,
            "billing_model_id": 547,
            "quantity": 1
        }
    ],
    "billingSameAsShipping": "YES",
    "shippingAddress1": "123 Test St",
    "shippingCity": "Palm Harbor",
    "shippingState": "FL",
    "shippingZip": "34684",
    "shippingCountry": "US",
    "forceGatewayId": "704",
    "preserve_force_gateway": "1"
}
Example Request
new_order with trial, step_num and bundle children
View More
curl
curl --location -g 'https://{{app_key}}.{{domain}}{{api_ext}}new_order' \
--header 'Content-Type: application/json' \
--data-raw '{
  "firstName":"Postman",
  "lastName":"API",
  "billingFirstName":"PostingBilling",
  "billingLastName":"APILastname",
  "billingAddress1":"56 Escobar St",
  "billingAddress2":"FL 7",
  "billingCity":"Houston",
  "billingState":"TX",
  "billingZip":"33655",
  "billingCountry":"US",
  "phone":"8135551212",
  "email":"postman@apitest.com",
  "creditCardType":"VISA",
  "creditCardNumber":"1444444444444440",
  "expirationDate":"0628",
  "CVV":"123",
  "shippingId":"2",
  "tranType":"Sale",
  "ipAddress":"198.4.3.2",
  "campaignId":"4",
  "offers":
  [
    {
      "offer_id":"8",
      "product_id":"4",
      "billing_model_id":"6",
      "quantity":"1",
      "children":
      [
        {
          "product_id":"1",
          "quantity":"2"
        },
        {
          "product_id":"2",
          "quantity":"1"
        }
      ]
    },
    {
      "offer_id":"8",
      "product_id":16,
      "billing_model_id":"4",
      "quantity":"2",
      "step_num":"2",
      "trial":
      {
      	"product_id":16
      }
    }
  ],
  "gift":
  {
    "email":"gift@email.com",
    "message":"This is a gift order and this is a gift message"
  },
  "notes":"This is a test order using new_order",
  "AFID":"AFID",
  "SID":"SID",
  "AFFID":"AFFID",
  "C1":"C1",
  "C2":"C2",
  "C3":"C3",
  "AID":"AID",
  "OPT":"OPT",
  "click_id":"abc123",
  "billingSameAsShipping":"YES",
  "shippingAddress1":"123 Medellin St",
  "shippingAddress2":"APT 7",
  "shippingCity":"Santo Alto",
  "shippingState":"TX",
  "shippingZip":"33544",
  "shippingCountry":"US",
  "forceGatewayId":"",
  "preserve_force_gateway":"",
  "thm_session_id":"",
  "total_installments":"",
  "alt_pay_token":"",
  "alt_pay_payer_id":"",
  "secretSSN":"",
  "promoCode":"",
  "temp_customer_id":"",
  "three_d_redirect_url":"",
  "alt_pay_return_url":"",
  "sessionId":"",
  "cascade_override":"",
  "create_member":"",
  "event_id":"",
  "ssn_nmi":"",
  "utm_source":"source",
  "utm_medium":"medium",
  "utm_campaign":"campaign",
  "utm_content":"content",
  "utm_term":"term",
  "device_category":"mobile",
  "checkingAccountNumber":"",
  "checkingRoutingNumber":"",
  "sepa_iban":"",
  "sepa_bic":"",
  "eurodebit_acct_num":"",
  "eurodebit_route_num":"",
  "referrer_id" : "ABCD1234",
  "conversion_id" : "addc703c-6ffd-11e8-a1ea-12f0b4779fbe",
  "cavv" : "BwABAwJoEAAAAABhdWgQAAAAAAA=",
  "eci" : "06",
  "xid" : "YmUyMnFoMmJpbHM1aGJzNjd2MGc="
}'
200 OK
Example Response
Body
Headers (7)
View More
json
{
  "gateway_id": "1",
  "response_code": "100",
  "error_found": "0",
  "order_id": "12927",
  "transactionID": "Not Available",
  "customerId": "430",
  "authId": "Not Available",
  "orderTotal": "61.95",
  "orderSalesTaxPercent": "0.00",
  "orderSalesTaxAmount": "0.00",
  "test": "1",
  "prepaid_match": "0",
  "gatewayCustomerService": "8885551212",
  "gatewayDescriptor": "TestDescriptor",
  "subscription_id": {
    "4": "6f6db5f617d682a7b592e93c298d29d7",
    "16": "87f6c17583b39bc5cec9ee7d71fc56d5"
  },
  "resp_msg": "Approved"
}
POST
new_order_card_on_file
https://{{app_key}}.{{domain}}{{api_ext}}new_order_card_on_file
Create a new Order using a previousOrderId. See Orders section for required and optional parameters.

AUTHORIZATION
Basic Auth
Username
{{api_username}}

Password
{{api_password}}

HEADERS
Content-Type
application/json

Body
raw
View More
{
  "previousOrderId":"843130",
  "shippingId":"5",
  "ipAddress":"198.4.3.2",
  "campaignId":"4",
  "offers":
  [
    {
      "offer_id":6,
      "product_id":608,
      "billing_model_id":2,
      "quantity":2,
      "step_num":2,
      "variant":
      [
      	{
      		"attribute_name":"pink",
      		"attribute_value":"yes"
      	}
      ]
    },
    {
      "offer_id":10,
      "product_id":4,
      "billing_model_id":6,
      "quantity":1,
      "children":
      [
        {
          "product_id":1,
          "quantity":2
        },
        {
          "product_id":2,
          "quantity":1
        }
      ]
    },
    {
      "offer_id":8,
      "product_id":16,
      "billing_model_id":4,
      "quantity":2,
      "step_num":3,
      "trial":
      {
      	"product_id":16
      }
    }
  ],
  "gift":
  {
    "email":"gift@email.com",
    "message":"This is a gift order and this is a gift message"
  },
  "notes":"This is a test order using new_order_card_on_file",
  "AFID":"AFID",
  "SID":"SID",
  "AFFID":"AFFID",
  "C1":"C1",
  "C2":"C2",
  "C3":"C3",
  "AID":"AID",
  "OPT":"OPT",
  "click_id":"abc123",
  "forceGatewayId":"",
  "preserve_force_gateway":"",
  "promoCode":"",
  "temp_customer_id":"",
  "sessionId":"",
  "cascade_override":"",
  "utm_source":"source",
  "utm_medium":"medium",
  "utm_campaign":"campaign",
  "utm_content":"content",
  "utm_term":"term",
  "device_category":"mobile",
  "referrer_id" : "",
  "conversion_id" : "addc703c-6ffd-11e8-a1ea-12f0b4779fbe",
  "cavv" : "BwABAwJoEAAAAABhdWgQAAAAAAA=",
  "eci" : "06",
  "xid" : "YmUyMnFoMmJpbHM1aGJzNjd2MGc="
}
Example Request
new_order_card_on_file
View More
curl
curl --location -g 'https://{{app_key}}.{{domain}}{{api_ext}}new_order_card_on_file' \
--header 'Content-Type: application/json' \
--data-raw '{
  "previousOrderId":"843130",
  "shippingId":"5",
  "ipAddress":"198.4.3.2",
  "campaignId":"4",
  "offers":
  [
    {
      "offer_id":6,
      "product_id":608,
      "billing_model_id":2,
      "quantity":2,
      "step_num":2,
      "variant":
      [
      	{
      		"attribute_name":"pink",
      		"attribute_value":"yes"
      	}
      ]
    },
    {
      "offer_id":10,
      "product_id":4,
      "billing_model_id":6,
      "quantity":1,
      "children":
      [
        {
          "product_id":1,
          "quantity":2
        },
        {
          "product_id":2,
          "quantity":1
        }
      ]
    },
    {
      "offer_id":8,
      "product_id":16,
      "billing_model_id":4,
      "quantity":2,
      "step_num":3,
      "trial":
      {
      	"product_id":16
      }
    }
  ],
  "gift":
  {
    "email":"gift@email.com",
    "message":"This is a gift order and this is a gift message"
  },
  "notes":"This is a test order using new_order_card_on_file",
  "AFID":"AFID",
  "SID":"SID",
  "AFFID":"AFFID",
  "C1":"C1",
  "C2":"C2",
  "C3":"C3",
  "AID":"AID",
  "OPT":"OPT",
  "click_id":"abc123",
  "forceGatewayId":"",
  "preserve_force_gateway":"",
  "promoCode":"",
  "temp_customer_id":"",
  "sessionId":"",
  "cascade_override":"",
  "utm_source":"source",
  "utm_medium":"medium",
  "utm_campaign":"campaign",
  "utm_content":"content",
  "utm_term":"term",
  "device_category":"mobile",
  "referrer_id" : "",
  "conversion_id" : "addc703c-6ffd-11e8-a1ea-12f0b4779fbe",
  "cavv" : "BwABAwJoEAAAAABhdWgQAAAAAAA=",
  "eci" : "06",
  "xid" : "YmUyMnFoMmJpbHM1aGJzNjd2MGc="
}'
200 OK
Example Response
Body
Headers (22)
View More
json
{
  "gateway_id": "3",
  "response_code": "100",
  "error_found": "0",
  "order_id": "843131",
  "transactionID": "9744977465",
  "customerId": "124392",
  "authId": "123456",
  "orderTotal": "132.57",
  "orderSalesTaxPercent": "0.00",
  "orderSalesTaxAmount": "0.00",
  "test": "0",
  "prepaid_match": "0",
  "line_items": [
    {
      "product_id": "608",
      "variant_id": "241",
      "quantity": "2",
      "subscription_id": "56a03c77a1c92e71d969608d8cb1ade1"
    },
    {
      "product_id": "4",
      "variant_id": "0",
      "quantity": "1",
      "subscription_id": "de129d7d2c14ce739a7e048aee30f776"
    },
    {
      "product_id": "16",
      "variant_id": "0",
      "quantity": "1",
      "subscription_id": "d67fb1a5224de4d5d71879d3f2cfab86"
    }
  ],
  "gatewayCustomerService": "800-555-1212",
  "gatewayDescriptor": "Gateway 3",
  "subscription_id": {
    "4": "de129d7d2c14ce739a7e048aee30f776",
    "16": "d67fb1a5224de4d5d71879d3f2cfab86",
    "608-241": "56a03c77a1c92e71d969608d8cb1ade1"
  },
  "decline_level": "0",
  "gateway_code": "100",
  "avs_response": "N",
  "cvv_response": "",
  "processor_id": "ccprocessora",
  "provider_response_code": "100"
}
