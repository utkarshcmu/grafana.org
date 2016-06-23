/*!
{
  "name": "Animated PNG",
  "async": true,
  "property": "apng",
  "tags": ["image"],
  "builderAliases": ["img_apng"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "https://en.wikipedia.org/wiki/APNG"
  }]
}
!*/
define(["Modernizr","createElement","addTest","test/canvas"],function(A,w,e){A.addAsyncTest(function(){if(!A.canvas)return!1;var D=new Image,P=w("canvas"),n=P.getContext("2d");D.onload=function(){e("apng",function(){return"undefined"==typeof P.getContext?!1:(n.drawImage(D,0,0),0===n.getImageData(0,0,1,1).data[3])})},D.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="})});