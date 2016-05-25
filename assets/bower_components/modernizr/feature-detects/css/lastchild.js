/*!
{
  "name": "CSS :last-child pseudo-selector",
  "caniuse": "css-sel3",
  "property": "lastchild",
  "tags": ["css"],
  "builderAliases": ["css_lastchild"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/304"
  }]
}
!*/
define(["Modernizr","testStyles"],function(e,n){n("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(n){e.addTest("lastchild",n.lastChild.offsetWidth>n.firstChild.offsetWidth)},2)});