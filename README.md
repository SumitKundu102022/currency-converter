# Currency Converter Web App

<p>This is a simple web application for converting currencies using HTML, CSS, JavaScript, and an API.</p>

<h2>Features</h2>
<ul>
<li>Convert currencies quickly and easily.</li>
<li>Up-to-date exchange rates fetched from a reliable API.</li>
<li>User-friendly interface with intuitive design.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
<li>HTML: Markup language for structuring the web page.</li>
<li>CSS: Styling language to enhance the visual presentation.</li>
<li>JavaScript: Programming language for implementing dynamic behavior.</li>
<li>API: An external API to fetch current exchange rates.</li>
</ul>

<h2>Usage</h2>
<ol>
<li>Clone or download the repository to your local machine.</li>
<li>Open index.html in a web browser.</li>
<li>Enter the amount and select the currencies you want to convert between.</li>
<li>Click on the "GET EXCHANGE RATE" button to see the converted amount.</li>
</ol>

<h2>APIs</h2>
<p>This web app utilizes an external API to fetch the latest exchange rates. You can choose from various currency exchange APIs available online, such as:</p>

<ul>
<li>Open Exchange Rates API</li>
<li>Flag change API with JS code</li>
<li>ExchangeRate-API</li>
</ul>

<p>Make sure to sign up for an API key and replace the placeholder with your actual API key in the JavaScript code.</p>

<code>
//javaScript code
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

  //other changes have to made in updateFlag function
   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

</code>

<h2>Contributing</h2>
<p>Contributions are welcome! If you have any suggestions, improvements, or feature requests, feel free to open an issue or submit a pull request.</p>

<h2>License</h2>
<p>This project is licensed under the <a href="#">MIT License</a>.</p>