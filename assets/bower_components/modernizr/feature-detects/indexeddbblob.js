/*!
{
  "name": "IndexedDB Blob",
  "property": "indexeddbblob"
}
!*/
define(["Modernizr","addTest","prefixed","test/indexeddb"],function(e,A,n){e.addAsyncTest(function(){var t,i,a,r="detect-blob-support",d=!1;try{t=n("indexedDB",window)}catch(o){}if(!e.indexeddb||!e.indexeddb.deletedatabase)return!1;try{t.deleteDatabase(r).onsuccess=function(){i=t.open(r,1),i.onupgradeneeded=function(){i.result.createObjectStore("store")},i.onsuccess=function(){a=i.result;try{a.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),d=!0}catch(e){d=!1}finally{A("indexeddbblob",d),a.close(),t.deleteDatabase(r)}}}}catch(o){A("indexeddbblob",!1)}})});