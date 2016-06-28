/*!
{
  "name": "Vibration API",
  "property": "vibrate",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozVibrate"
  },{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/vibration/"
  }]
}
!*/
define(["Modernizr","prefixed"],function(e,n){e.addTest("vibrate",!!n("vibrate",navigator))});