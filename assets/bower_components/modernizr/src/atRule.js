define(["ModernizrProto","cssomPrefixes"],function(n,t){var e=function(n){var e,r=t.length,u=window.CSSRule;if("undefined"==typeof u)return void 0;if(!n)return!1;if(n=n.replace(/^@/,""),e=n.replace(/-/g,"_").toUpperCase()+"_RULE",e in u)return"@"+n;for(var i=0;r>i;i++){var o=t[i],a=o.toUpperCase()+"_"+e;if(a in u)return"@-"+o.toLowerCase()+"-"+n}return!1};return n.atRule=e,e});