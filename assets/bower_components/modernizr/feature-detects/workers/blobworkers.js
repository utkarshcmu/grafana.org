/*!
{
  "name": "Workers from Blob URIs",
  "property": "blobworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_blobworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "http://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/
define(["Modernizr","addTest"],function(e,n){e.addAsyncTest(function(){function t(){n("blobworkers",!1),r()}function r(){c&&o.revokeObjectURL(c),s&&s.terminate(),f&&clearTimeout(f)}try{var i=window.BlobBuilder,o=window.URL;e._config.usePrefix&&(i=i||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,o=o||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var a,u,s,c,f,l="Modernizr",d="this.onmessage=function(e){postMessage(e.data)}";try{a=new Blob([d],{type:"text/javascript"})}catch(A){}a||(u=new i,u.append(d),a=u.getBlob()),c=o.createObjectURL(a),s=new Worker(c),s.onmessage=function(e){n("blobworkers",l===e.data),r()},s.onerror=t,f=setTimeout(t,200),s.postMessage(l)}catch(A){t()}})});