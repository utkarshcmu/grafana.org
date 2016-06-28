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
define(["Modernizr","createElement","test/webgl"],function(e,A){e.addAsyncTest(function(){if(e.webglextensions=new Boolean(!1),e.webgl){var n,t,i;try{n=A("canvas"),t=n.getContext("webgl")||n.getContext("experimental-webgl"),i=t.getSupportedExtensions()}catch(o){return}void 0!==t&&(e.webglextensions=new Boolean(!0));for(var r=-1,d=i.length;++r<d;)e.webglextensions[i[r]]=!0;n=void 0}})});