/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
define(["Modernizr","addTest","prefixed","test/indexeddb"],function(A,w,D){A.addAsyncTest(function(){var P,e,B,Q="detect-blob-support",E=!1;try{P=D("indexedDB",window)}catch(d){}if(!A.indexeddb||!A.indexeddb.deletedatabase)return!1;try{P.deleteDatabase(Q).onsuccess=function(){e=P.open(Q,1),e.onupgradeneeded=function(){e.result.createObjectStore("store")},e.onsuccess=function(){B=e.result;try{B.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),E=!0}catch(A){E=!1}finally{w("indexeddbblob",E),B.close(),P.deleteDatabase(Q)}}}}catch(d){w("indexeddbblob",!1)}})});