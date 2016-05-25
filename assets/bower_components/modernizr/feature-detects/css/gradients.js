/*!
{
  "name": "CSS Gradients",
  "caniuse": "css-gradients",
  "property": "cssgradients",
  "tags": ["css"],
  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
  "notes": [{
    "name": "Webkit Gradient Syntax",
    "href": "http://webkit.org/blog/175/introducing-css-gradients/"
  },{
    "name": "Mozilla Linear Gradient Syntax",
    "href": "http://developer.mozilla.org/en/CSS/-moz-linear-gradient"
  },{
    "name": "Mozilla Radial Gradient Syntax",
    "href": "http://developer.mozilla.org/en/CSS/-moz-radial-gradient"
  },{
    "name": "W3C Gradient Spec",
    "href": "dev.w3.org/csswg/css3-images/#gradients-"
  }]
}
!*/
define(["Modernizr","prefixes","createElement"],function(e,n,t){e.addTest("cssgradients",function(){var r="background-image:",i="gradient(linear,left top,right bottom,from(#9f9),to(white));",o="linear-gradient(left top,#9f9, white);",a=r+n.join(o+r).slice(0,-r.length);e._config.usePrefixes&&(a+=r+"-webkit-"+i);var u=t("a"),s=u.style;return s.cssText=a,(""+s.backgroundImage).indexOf("gradient")>-1})});