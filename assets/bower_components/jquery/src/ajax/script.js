define(["../core","../var/document","../ajax"],function(t,e){"use strict";t.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),t.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return t.globalEval(e),e}}}),t.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),t.ajaxTransport("script",function(n){if(n.crossDomain){var i,r;return{send:function(o,s){i=t("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",r=function(t){i.remove(),r=null,t&&s("error"===t.type?404:200,t.type)}),e.head.appendChild(i[0])},abort:function(){r&&r()}}}})});