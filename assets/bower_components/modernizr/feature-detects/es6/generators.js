/*!
{
  "name": "ES6 Generators",
  "property": "generators",
  "authors": ["Michael Kachanovskyi"],
  "tags": ["es6"]
}
!*/
define(["Modernizr"],function(t){t.addTest("generators",function(){try{new Function("function* test() {}")()}catch(t){return!1}return!0})});