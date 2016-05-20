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
define(["Modernizr","createElement","prefixes"],function(e,t,n){e.addTest("csscalc",function(){var e="width:",o="calc(10px);",c=t("a");return c.style.cssText=e+n.join(o+e),!!c.style.length})});