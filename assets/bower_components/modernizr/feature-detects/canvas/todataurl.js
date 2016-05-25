/*!
{
  "name": "canvas.toDataURL type support",
  "property": ["todataurljpeg", "todataurlpng", "todataurlwebp"],
  "tags": ["canvas"],
  "builderAliases": ["canvas_todataurl_type"],
  "async" : false,
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toDataURL"
  }]
}
!*/
define(["Modernizr","createElement","test/canvas"],function(e,n){var t=n("canvas");e.addTest("todataurljpeg",function(){return!!e.canvas&&0===t.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),e.addTest("todataurlpng",function(){return!!e.canvas&&0===t.toDataURL("image/png").indexOf("data:image/png")}),e.addTest("todataurlwebp",function(){var n=!1;try{n=!!e.canvas&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}catch(r){}return n})});