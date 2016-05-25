/*!
{
  "name": "onInput Event",
  "property": "oninput",
  "notes": [{
    "name": "MDN article",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.oninput"
  },{
    "name": "WHATWG spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#common-event-behaviors"
  },{
    "name": "Detecting onInput support",
    "href": "http://danielfriesen.name/blog/2010/02/16/html5-browser-maze-oninput-support"
  }],
  "authors": ["Patrick Kettner"],
  "tags": ["event"]
}
!*/
define(["Modernizr","docElement","createElement","testStyles","hasEvent"],function(e,n,t,r,i){e.addTest("oninput",function(){var e,r=t("input");if(r.setAttribute("oninput","return"),i("oninput",n)||"function"==typeof r.oninput)return!0;try{var o=document.createEvent("KeyboardEvent");e=!1;var a=function(n){e=!0,n.preventDefault(),n.stopPropagation()};o.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),n.appendChild(r),r.addEventListener("input",a,!1),r.focus(),r.dispatchEvent(o),r.removeEventListener("input",a,!1),n.removeChild(r)}catch(u){e=!1}return e})});