define(["Modernizr","docElement","isSVG"],function(e,n,t){function r(r){var o=n.className,i=e._config.classPrefix||"";if(t&&(o=o.baseVal),e._config.enableJSClass){var u=new RegExp("(^|\\s)"+i+"no-js(\\s|$)");o=o.replace(u,"$1"+i+"js$2")}e._config.enableClasses&&(o+=" "+i+r.join(" "+i),t?n.className.baseVal=o:n.className=o)}return r});