/*!
{
  "name": "input[directory] Attribute",
  "property": "directory",
  "authors": ["silverwind"],
  "tags": ["file", "input", "attribute"]
}
!*/
define(["Modernizr","createElement","domPrefixes"],function(e,n,t){e.addTest("fileinputdirectory",function(){var e=n("input"),r="directory";if(e.type="file",r in e)return!0;for(var i=0,o=t.length;o>i;i++)if(t[i]+r in e)return!0;return!1})});