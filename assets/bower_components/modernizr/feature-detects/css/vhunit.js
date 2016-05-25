/*!
{
  "name": "CSS vh unit",
  "property": "cssvhunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vhunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "Similar JSFiddle",
    "href": "http://jsfiddle.net/FWeinb/etnYC/"
  }]
}
!*/
define(["Modernizr","testStyles"],function(e,n){n("#modernizr { height: 50vh; }",function(n){var t=parseInt(window.innerHeight/2,10),r=parseInt((window.getComputedStyle?getComputedStyle(n,null):n.currentStyle).height,10);e.addTest("cssvhunit",r==t)})});