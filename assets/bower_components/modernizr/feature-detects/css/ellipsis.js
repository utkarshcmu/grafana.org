/*!
{
  "name": "CSS text-overflow ellipsis",
  "property": "ellipsis",
  "caniuse": "text-overflow",
  "polyfills": [
    "text-overflow"
  ],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,n){e.addTest("ellipsis",n("textOverflow","ellipsis"))});