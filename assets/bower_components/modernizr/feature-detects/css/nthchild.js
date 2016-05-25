/*!
{
  "name": "CSS :nth-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "nthchild",
  "tags": ["css"],
  "notes": [
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/pull/685"
    },
    {
      "name": "Sitepoint :nth-child documentation",
      "href": "http://reference.sitepoint.com/css/pseudoclass-nthchild"
    }
  ],
  "authors": ["@emilchristensen"],
  "warnings": ["Known false negative in Safari 3.1 and Safari 3.2.2"]
}
!*/
define(["Modernizr","testStyles"],function(e,n){n("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(n){e.addTest("nthchild",function(){for(var e=n.getElementsByTagName("div"),t=!0,r=0;5>r;r++)t=t&&e[r].offsetWidth===r%2+1;return t})},5)});