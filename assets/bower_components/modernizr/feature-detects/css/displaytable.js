/*!
{
  "name": "CSS Display table",
  "property": "displaytable",
  "caniuse": "css-table",
  "authors": ["scottjehl"],
  "tags": ["css"],
  "builderAliases": ["css_displaytable"],
  "notes": [{
    "name": "Detects for all additional table display values",
    "href": "http://pastebin.com/Gk9PeVaQ"
  }]
}
!*/
define(["Modernizr","testStyles"],function(e,n){n("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(n){var t,r=n.childNodes;t=r[0].offsetLeft<r[1].offsetLeft,e.addTest("displaytable",t,{aliases:["display-table"]})},2)});