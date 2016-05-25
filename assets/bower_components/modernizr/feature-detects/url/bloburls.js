/*!
{
  "name": "Blob URLs",
  "property": "bloburls",
  "caniuse": "bloburls",
  "notes": [{
    "name": "W3C Working Draft",
    "href": "http://www.w3.org/TR/FileAPI/#creating-revoking"
  }],
  "tags": ["file", "url"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
define(["Modernizr","prefixed"],function(e,n){var t=n("URL",window,!1);t=t&&window[t],e.addTest("bloburls",t&&"revokeObjectURL"in t&&"createObjectURL"in t)});