define(["isSVG"],function(e){var t;return e||!function(e,t){function n(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function o(){var e=x.elements;return"string"==typeof e?e.split(" "):e}function r(e,t){var n=x.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),x.elements=n+" "+e,u(t)}function i(e){var t=y[e[b]];return t||(t={},g++,e[b]=g,y[g]=t),t}function a(e,n,o){if(n||(n=t),m)return n.createElement(e);o||(o=i(n));var r;return r=o.cache[e]?o.cache[e].cloneNode():h.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e),!r.canHaveChildren||p.test(e)||r.tagUrn?r:o.frag.appendChild(r)}function d(e,n){if(e||(e=t),m)return e.createDocumentFragment();n=n||i(e);for(var r=n.frag.cloneNode(),a=0,d=o(),c=d.length;c>a;a++)r.createElement(d[a]);return r}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return x.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(x,t.frag)}function u(e){e||(e=t);var o=i(e);return!x.shivCSS||f||o.hasCSS||(o.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),m||c(e,o),e}var f,m,s="3.7.3",l=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,m=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,m=!0}}();var x={elements:l.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:s,shivCSS:l.shivCSS!==!1,supportsUnknownElements:m,shivMethods:l.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:d,addElements:r};e.html5=x,u(t),"object"==typeof module&&module.exports&&(module.exports=x)}("undefined"!=typeof window?window:this,document),t});