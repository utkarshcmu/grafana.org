define(["../core","../core/stripAndCollapse","../var/rnothtmlwhite","../data/var/dataPriv","../core/init"],function(t,e,n,i){"use strict";function r(t){return t.getAttribute&&t.getAttribute("class")||""}t.fn.extend({addClass:function(i){var o,s,a,l,c,u,d,f=0;if(t.isFunction(i))return this.each(function(e){t(this).addClass(i.call(this,e,r(this)))});if("string"==typeof i&&i)for(o=i.match(n)||[];s=this[f++];)if(l=r(s),a=1===s.nodeType&&" "+e(l)+" "){for(u=0;c=o[u++];)a.indexOf(" "+c+" ")<0&&(a+=c+" ");d=e(a),l!==d&&s.setAttribute("class",d)}return this},removeClass:function(i){var o,s,a,l,c,u,d,f=0;if(t.isFunction(i))return this.each(function(e){t(this).removeClass(i.call(this,e,r(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof i&&i)for(o=i.match(n)||[];s=this[f++];)if(l=r(s),a=1===s.nodeType&&" "+e(l)+" "){for(u=0;c=o[u++];)for(;a.indexOf(" "+c+" ")>-1;)a=a.replace(" "+c+" "," ");d=e(a),l!==d&&s.setAttribute("class",d)}return this},toggleClass:function(e,o){var s=typeof e;return"boolean"==typeof o&&"string"===s?o?this.addClass(e):this.removeClass(e):t.isFunction(e)?this.each(function(n){t(this).toggleClass(e.call(this,n,r(this),o),o)}):this.each(function(){var o,a,l,c;if("string"===s)for(a=0,l=t(this),c=e.match(n)||[];o=c[a++];)l.hasClass(o)?l.removeClass(o):l.addClass(o);else(void 0===e||"boolean"===s)&&(o=r(this),o&&i.set(this,"__className__",o),this.setAttribute&&this.setAttribute("class",o||e===!1?"":i.get(this,"__className__")||""))})},hasClass:function(t){var n,i,o=0;for(n=" "+t+" ";i=this[o++];)if(1===i.nodeType&&(" "+e(r(i))+" ").indexOf(n)>-1)return!0;return!1}})});