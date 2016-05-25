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
define(["Modernizr","addTest","test/blob","test/url/bloburls","test/workers/webworkers","test/typed-arrays"],function(e,n){e.addAsyncTest(function(){function t(){n("transferables",!1),r()}function r(){c&&URL.revokeObjectURL(c),f&&f.terminate(),a&&clearTimeout(a)}var i=!!(e.blobconstructor&&e.bloburls&&e.webworkers&&e.typedarrays);if(!i)return n("transferables",!1);try{var o,a,u='var hello = "world"',s=new Blob([u],{type:"text/javascript"}),c=URL.createObjectURL(s),f=new Worker(c);f.onerror=t,a=setTimeout(t,200),o=new ArrayBuffer(1),f.postMessage(o,[o]),n("transferables",0===o.byteLength),r()}catch(l){t()}})});