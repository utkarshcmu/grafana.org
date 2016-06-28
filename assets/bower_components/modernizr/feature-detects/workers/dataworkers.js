/*!
{
  "name": "Workers from Data URIs",
  "property": "dataworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_dataworkers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "https://www.w3.org/TR/workers/"
  }],
  "knownBugs": ["This test may output garbage to console."],
  "authors": ["Jussi Kalliokoski"],
  "async": true
}
!*/
define(["Modernizr","addTest"],function(e,A){e.addAsyncTest(function(){try{var e="Modernizr",n=new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");n.onmessage=function(t){n.terminate(),A("dataworkers",e===t.data),n=null},n.onerror=function(){A("dataworkers",!1),n=null},setTimeout(function(){A("dataworkers",!1)},200),n.postMessage(e)}catch(t){setTimeout(function(){A("dataworkers",!1)},0)}})});