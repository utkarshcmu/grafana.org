/*!
{
  "name": "input[directory] Attribute",
  "property": "directory",
  "authors": ["silverwind"],
  "tags": ["file", "input", "attribute"]
}
!*/
define(["Modernizr","createElement","domPrefixes"],function(e,r,n){e.addTest("fileinputdirectory",function(){var e=r("input"),t="directory";if(e.type="file",t in e)return!0;for(var a=0,o=n.length;o>a;a++)if(n[a]+t in e)return!0;return!1})});