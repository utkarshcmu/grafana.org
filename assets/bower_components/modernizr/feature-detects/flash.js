/*!
  {
  "name": "Flash",
  "property": "flash",
  "tags": ["flash"],
  "polyfills": ["shumway"]
  }
  !*/
define(["Modernizr","createElement","docElement","addTest","getBody","isSVG"],function(e,n,t,r,i,o){e.addAsyncTest(function(){var e,a,u=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},s=function(e,n){var t=!!e;if(t&&(t=new Boolean(t),t.blocked="blocked"===e),r("flash",function(){return t}),n&&A.contains(n)){for(;n.parentNode!==A;)n=n.parentNode;A.removeChild(n)}};try{a="ActiveXObject"in window&&"Pan"in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(c){}if(e=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||a),e||o)s(!1);else{var f,l,d=n("embed"),A=i();if(d.type="application/x-shockwave-flash",A.appendChild(d),t.appendChild(A),!("Pan"in d||a))return s("blocked",d),void u(A);f=function(){return t.contains(A)?(t.contains(d)?(l=d.style.cssText,""!==l?s("blocked",d):s(!0,d)):s("blocked"),void u(A)):(A=document.body||A,d=n("embed"),d.type="application/x-shockwave-flash",A.appendChild(d),setTimeout(f,1e3))},setTimeout(f,10)}})});