/*!
{
  "name": "Video Loop Attribute",
  "property": "videoloop",
  "tags": ["video", "media"]
}
!*/
define(["Modernizr","createElement"],function(e,n){e.addTest("videoloop","loop"in n("video"))});