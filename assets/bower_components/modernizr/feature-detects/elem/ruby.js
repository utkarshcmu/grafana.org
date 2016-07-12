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
define(["Modernizr","createElement","docElement"],function(e,t,r){e.addTest("ruby",function(){function e(e,t){var r;return window.getComputedStyle?r=document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.currentStyle&&(r=e.currentStyle[t]),r}function n(){r.removeChild(l),l=null,i=null,o=null}var l=t("ruby"),i=t("rt"),o=t("rp"),d="display",u="fontSize";return l.appendChild(o),l.appendChild(i),r.appendChild(l),"none"==e(o,d)||"ruby"==e(l,d)&&"ruby-text"==e(i,d)||"6pt"==e(o,u)&&"6pt"==e(i,u)?(n(),!0):(n(),!1)})});