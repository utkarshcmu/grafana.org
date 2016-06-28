/*!
{
  "name": "Transferables Objects",
  "property": "transferables",
  "tags": ["performance", "workers"],
  "builderAliases": ["transferables"],
  "notes": [{
    "name": "HTML5 Rocks article",
    "href": "http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast"
  }],
  "async": true
}
!*/
define(["Modernizr","addTest","test/blob","test/url/bloburls","test/workers/webworkers","test/typed-arrays"],function(e,A){e.addAsyncTest(function(){function n(){A("transferables",!1),t()}function t(){s&&URL.revokeObjectURL(s),c&&c.terminate(),r&&clearTimeout(r)}var i=!!(e.blobconstructor&&e.bloburls&&e.webworkers&&e.typedarrays);if(!i)return A("transferables",!1);try{var o,r,d='var hello = "world"',a=new Blob([d],{type:"text/javascript"}),s=URL.createObjectURL(a),c=new Worker(s);c.onerror=n,r=setTimeout(n,200),o=new ArrayBuffer(1),c.postMessage(o,[o]),A("transferables",0===o.byteLength),t()}catch(l){n()}})});