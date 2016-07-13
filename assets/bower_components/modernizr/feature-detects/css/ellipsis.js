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
define(["Modernizr","testAllProps"],function(t,e){t.addTest("ellipsis",e("textOverflow","ellipsis"))});