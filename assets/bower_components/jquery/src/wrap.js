define(["./core","./core/init","./manipulation","./traversing"],function(t){"use strict";return t.fn.extend({wrapAll:function(e){var n;return this[0]&&(t.isFunction(e)&&(e=e.call(this[0])),n=t(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&n.insertBefore(this[0]),n.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(e){return t.isFunction(e)?this.each(function(n){t(this).wrapInner(e.call(this,n))}):this.each(function(){var n=t(this),i=n.contents();i.length?i.wrapAll(e):n.append(e)})},wrap:function(e){var n=t.isFunction(e);return this.each(function(i){t(this).wrapAll(n?e.call(this,i):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){t(this).replaceWith(this.childNodes)}),this}}),t});