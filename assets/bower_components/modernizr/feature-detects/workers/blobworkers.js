/*!
{
  "name": "Workers from Blob URIs",
  "property": "blobworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_blobworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/
define(["Modernizr","addTest"],function(A,e){A.addAsyncTest(function(){function t(){e("blobworkers",!1),n()}function n(){s&&r.revokeObjectURL(s),a&&a.terminate(),c&&clearTimeout(c)}try{var i=window.BlobBuilder,r=window.URL;A._config.usePrefix&&(i=i||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,r=r||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var o,d,a,s,c,l="Modernizr",u="this.onmessage=function(e){postMessage(e.data)}";try{o=new Blob([u],{type:"text/javascript"})}catch(f){}o||(d=new i,d.append(u),o=d.getBlob()),s=r.createObjectURL(o),a=new Worker(s),a.onmessage=function(A){e("blobworkers",l===A.data),n()},a.onerror=t,c=setTimeout(t,200),a.postMessage(l)}catch(f){t()}})});