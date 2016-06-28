/*!
{
  "name": "IndexedDB",
  "property": "indexeddb",
  "caniuse": "indexeddb",
  "tags": ["storage"],
  "polyfills": ["indexeddb"]
}
!*/
define(["Modernizr","prefixed"],function(e,A){var n;try{n=A("indexedDB",window)}catch(t){}e.addTest("indexeddb",!!n),n&&e.addTest("indexeddb.deletedatabase","deleteDatabase"in n)});