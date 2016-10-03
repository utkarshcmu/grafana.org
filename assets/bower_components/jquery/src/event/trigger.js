define(["../core","../var/document","../data/var/dataPriv","../data/var/acceptData","../var/hasOwn","../event"],function(t,e,n,i,r){"use strict";var o=/^(?:focusinfocus|focusoutblur)$/;return t.extend(t.event,{trigger:function(s,a,l,c){var u,d,f,h,p,g,m,v=[l||e],y=r.call(s,"type")?s.type:s,b=r.call(s,"namespace")?s.namespace.split("."):[];if(d=f=l=l||e,3!==l.nodeType&&8!==l.nodeType&&!o.test(y+t.event.triggered)&&(y.indexOf(".")>-1&&(b=y.split("."),y=b.shift(),b.sort()),p=y.indexOf(":")<0&&"on"+y,s=s[t.expando]?s:new t.Event(y,"object"==typeof s&&s),s.isTrigger=c?2:3,s.namespace=b.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=l),a=null==a?[s]:t.makeArray(a,[s]),m=t.event.special[y]||{},c||!m.trigger||m.trigger.apply(l,a)!==!1)){if(!c&&!m.noBubble&&!t.isWindow(l)){for(h=m.delegateType||y,o.test(h+y)||(d=d.parentNode);d;d=d.parentNode)v.push(d),f=d;f===(l.ownerDocument||e)&&v.push(f.defaultView||f.parentWindow||window)}for(u=0;(d=v[u++])&&!s.isPropagationStopped();)s.type=u>1?h:m.bindType||y,g=(n.get(d,"events")||{})[s.type]&&n.get(d,"handle"),g&&g.apply(d,a),g=p&&d[p],g&&g.apply&&i(d)&&(s.result=g.apply(d,a),s.result===!1&&s.preventDefault());return s.type=y,c||s.isDefaultPrevented()||m._default&&m._default.apply(v.pop(),a)!==!1||!i(l)||p&&t.isFunction(l[y])&&!t.isWindow(l)&&(f=l[p],f&&(l[p]=null),t.event.triggered=y,l[y](),t.event.triggered=void 0,f&&(l[p]=f)),s.result}},simulate:function(e,n,i){var r=t.extend(new t.Event,i,{type:e,isSimulated:!0});t.event.trigger(r,null,n)}}),t.fn.extend({trigger:function(e,n){return this.each(function(){t.event.trigger(e,n,this)})},triggerHandler:function(e,n){var i=this[0];return i?t.event.trigger(e,n,i,!0):void 0}}),t});