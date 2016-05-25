/*!
{
  "name": "Emoji",
  "property": "emoji"
}
!*/
define(["Modernizr","createElement","test/canvastext"],function(e,n){e.addTest("emoji",function(){if(!e.canvastext)return!1;var t=window.devicePixelRatio||1,r=12*t,i=n("canvas"),o=i.getContext("2d");return o.fillStyle="#f00",o.textBaseline="top",o.font="32px Arial",o.fillText("\ud83d\udc28",0,0),0!==o.getImageData(r,r,1,1).data[0]})});