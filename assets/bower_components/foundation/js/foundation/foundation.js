/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(e,t,n,i){"use strict";function r(e){return("string"==typeof e||e instanceof String)&&(e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),e}var o=function(t){for(var n=t.length,i=e("head");n--;)0===i.has("."+t[n]).length&&i.append('<meta class="'+t[n]+'" />')};o(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var a=function(t,i){if("string"==typeof t){if(i){var r;if(i.jquery){if(r=i[0],!r)return i}else r=i;return e(r.querySelectorAll(t))}return e(n.querySelectorAll(t))}return e(t,i)},s=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},c=function(e){for(var t=e.split("-"),n=t.length,i=[];n--;)0!==n?i.push(t[n]):this.namespace.length>0?i.push(this.namespace,t[n]):i.push(t[n]);return i.reverse().join("-")},u=function(t,n){var i=this,r=!a(this).data(this.attr_name(!0));return a(this.scope).is("["+this.attr_name()+"]")?(a(this.scope).data(this.attr_name(!0)+"-init",e.extend({},this.settings,n||t,this.data_options(a(this.scope)))),r&&this.events(this.scope)):a("["+this.attr_name()+"]",this.scope).each(function(){var r=!a(this).data(i.attr_name(!0)+"-init");a(this).data(i.attr_name(!0)+"-init",e.extend({},i.settings,n||t,i.data_options(a(this)))),r&&i.events(this)}),"string"==typeof t?this[t].call(this,n):void 0},l=function(e,t){function n(){t(e[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}return e.attr("src")?void(e[0].complete||4===e[0].readyState?n():i.call(e)):void n()};t.matchMedia=t.matchMedia||function(e){var t,n=e.documentElement,i=n.firstElementChild||n.firstChild,r=e.createElement("body"),o=e.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",r.style.background="none",r.appendChild(o),function(e){return o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(r,i),t=42===o.offsetWidth,n.removeChild(r),{matches:t,media:e}}}(n),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(e){function n(){i&&(a(n),c&&jQuery.fx.tick())}for(var i,r=0,o=["webkit","moz"],a=t.requestAnimationFrame,s=t.cancelAnimationFrame,c="undefined"!=typeof jQuery.fx;r<o.length&&!a;r++)a=t[o[r]+"RequestAnimationFrame"],s=s||t[o[r]+"CancelAnimationFrame"]||t[o[r]+"CancelRequestAnimationFrame"];a?(t.requestAnimationFrame=a,t.cancelAnimationFrame=s,c&&(jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!i&&(i=!0,n())},jQuery.fx.stop=function(){i=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-r)),o=t.setTimeout(function(){e(n+i)},i);return r=n+i,o},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(jQuery),t.Foundation={name:"Foundation",version:"5.4.7",media_queries:{small:a(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:a(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:a(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:a(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:a(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:i},init:function(e,n,i,r,o){var s=[e,i,r,o],c=[];if(this.rtl=/rtl/i.test(a("html").attr("dir")),this.scope=e||this.scope,this.set_namespace(),n&&"string"==typeof n&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&c.push(this.init_lib(n,s));else for(var u in this.libs)c.push(this.init_lib(u,n));return a(t).load(function(){a(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),e},init_lib:function(t,n){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),n&&n.hasOwnProperty(t)?("undefined"!=typeof this.libs[t].settings?e.extend(!0,this.libs[t].settings,n[t]):"undefined"!=typeof this.libs[t].defaults&&e.extend(!0,this.libs[t].defaults,n[t]),this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])):(n=n instanceof Array?n:new Array(n),this.libs[t].init.apply(this.libs[t],n))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=s,e.add_namespace=c,e.bindings=u,e.S=this.utils.S},inherit:function(e,t){for(var n=t.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(e[n[i]]=this.utils[n[i]])},set_namespace:function(){var t=this.global.namespace===i?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===i||/false/i.test(t)?"":t},libs:{},utils:{S:a,throttle:function(e,t){var n=null;return function(){var i=this,r=arguments;null==n&&(n=setTimeout(function(){e.apply(i,r),n=null},t))}},debounce:function(e,t,n){var i,r;return function(){var o=this,a=arguments,s=function(){i=null,n||(r=e.apply(o,a))},c=n&&!i;return clearTimeout(i),i=setTimeout(s,t),c&&(r=e.apply(o,a)),r}},data_options:function(t,n){function i(e){return!isNaN(e-0)&&null!==e&&""!==e&&e!==!1&&e!==!0}function r(t){return"string"==typeof t?e.trim(t):t}n=n||"options";var o,a,s,c={},u=function(e){var t=Foundation.global.namespace;return t.length>0?e.data(t+"-"+n):e.data(n)},l=u(t);if("object"==typeof l)return l;for(s=(l||":").split(";"),o=s.length;o--;)a=s[o].split(":"),a=[a[0],a.slice(1).join(":")],/true/i.test(a[1])&&(a[1]=!0),/false/i.test(a[1])&&(a[1]=!1),i(a[1])&&(-1===a[1].indexOf(".")?a[1]=parseInt(a[1],10):a[1]=parseFloat(a[1])),2===a.length&&a[0].length>0&&(c[r(a[0])]=r(a[1]));return c},register_media:function(t,n){Foundation.media_queries[t]===i&&(e("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[t]=r(e("."+n).css("font-family")))},add_custom_rule:function(e,t){if(t===i&&Foundation.stylesheet)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }")}},image_loaded:function(e,t){var n=this,i=e.length;0===i&&t(e),e.each(function(){l(n.S(this),function(){i-=1,0===i&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}}(jQuery,window,window.document);