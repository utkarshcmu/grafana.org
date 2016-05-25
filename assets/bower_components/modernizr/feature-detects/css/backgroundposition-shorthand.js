/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3 Spec",
    "href": "http://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "http://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/
define(["Modernizr","createElement"],function(e,n){e.addTest("bgpositionshorthand",function(){var e=n("a"),t=e.style,r="right 10px bottom 10px";return t.cssText="background-position: "+r+";",t.backgroundPosition===r})});