define(["../core","../var/rnothtmlwhite","./var/acceptData"],function(t,e,n){"use strict";function i(){this.expando=t.expando+i.uid++}return i.uid=1,i.prototype={cache:function(t){var e=t[this.expando];return e||(e={},n(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(e,n,i){var r,o=this.cache(e);if("string"==typeof n)o[t.camelCase(n)]=i;else for(r in n)o[t.camelCase(r)]=n[r];return o},get:function(e,n){return void 0===n?this.cache(e):e[this.expando]&&e[this.expando][t.camelCase(n)]},access:function(t,e,n){return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(n,i){var r,o=n[this.expando];if(void 0!==o){if(void 0!==i){t.isArray(i)?i=i.map(t.camelCase):(i=t.camelCase(i),i=i in o?[i]:i.match(e)||[]),r=i.length;for(;r--;)delete o[i[r]]}(void 0===i||t.isEmptyObject(o))&&(n.nodeType?n[this.expando]=void 0:delete n[this.expando])}},hasData:function(e){var n=e[this.expando];return void 0!==n&&!t.isEmptyObject(n)}},i});