define(["../core","../var/support"],function(t,e){return function(){function n(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",o.appendChild(a);var t=window.getComputedStyle(s,null);r="1%"!==t.top,i="4px"===t.width,o.removeChild(a)}var r,i,o=document.documentElement,a=document.createElement("div"),s=document.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",e.clearCloneStyle="content-box"===s.style.backgroundClip,a.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",a.appendChild(s),window.getComputedStyle&&t.extend(e,{pixelPosition:function(){return n(),r},boxSizingReliable:function(){return null==i&&n(),i},reliableMarginRight:function(){var t,e=s.appendChild(document.createElement("div"));return e.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",e.style.marginRight=e.style.width="0",s.style.width="1px",o.appendChild(a),t=!parseFloat(window.getComputedStyle(e,null).marginRight),o.removeChild(a),s.removeChild(e),t}}))}(),e});