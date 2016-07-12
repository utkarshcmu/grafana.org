/*!
{
  "name": "WebGL Extensions",
  "property": "webglextensions",
  "tags": ["webgl", "graphics"],
  "builderAliases": ["webgl_extensions"],
  "async" : true,
  "authors": ["Ilmari Heikkinen"],
  "knownBugs": [],
  "notes": [{
    "name": "Kronos extensions registry",
    "href": "http://www.khronos.org/registry/webgl/extensions/"
  }]
}
!*/
define(["Modernizr","createElement","test/webgl"],function(e,t){e.addAsyncTest(function(){if(e.webglextensions=new Boolean(!1),e.webgl){var n,i,r;try{n=t("canvas"),i=n.getContext("webgl")||n.getContext("experimental-webgl"),r=i.getSupportedExtensions()}catch(o){return}void 0!==i&&(e.webglextensions=new Boolean(!0));for(var a=-1,s=r.length;++a<s;)e.webglextensions[r[a]]=!0;n=void 0}})});