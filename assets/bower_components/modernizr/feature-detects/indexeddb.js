/*!
{
  "name": "IndexedDB",
  "property": "indexeddb",
  "caniuse": "indexeddb",
  "tags": ["storage"],
  "polyfills": ["indexeddb"]
}
!*/
define(["Modernizr","prefixed"],function(e,n){var t=n("indexedDB",window);e.addTest("indexeddb",!!t),t&&e.addTest("indexeddb.deletedatabase","deleteDatabase"in t)});