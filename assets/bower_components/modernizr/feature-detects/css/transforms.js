/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(t,e){t.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&e("transform","scale(1)",!0)})});