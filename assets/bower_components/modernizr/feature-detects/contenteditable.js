/*!
{
  "name": "Content Editable",
  "property": "contenteditable",
  "caniuse": "contenteditable",
  "notes": [{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/interaction.html#contenteditable"
  }]
}
!*/
define(["Modernizr","createElement","docElement"],function(A,e,t){A.addTest("contenteditable",function(){if("contentEditable"in t){var A=e("div");return A.contentEditable=!0,"true"===A.contentEditable}})});