define(["../core","../var/document","./var/rsingleTag","../traversing/findFilter"],function(t,e,n){"use strict";var i,r=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,o=t.fn.init=function(o,s,a){var c,l;if(!o)return this;if(a=a||i,"string"==typeof o){if(c="<"===o[0]&&">"===o[o.length-1]&&o.length>=3?[null,o,null]:r.exec(o),!c||!c[1]&&s)return!s||s.jquery?(s||a).find(o):this.constructor(s).find(o);if(c[1]){if(s=s instanceof t?s[0]:s,t.merge(this,t.parseHTML(c[1],s&&s.nodeType?s.ownerDocument||s:e,!0)),n.test(c[1])&&t.isPlainObject(s))for(c in s)t.isFunction(this[c])?this[c](s[c]):this.attr(c,s[c]);return this}return l=e.getElementById(c[2]),l&&(this[0]=l,this.length=1),this}return o.nodeType?(this[0]=o,this.length=1,this):t.isFunction(o)?void 0!==a.ready?a.ready(o):o(t):t.makeArray(o,this)};return o.prototype=t.fn,i=t(e),o});