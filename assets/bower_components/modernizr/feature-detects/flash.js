/*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/
define(["Modernizr","createElement","docElement","addTest","getBody","isSVG"],function(t,e,n,i,r,o){t.addAsyncTest(function(){var t,s,a=function(t){n.contains(t)||n.appendChild(t)},l=function(t){t.fake&&t.parentNode&&t.parentNode.removeChild(t)},c=function(t,e){var n=!!t;if(n&&(n=new Boolean(n),n.blocked="blocked"===t),i("flash",function(){return n}),e&&p.contains(e)){for(;e.parentNode!==p;)e=e.parentNode;p.removeChild(e)}};try{s="ActiveXObject"in window&&"Pan"in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(u){}if(t=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||s),t||o)c(!1);else{var d,f,h=e("embed"),p=r();if(h.type="application/x-shockwave-flash",p.appendChild(h),!("Pan"in h||s))return a(p),c("blocked",h),void l(p);d=function(){return a(p),n.contains(p)?(n.contains(h)?(f=h.style.cssText,""!==f?c("blocked",h):c(!0,h)):c("blocked"),void l(p)):(p=document.body||p,h=e("embed"),h.type="application/x-shockwave-flash",p.appendChild(h),setTimeout(d,1e3))},setTimeout(d,10)}})});