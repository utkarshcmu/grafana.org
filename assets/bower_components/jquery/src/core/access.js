define(["../core"],function(t){"use strict";var e=function(n,i,r,o,s,a,c){var l=0,u=n.length,d=null==r;if("object"===t.type(r)){s=!0;for(l in r)e(n,i,l,r[l],!0,a,c)}else if(void 0!==o&&(s=!0,t.isFunction(o)||(c=!0),d&&(c?(i.call(n,o),i=null):(d=i,i=function(e,n,i){return d.call(t(e),i)})),i))for(;u>l;l++)i(n[l],r,c?o:o.call(n[l],l,i(n[l],r)));return s?n:d?i.call(n):u?i(n[0],r):a};return e});