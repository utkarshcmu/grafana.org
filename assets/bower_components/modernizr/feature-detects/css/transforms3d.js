/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/
define(["Modernizr","testAllProps","testStyles","docElement","test/css/supports"],function(e,n,t,r){e.addTest("csstransforms3d",function(){var i=!!n("perspective","1px",!0),o=e._config.usePrefixes;if(i&&(!o||"webkitPerspective"in r.style)){var a;e.supports?a="@supports (perspective: 1px)":(a="@media (transform-3d)",o&&(a+=",(-webkit-transform-3d)")),a+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",t(a,function(e){i=9===e.offsetLeft&&5===e.offsetHeight})}return i})});