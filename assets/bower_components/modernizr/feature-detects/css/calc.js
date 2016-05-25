/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
define(["Modernizr","createElement","prefixes"],function(e,n,t){e.addTest("csscalc",function(){var e="width:",r="calc(10px);",i=n("a");return i.style.cssText=e+t.join(r+e),!!i.style.length})});