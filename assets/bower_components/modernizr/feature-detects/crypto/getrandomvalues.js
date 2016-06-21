/*!
{
  "name": "getRandomValues",
  "property": "getrandomvalues",
  "caniuse": "window.crypto.getRandomValues",
  "tags": ["crypto"],
  "authors": ["komachi"],
  "notes": [{
    "name": "W3C Editor’s Draft",
    "href": "https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#RandomSource-method-getRandomValues"
  }],
  "polyfills": [
    "polycrypt"
  ]
}
!*/
define(["Modernizr","prefixed","is"],function(e,t,n){var r,o=t("crypto",window);if(o&&"getRandomValues"in o&&"Uint32Array"in window){var i=new Uint32Array(10),d=o.getRandomValues(i);r=d&&n(d[0],"number")}e.addTest("getrandomvalues",!!r)});