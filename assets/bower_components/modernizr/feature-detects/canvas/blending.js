/*!
{
  "name": "canvas blending support",
  "property": "canvasblending",
  "tags": ["canvas"],
  "async" : false,
  "notes": [{
      "name": "HTML5 Spec",
      "href": "https://dvcs.w3.org/hg/FXTF/rawfile/tip/compositing/index.html#blending"
    },
    {
      "name": "Article",
      "href": "https://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas"
    }]
}
!*/
define(["Modernizr","createElement","test/canvas"],function(t,e){t.addTest("canvasblending",function(){if(t.canvas===!1)return!1;var n=e("canvas").getContext("2d");try{n.globalCompositeOperation="screen"}catch(i){}return"screen"===n.globalCompositeOperation})});