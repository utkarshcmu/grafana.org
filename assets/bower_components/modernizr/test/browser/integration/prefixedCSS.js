describe("prefixedCSS",function(){function e(e,t){var n,r=["Moz","Khtml","Webkit","O","ms"],i=["moz","khtml","webkit","o","ms"],o=document.createElement("div"),a=e.charAt(0).toUpperCase()+e.slice(1);if(t){if(e in t)return e;for(n=i.length;n--;)if(i[n]+a in t)return i[n]+a}else{if(e in o.style)return e;for(n=r.length;n--;)if(r[n]+a in o.style)return r[n]+a}return!1}function t(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function n(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function r(r){var i=e(n(r));i?it("results for "+r+" match the homebaked prefix finder",function(){expect(Modernizr.prefixedCSS(r)).to.be(t(i))}):it("results for "+r+" match the homebaked prefix finder",function(){expect(Modernizr.prefixedCSS(r)).to.be(!1)})}r("animationProperty"),r("fontFeatureSettings"),r("flexWrap"),r("boxSizing"),r("textShadow"),r("resize"),r("animation-property"),r("font-feature-settings"),r("flex-wrap"),r("box-sizing"),r("text-shadow")});