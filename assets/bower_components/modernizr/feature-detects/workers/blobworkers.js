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
define(["Modernizr","addTest"],function(e,A){e.addAsyncTest(function(){function n(){A("blobworkers",!1),t()}function t(){s&&o.revokeObjectURL(s),a&&a.terminate(),c&&clearTimeout(c)}try{var i=window.BlobBuilder,o=window.URL;e._config.usePrefix&&(i=i||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,o=o||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var r,d,a,s,c,l="Modernizr",f="this.onmessage=function(e){postMessage(e.data)}";try{r=new Blob([f],{type:"text/javascript"})}catch(u){}r||(d=new i,d.append(f),r=d.getBlob()),s=o.createObjectURL(r),a=new Worker(s),a.onmessage=function(e){A("blobworkers",l===e.data),t()},a.onerror=n,c=setTimeout(n,200),a.postMessage(l)}catch(u){n()}})});