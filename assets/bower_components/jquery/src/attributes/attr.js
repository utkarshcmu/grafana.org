define(["../core","../core/access","./support","../var/rnothtmlwhite","../selector"],function(t,e,n,i){"use strict";var r,o=t.expr.attrHandle;t.fn.extend({attr:function(n,i){return e(this,t.attr,n,i,arguments.length>1)},removeAttr:function(e){return this.each(function(){t.removeAttr(this,e)})}}),t.extend({attr:function(e,n,i){var o,s,a=e.nodeType;if(3!==a&&8!==a&&2!==a)return"undefined"==typeof e.getAttribute?t.prop(e,n,i):(1===a&&t.isXMLDoc(e)||(s=t.attrHooks[n.toLowerCase()]||(t.expr.match.bool.test(n)?r:void 0)),void 0!==i?null===i?void t.removeAttr(e,n):s&&"set"in s&&void 0!==(o=s.set(e,i,n))?o:(e.setAttribute(n,i+""),i):s&&"get"in s&&null!==(o=s.get(e,n))?o:(o=t.find.attr(e,n),null==o?void 0:o))},attrHooks:{type:{set:function(e,i){if(!n.radioValue&&"radio"===i&&t.nodeName(e,"input")){var r=e.value;return e.setAttribute("type",i),r&&(e.value=r),i}}}},removeAttr:function(t,e){var n,r=0,o=e&&e.match(i);if(o&&1===t.nodeType)for(;n=o[r++];)t.removeAttribute(n)}}),r={set:function(e,n,i){return n===!1?t.removeAttr(e,i):e.setAttribute(i,i),i}},t.each(t.expr.match.bool.source.match(/\w+/g),function(e,n){var i=o[n]||t.find.attr;o[n]=function(t,e,n){var r,s,a=e.toLowerCase();return n||(s=o[a],o[a]=r,r=null!=i(t,e,n)?a:null,o[a]=s),r}})});