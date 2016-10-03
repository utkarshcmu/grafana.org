/*!
{
  "name": "script[async]",
  "property": "scriptasync",
  "caniuse": "script-async",
  "tags": ["script"],
  "builderAliases": ["script_async"],
  "authors": ["Theodoor van Donge"]
}
!*/
define(["Modernizr","createElement"],function(t,e){t.addTest("scriptasync","async"in e("script"))});