define(["./core","./core/access","./css"],function(t,e){return t.each({Height:"height",Width:"width"},function(n,r){t.each({padding:"inner"+n,content:r,"":"outer"+n},function(i,o){t.fn[o]=function(o,a){var s=arguments.length&&(i||"boolean"!=typeof o),u=i||(o===!0||a===!0?"margin":"border");return e(this,function(e,r,i){var o;return t.isWindow(e)?e.document.documentElement["client"+n]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+n],o["scroll"+n],e.body["offset"+n],o["offset"+n],o["client"+n])):void 0===i?t.css(e,r,u):t.style(e,r,i,u)},r,s?o:void 0,s,null)}})}),t});