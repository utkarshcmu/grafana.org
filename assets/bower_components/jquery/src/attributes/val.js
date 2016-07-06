define(["../core","./support","../core/init"],function(e,t){var n=/\r/g;e.fn.extend({val:function(t){var r,i,o,u=this[0];{if(arguments.length)return o=e.isFunction(t),this.each(function(n){var i;1===this.nodeType&&(i=o?t.call(this,n,e(this).val()):t,null==i?i="":"number"==typeof i?i+="":e.isArray(i)&&(i=e.map(i,function(e){return null==e?"":e+""})),r=e.valHooks[this.type]||e.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&void 0!==r.set(this,i,"value")||(this.value=i))});if(u)return r=e.valHooks[u.type]||e.valHooks[u.nodeName.toLowerCase()],r&&"get"in r&&void 0!==(i=r.get(u,"value"))?i:(i=u.value,"string"==typeof i?i.replace(n,""):null==i?"":i)}}}),e.extend({valHooks:{option:{get:function(t){var n=e.find.attr(t,"value");return null!=n?n:e.trim(e.text(t))}},select:{get:function(n){for(var r,i,o=n.options,u=n.selectedIndex,a="select-one"===n.type||0>u,c=a?null:[],s=a?u+1:o.length,l=0>u?s:a?u:0;s>l;l++)if(i=o[l],(i.selected||l===u)&&(t.optDisabled?!i.disabled:null===i.getAttribute("disabled"))&&(!i.parentNode.disabled||!e.nodeName(i.parentNode,"optgroup"))){if(r=e(i).val(),a)return r;c.push(r)}return c},set:function(t,n){for(var r,i,o=t.options,u=e.makeArray(n),a=o.length;a--;)i=o[a],(i.selected=e.inArray(i.value,u)>=0)&&(r=!0);return r||(t.selectedIndex=-1),u}}}}),e.each(["radio","checkbox"],function(){e.valHooks[this]={set:function(t,n){return e.isArray(n)?t.checked=e.inArray(e(t).val(),n)>=0:void 0}},t.checkOn||(e.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})});