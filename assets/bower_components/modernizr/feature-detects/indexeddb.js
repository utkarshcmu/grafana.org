/*!
{
  "name": "IndexedDB",
  "property": "indexeddb",
  "caniuse": "indexeddb",
  "tags": ["storage"],
  "polyfills": ["indexeddb"]
}
!*/
define(["Modernizr","prefixed"],function(t,e){var n;try{n=e("indexedDB",window)}catch(i){}t.addTest("indexeddb",!!n),n&&t.addTest("indexeddb.deletedatabase","deleteDatabase"in n)});