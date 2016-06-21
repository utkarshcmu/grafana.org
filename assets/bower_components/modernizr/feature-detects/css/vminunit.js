/*!
{
  "name": "CSS vmin unit",
  "property": "cssvminunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vminunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JRmdq/8/"
  }]
}
!*/
define(["Modernizr","docElement","testStyles","roundedEquals"],function(e,t,n,i){n("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}",function(n){var o=n.childNodes[1],r=n.childNodes[0],c=parseInt((r.offsetWidth-r.clientWidth)/2,10),l=t.clientWidth/100,d=t.clientHeight/100,s=parseInt(50*Math.min(l,d),10),a=parseInt((window.getComputedStyle?getComputedStyle(o,null):o.currentStyle).width,10);e.addTest("cssvminunit",i(s,a)||i(s,a-c))},2)});