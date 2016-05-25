/*!
{
  "name": "Web Intents",
  "property": "webintents",
  "authors": ["Eric Bidelman"],
  "notes": [{
    "name": "Web Intents project site",
    "href": "http://webintents.org/"
  }],
  "polyfills": ["webintents"],
  "builderAliases": ["web_intents"]
}
!*/
define(["Modernizr","prefixed"],function(e,n){e.addTest("webintents",!!n("startActivity",navigator))});