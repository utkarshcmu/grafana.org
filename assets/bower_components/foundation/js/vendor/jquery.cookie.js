/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){function e(t){return o.raw?t:encodeURIComponent(t)}function n(t){return o.raw?t:decodeURIComponent(t)}function i(t){return e(o.json?JSON.stringify(t):String(t))}function s(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return t=decodeURIComponent(t.replace(r," ")),o.json?JSON.parse(t):t}catch(e){}}function a(e,n){var i=o.raw?e:s(e);return t.isFunction(n)?n(i):i}var r=/\+/g,o=t.cookie=function(s,r,l){if(void 0!==r&&!t.isFunction(r)){if(l=t.extend({},o.defaults,l),"number"==typeof l.expires){var c=l.expires,d=l.expires=new Date;d.setTime(+d+864e5*c)}return document.cookie=[e(s),"=",i(r),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var u=s?void 0:{},h=document.cookie?document.cookie.split("; "):[],f=0,p=h.length;p>f;f++){var g=h[f].split("="),m=n(g.shift()),v=g.join("=");if(s&&s===m){u=a(v,r);break}s||void 0===(v=a(v))||(u[m]=v)}return u};o.defaults={},t.removeCookie=function(e,n){return void 0===t.cookie(e)?!1:(t.cookie(e,"",t.extend({},n,{expires:-1})),!t.cookie(e))}});