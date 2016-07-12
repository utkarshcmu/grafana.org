/*!
{
  "name": "Audio Loop Attribute",
  "property": "audioloop",
  "tags": ["audio", "media"]
}
!*/
define(["Modernizr","createElement"],function(A,w){A.addTest("audioloop","loop"in w("audio"))});