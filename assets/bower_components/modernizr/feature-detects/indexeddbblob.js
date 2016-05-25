/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
define(["Modernizr","addTest","prefixed","test/indexeddb"],function(e,n,t){e.addAsyncTest(function(){var r,o,i=t("indexedDB",window),u="detect-blob-support",a=!1;if(!e.indexeddb||!e.indexeddb.deleteDatabase)return!1;try{i.deleteDatabase(u).onsuccess=function(){r=i.open(u,1),r.onupgradeneeded=function(){r.result.createObjectStore("store")},r.onsuccess=function(){o=r.result;try{o.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),a=!0}catch(e){a=!1}finally{n("indexeddbblob",a),o.close(),i.deleteDatabase(u)}}}}catch(s){n("indexeddbblob",!1)}})});