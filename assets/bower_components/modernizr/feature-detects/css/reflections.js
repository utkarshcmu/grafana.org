/*!
{
  "name": "CSS Reflections",
  "caniuse": "css-reflections",
  "property": "cssreflections",
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,n){e.addTest("cssreflections",n("boxReflect","above",!0))});