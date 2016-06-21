/*!
{
  "name": "ES5 String.prototype.contains",
  "property": "contains",
  "authors": ["Robert Kowalski"],
  "tags": ["es6"]
}
!*/
define(["Modernizr","is"],function(e,n){e.addTest("contains",n(String.prototype.contains,"function"))});