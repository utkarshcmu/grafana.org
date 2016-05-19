/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return r.raw?e:encodeURIComponent(e)}function n(e){return r.raw?e:decodeURIComponent(e)}function o(e){return t(r.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(f," "))}catch(t){return}try{return r.json?JSON.parse(e):e}catch(t){}}function s(t,n){var o=r.raw?t:i(t);return e.isFunction(n)?n(o):o}var f=/\+/g,r=e.cookie=function(i,f,c){if(void 0!==f&&!e.isFunction(f)){if(c=e.extend({},r.defaults,c),"number"==typeof c.expires){var u=c.expires,a=c.expires=new Date;a.setDate(a.getDate()+u)}return document.cookie=[t(i),"=",o(f),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var p=i?void 0:{},l=document.cookie?document.cookie.split("; "):[],d=0,g=l.length;g>d;d++){var m=l[d].split("="),h=n(m.shift()),v=m.join("=");if(i&&i===h){p=s(v,f);break}i||void 0===(v=s(v))||(p[h]=v)}return p};r.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});