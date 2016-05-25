/*!
{
  "name": "createElement with Attributes",
  "property": ["createelementattrs", "createelement-attrs"],
  "tags": ["dom"],
  "builderAliases": ["dom_createElement_attrs"],
  "authors": ["James A. Rosen"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/258"
  }]
}
!*/
define(["Modernizr","createElement"],function(e,n){e.addTest("createelementattrs",function(){try{return"test"==n('<input name="test" />').getAttribute("name")}catch(e){return!1}},{aliases:["createelement-attrs"]})});