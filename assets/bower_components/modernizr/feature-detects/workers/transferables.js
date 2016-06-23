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
define(["Modernizr","addTest","test/blob","test/url/bloburls","test/workers/webworkers","test/typed-arrays"],function(A,e){A.addAsyncTest(function(){function t(){e("transferables",!1),n()}function n(){s&&URL.revokeObjectURL(s),c&&c.terminate(),o&&clearTimeout(o)}var i=!!(A.blobconstructor&&A.bloburls&&A.webworkers&&A.typedarrays);if(!i)return e("transferables",!1);try{var r,o,d='var hello = "world"',a=new Blob([d],{type:"text/javascript"}),s=URL.createObjectURL(a),c=new Worker(s);c.onerror=t,o=setTimeout(t,200),r=new ArrayBuffer(1),c.postMessage(r,[r]),e("transferables",0===r.byteLength),n()}catch(l){t()}})});