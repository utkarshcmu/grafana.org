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
define(["Modernizr","createElement","test/canvas"],function(t,e){var n=e("canvas");t.addTest("todataurljpeg",function(){return!!t.canvas&&0===n.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),t.addTest("todataurlpng",function(){return!!t.canvas&&0===n.toDataURL("image/png").indexOf("data:image/png")}),t.addTest("todataurlwebp",function(){var e=!1;try{e=!!t.canvas&&0===n.toDataURL("image/webp").indexOf("data:image/webp")}catch(i){}return e})});