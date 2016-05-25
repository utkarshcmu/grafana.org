/*!
{
  "name": "canvas winding support",
  "property": ["canvaswinding"],
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
    "name": "Article",
    "href": "http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/"
  }]
}
!*/
define(["Modernizr","createElement","test/canvas"],function(e,n){e.addTest("canvaswinding",function(){if(e.canvas===!1)return!1;var t=n("canvas").getContext("2d");return t.rect(0,0,10,10),t.rect(2,2,6,6),t.isPointInPath(5,5,"evenodd")===!1})});