define(["../core","./var/rsingleTag","../manipulation"],function(e,t){return e.parseHTML=function(n,i,r){if(!n||"string"!=typeof n)return null;"boolean"==typeof i&&(r=i,i=!1),i=i||document;var o=t.exec(n),s=!r&&[];return o?[i.createElement(o[1])]:(o=e.buildFragment([n],i,s),s&&s.length&&e(s).remove(),e.merge([],o.childNodes))},e.parseHTML});