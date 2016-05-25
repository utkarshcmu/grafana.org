/*!
{
  "name": "ruby, rp, rt Elements",
  "caniuse": "ruby",
  "property": "ruby",
  "tags": ["elem"],
  "builderAliases": ["elem_ruby"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-ruby-element"
  }]
}
!*/
define(["Modernizr","createElement","docElement"],function(e,n,t){e.addTest("ruby",function(){function e(e,n){var t;return window.getComputedStyle?t=document.defaultView.getComputedStyle(e,null).getPropertyValue(n):e.currentStyle&&(t=e.currentStyle[n]),t}function r(){t.removeChild(i),i=null,o=null,a=null}var i=n("ruby"),o=n("rt"),a=n("rp"),u="display",s="fontSize";return i.appendChild(a),i.appendChild(o),t.appendChild(i),"none"==e(a,u)||"ruby"==e(i,u)&&"ruby-text"==e(o,u)||"6pt"==e(a,s)&&"6pt"==e(o,s)?(r(),!0):(r(),!1)})});