/*!
{
  "name": "CSS Stylable Scrollbars",
  "property": "cssscrollbar",
  "tags": ["css"],
  "builderAliases": ["css_scrollbars"]
}
!*/
define(["Modernizr","testStyles","prefixes"],function(e,n,t){n("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+t.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(n){e.addTest("cssscrollbar",40==n.scrollWidth)})});