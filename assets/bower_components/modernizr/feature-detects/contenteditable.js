/*!
{
  "name": "Content Editable",
  "property": "contenteditable",
  "caniuse": "contenteditable",
  "notes": [{
    "name": "WHATWG spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/editing.html#contenteditable"
  }]
}
!*/
define(["Modernizr","createElement","docElement"],function(e,n,t){e.addTest("contenteditable",function(){if("contentEditable"in t){var e=n("div");return e.contentEditable=!0,"true"===e.contentEditable}})});