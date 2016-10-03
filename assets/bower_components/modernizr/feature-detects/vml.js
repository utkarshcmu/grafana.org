/*!
{
  "name": "VML",
  "property": "vml",
  "caniuse": "vml",
  "tags": ["vml"],
  "authors": ["Craig Andrews (@candrews)"],
  "notes": [{
    "name" : "W3C VML reference",
    "href": "https://www.w3.org/TR/NOTE-VML"
  },{
    "name" : "Microsoft VML reference",
    "href": "https://msdn.microsoft.com/en-us/library/bb263898.aspx"
  }]
}
!*/
define(["Modernizr","createElement","isSVG"],function(t,e,n){t.addTest("vml",function(){var t,i=e("div"),r=!1;return n||(i.innerHTML='<v:shape id="vml_flag1" adj="1" />',t=i.firstChild,t.style.behavior="url(#default#VML)",r=t?"object"==typeof t.adj:!0),r})});