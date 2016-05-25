/*!
{
  "name": "Video Preload Attribute",
  "property": "videopreload",
  "tags": ["video", "media"]
}
!*/
define(["Modernizr","createElement"],function(e,n){e.addTest("videopreload","preload"in n("video"))});