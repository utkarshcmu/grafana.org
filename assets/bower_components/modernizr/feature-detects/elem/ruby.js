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
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-ruby-element"
  }]
}
!*/
define(["Modernizr","createElement","docElement"],function(e,t,n){e.addTest("ruby",function(){function e(e,t){var n;return window.getComputedStyle?n=document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.currentStyle&&(n=e.currentStyle[t]),n}function r(){n.removeChild(u),u=null,l=null,d=null}var u=t("ruby"),l=t("rt"),d=t("rp"),o="display",i="fontSize";return u.appendChild(d),u.appendChild(l),n.appendChild(u),"none"==e(d,o)||"ruby"==e(u,o)&&"ruby-text"==e(l,o)||"6pt"==e(d,i)&&"6pt"==e(l,i)?(r(),!0):(r(),!1)})});