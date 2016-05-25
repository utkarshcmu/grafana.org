/*!
{
  "name": "CSS vmax unit",
  "property": "cssvmaxunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vmaxunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
    "href": "http://jsfiddle.net/glsee/JDsWQ/4/"
  }]
}
!*/
define(["Modernizr","docElement","testStyles","roundedEquals"],function(e,n,t,r){t("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}",function(t){var i=t.childNodes[1],o=t.childNodes[0],a=parseInt((o.offsetWidth-o.clientWidth)/2,10),u=n.clientWidth/100,s=n.clientHeight/100,c=parseInt(50*Math.max(u,s),10),f=parseInt((window.getComputedStyle?getComputedStyle(i,null):i.currentStyle).width,10);e.addTest("cssvmaxunit",r(c,f)||r(c,f-a))},2)});