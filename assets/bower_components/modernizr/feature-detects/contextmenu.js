/*!
{
  "name": "Context menus",
  "property": "contextmenu",
  "caniuse": "menu",
  "notes": [{
    "name": "W3C spec",
    "href": "http://www.w3.org/TR/html5/interactive-elements.html#context-menus"
  },{
    "name": "thewebrocks.com Demo",
    "href": "http://thewebrocks.com/demos/context-menu/"
  }],
  "polyfills": ["jquery-contextmenu"]
}
!*/
define(["Modernizr","docElement"],function(A,w){A.addTest("contextmenu","contextMenu"in w&&"HTMLMenuItemElement"in window)});