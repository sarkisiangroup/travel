Jump to Content
3DSIntegrator
Guides
API Reference
Home
Log In
3DS with JavaScript SDK

Search
⌘K
Documentation
What's new in version 2.2.20231219?

What is 3-D Secure?
3DS

How to generate a JSON Web Token (JWT) token?
3DS with JavaScript SDK

JS SDK Options
DOM Elements
Verify Method - updated parameters
3DS API

3DS for PSD2

Use of a specific 3DS version
Environments

Test Card Numbers
Integrating 3DS with CRM & Payment Gateways
3DS Response Table of Content
Tokenization Partnerships
Unique Use Cases
The JS SDK for Rebills showing all options
The JS SDK for Upsells
The JS SDK for Performance Marketing Advertisers
The JS SDK for Non-Payment Authentications
API for Non Payment Authenticate Request
The JS SDK for Increasing Approval Rates
Payment Networks Status Codes
MasterCard
Visa, AmericanExpress, Discover, JCB
JS SDK Integration Examples
JS SDK Integration Examples

FAQs
Common Implementation Errors

How to submit a ticket to support?
Glossary
Glossary
Powered by 

3DS with JavaScript SDK
Suggest Edits
How it works?
The JavaScript SDK (JS SDK) operates in the background without the cardholder knowing it's even happening. It is built to look for a particular element that will be added to your checkout page. As soon as it checks that there are values filled in, it will trigger the authentication automatically. The authentication will ideally be completed prior to the cardholder hitting purchase on the checkout page. If the order gets processed prior to it being completed it will stop the authentication and let the order move through.

👍
PSD2

Looking to integrate for PSD2? Please click here for more information.

How to integrate JS SDK into a page?
Include and Instantiate the SDK Library
Drop-in HTML
Tweak the default behavior
Check if it works
Include and instantiate the JS SDK Library
Include JS SDK into a page and instantiate the library.

Fill in your form ID and your API key inside the instantiating method.

Form ID: It's the id="billing-form" of your <form> tag in your checkout page. If it's not there, you'll have to add one.

API key: This can be found in the PAAY Portal. For example, we will use "insert-api-key-here".

Your final page should look similar:

Example:

Payments Page

<html>
  <body>
    <div class="your-page-content">
      <form id="billing-form" action="" method="post">
      </form>
    </div>
    
    <!-- End of page -->
    <script src="https://cdn.3dsintegrator.com/threeds.2.2.20231219.min.js"></script>
    <script>
      var tds = new ThreeDS( // Instantiate the ThreeDS class from the library
        "<insert-form-id-here>", // Provide your form ID DOM element name
        "<insert-your-API-Key>", // Provide your unique API key for your account
        null, // Pass null to indicate the SDK to generate a JWT on our end, or pass your own
      	{
     		endpoint:"https://api-sandbox.3dsintegrator.com/v2.2", // Point to sandbox environment during integration   
        verbose:true, // Setting to true, will print all in the browser console to help debug during integration  
        });
    </script>
  </body>
</html>
🚧
Please note that the endpoint in the code-snippet above points to the Sandbox environment...

The endpoint property inside the JS SDK options object indicates that it is pointing towards the sandbox environment.

ThreeDS instantiating parameters
Parameter	Description	Required	Examples
Form ID	ID element of the form. It's telling the library to look for the information we marked up with the data-threeds=""	Yes	
API Key	Unique api key found in our dashboard	Yes	
null	JWT place holder for sandbox environment
How to generate a JWT token?	No	Only if Options are placed
Options	Additional conditions that override default settings.	No	{autoSubmit: true, verbose: false, etc.}
👍
How to associate a specific merchant URL with the authenticated transaction?

You can use Options {domain: "<www.server.domainname.com"> } constructor option to specify a domain that you would like to set as a merchant url.

Drop-in HTML
To specify what fields should be handled by JS SDK add the following:

data-threeds="possible options"

Without this attribute, a field will not be considered in 3D Secure interaction.

For example:

HTML

1. data-threeds="amount"
2. data-threeds="pan"
3. data-threeds="month"
4. data-threeds="year"
📘
DOM elements

Amex requires specific additional DOM Elements
Increasing approval rates requires the passing of more DOM elements
Take the following snapshots for example,

Before:

Sample payment form

<input type="text" name="x_amount" value="00" />
<input type="text" name="x_card_num" value="0000000000000000" />
<input type="text" name="x_exp_month" value="00" />
<input type="text" name="x_exp_year" value="00" />
After:

Sample form ready for 3DS

<input type="text" name="x_amount" value="00" data-threeds="amount" />
<input type="text" name="x_card_num" value="0000000000000000" data-threeds="pan" />
<input type="text" name="x_exp_month" value="00" data-threeds="month" />
<input type="text" name="x_exp_year" value="00" data-threeds="year"/>
🚧
Expiration Dates

The values for the expiration dates need to be blank by default. By leaving them to blank values it will prevent from the JS SDK to trigger prior to the card holder information is filled in.

Tweak the default behavior
Disable autoSubmit
JS SDK by default (options autoSubmit = true is the default setting) tries to do the authentication in the background as soon as one of the following fields changes:

data-threeds=pan
data-threeds=month
data-threeds=year
To disable or alter this behavior change the options autoSubmit field and look at the verify method.

Using the Challenged Flow
The challenge flow is a great way to increase your authentications rates. Up until now, all the steps have been about setting up the JS SDK through a frictionless flow. Enabling the challenge flow makes the JS SDK a friction flow.

If the issuers ACS decides that they need additional information from the cardholder to authenticate the transaction, a challenge will appear within an iframe. In the frictionless flow, this prompt is hidden from the cardholder and allows the transaction to continue. The transaction in a frictionless flow will not have the chance to get authenticated and it will be processed as a regular transaction without the liability shift.

Authentication methods (e.g., one-time passcode) will vary by ACS/issuer. Each of them will have their version of their SCA to confirm the cardholder. It is a wide variety from answering personal questions, calling a number, etc. As 3DS providers, we do not have visibility on what is being prompted. The only information that is provided is when it is challenged and its completion by the cardholder.

In the case, that Strong Consumer Authentication (SCA) needs to be performed to comply with PSD, based on t the settings of your account, the JS SDK will know to allow the challenge to complete. You are not required to input showChallenge:true and in the case that you set it to false, the JS SDK will override and make sure that SCA is performed.

Adding showChallenge:true to your options is how you will enable the challenge flow in the JS SDK. The challenge will only display if the issuers ACS decides to ask for additional information. It will be displayed in a iframe in the form of your page by default. For styling and positioning, you can grab the iframe by the unique iframe ID is generated. It is provided in the options as iframeId.

HTML

<script>
  var tds = new ThreeDS( // Instantiate the ThreeDS class from the library
    "<insert-form-id-here>", // Provide your form ID DOM element name
    "<insert-your-API-Key>", // Provide your unique API key for your account
   null, // Pass null to indicate the SDK to generate a JWT on our end, or pass your own
    {
      endpoint:"https://api-sandbox.3dsintegrator.com/v2.2", // Point to sandbox environment during integration   
      verbose:true, // Setting to true, will print all in the browser console to help debug during integration  
      showChallenge: true, // Setting it to true, will show the iframe when the issuers ACS decides to challenge
      iframeId: "uniqueThreeDSiframe" // Set a unique iframe ID to place and style when issuers ACS decides to challenge
    });
</script>
In the situation that the challenge is enabled, and you would like to add a limit on time on how long the iframe is open for, you can pair it with forcedTimeout option.

forcedTimeout assigned seconds, is the total amount of time it will take for the initial and the rebill to authenticate. For example, foredTimeout is set to 10 seconds and the initial takes 4 seconds to authenticate, then you will see that the forcedTimeout will state it has 6 seconds for the rebill to complete.

HTML

<script>
  var tds = new ThreeDS( // Instantiate the ThreeDS class from the library
    "<insert-form-id-here>", // Provide your form ID DOM element name
    "<insert-your-API-Key>", // Provide your unique API key for your account
   null, // Pass null to indicate the SDK to generate a JWT on our end, or pass your own
    {
      endpoint:"https://api-sandbox.3dsintegrator.com/v2.2", // Point to sandbox environment during integration   
      verbose:true, // Setting to true, will print all in the browser console to help debug during integration  
      showChallenge: true, // Setting it to true, will show the iframe when the issuers ACS decides to challenge
      iframeId: "uniqueThreeDSiframe" // Set a unique iframe ID to place and style when issuers ACS decides to challenge
      forcedTimeout: "10", // Amount of seconds that cancels the authentication if no response is received
    });
</script>
📘
Other options

If this default trigger of the library doesn't seem ideal, a look at the verify method.
If you would like to show the challenge, review the additional parameters available to customize the JavaScrip SDK based on your needs options.
What happens if the issuers ACS supports lower protocols than 2.2.0?
PAAYs JS SDK prioritizes to authenticate with the highest protocol the issuers ACS supports. In the case that the protocol version is explicitly passed, then it honors the version and moves forward accordingly.

🚧
Setting a protocol explicitly

If you decide to explicitly set a protocol version in protocolVersion, the downgrading benefit will not apply. The JS SDK is going to honor that protocol and if the issuers ACS doesn't support it, an error will be returned.


Check if it works
If everything has been set up correctly you should be able to have your transactions authenticated and can be testing in the PAAY Sandbox. To do this complete the following steps.

Use additional Test Credit Cards to configure based on use case:
Sample configuration

EMV 3DS protocol
Credit Card Number: 4005519200000004
Exp month: 01
Exp year: 22
If the transaction was authenticated add 'verbose:true' in the options. Open the browser console and it will print out based on the protocol.
EMV 3DS Response. For additional types of ECI and status for VISA & other networks.

EMV 3DS Success
EMV 3DS Failed

{
  "authenticationValue": "XYi1pplo2XITHfJdT21SweFz1us=",
  "eci": "05",
  "status": "Y",
  "protocolVersion": "2.2.0",
  "dsTransId": "d65e93c3-35ab-41ba-b307-767bfc19eae3",
  "acsTransId": "ca5f9649-b865-47ce-be6f-54422a0fce47",
  "scaIndicator": false
}
No Results Found
When an authentication is challenged, you'll see a404 error being returned continuously. This is not a system error. It occurs because the results are still pending.

When an issuer’s ACS response in the frictionless flow with a Challenge Request, the results will never be returned because the challenge is not shown. Therefore, this error needs to be ignored for the transaction to be processed without authentication.

In a challenge flow, the JS SDK will keep polling for the results. When the client completes the prompt from the Issuer , it will automatically return the results into the page.

Example of 404 error message:

JSON

GET https://api-sandbox.3dsintegrator.com/v2.2/transaction/43d40dbc-5675-4639-8eac-3970c2eb523d/updates 404
{"error":"No result found for transaction as yet. Please subscribe again","transactionId":"43d40dbc-5675-4639-8eac-3970c2eb523d","correlationId":"2c75543c-34d1-4424-9e98-b303252f51c0"}
Obtaining Required 3DS data for Authorization
At this point you should've been successful integrating 3DS in a sandbox environment. The last step is to make sure that you can obtain the required 3DS data required for authorization to pass forward to the CRM and/or gateways. There are two methods to provide you flexibility.

Resolve call back option
The preferred way is through the option called “resolve” which is a call back. In the case that the transaction was completed, this call back will be triggered. When completed, it will return a response with the complete 3DS object that can be parsed. The object will show that the transaction is either authenticated or not authenticated.

Example

resolve(threedsdata){
  console.log(threedsdata);
  console.log(threedsdata.eci); 
  console.log(threedsdata.authenticationValue);
  console.log(threedsdata.acsTransId); 
  console.log(threedsdata.dsTransId); 
  console.log(threedsdata.protocolVersion);
},

reject(){
  console.log("Error has occurred");
};
The below is how the EMV 3DS version 2.2.0 object is returned in your browser console

EMV 3DS Success
EMV 3DS Failed

{
  "authenticationValue": "XYi1pplo2XITHfJdT21SweFz1us=",
  "eci": "05",
  "status": "Y",
  "protocolVersion": "2.2.0",
  "dsTransId": "d65e93c3-35ab-41ba-b307-767bfc19eae3",
  "acsTransId": "ca5f9649-b865-47ce-be6f-54422a0fce47",
  "scaIndicator": false
}
Live Test
Now, that you've integrated the PAAY JS SDK solution, you'll need to switch to production. After you've tested in production, you will need to begin passing the 3DS data elements required for authorization to your CRM and/or gateway. See 3DS data for required data. True liability shift only happens if your CRM, gateways, and processors receive the 3DS parameters.

Watch our video tutorial where we walk you through our easy integration!
Video Tutorial

Updated 25 days ago

What’s Next
Now that you know how to easy it is to use our JavaScript SDK, ensure your integration works in our sandbox!

You can also look at other options you have to configure the JS SDK!

Switching from Sandbox to Live
Integrating 3DS with CRM & Payment Gateways
Test Card Numbers
JS SDK Options
DOM Elements
How to generate a Jason Web Token (JWT) token?
