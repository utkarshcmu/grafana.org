define(["is","fnBind"],function(n,e){function t(t,r,i){var o;for(var u in t)if(t[u]in r)return i===!1?t[u]:(o=r[t[u]],n(o,"function")?e(o,i||r):o);return!1}return t});