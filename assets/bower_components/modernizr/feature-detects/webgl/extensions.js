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
define(["Modernizr","createElement","test/webgl"],function(e,n){e.addAsyncTest(function(){if(e.webglextensions=new Boolean(!1),e.webgl){var t,r,o;try{t=n("canvas"),r=t.getContext("webgl")||t.getContext("experimental-webgl"),o=r.getSupportedExtensions()}catch(i){return}void 0!==r&&(e.webglextensions=new Boolean(!0));for(var a=-1,u=o.length;++a<u;)e.webglextensions[o[a]]=!0;t=void 0}})});