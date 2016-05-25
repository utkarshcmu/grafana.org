/*!
{
  "name": "input[type=\"number\"] Localization",
  "property": "localizednumber",
  "tags": ["forms", "localization", "attribute"],
  "authors": ["Peter Janes"],
  "notes": [{
    "name": "Webkit Bug Tracker Listing",
    "href": "https://bugs.webkit.org/show_bug.cgi?id=42484"
  },{
    "name": "Based on This",
    "href": "http://trac.webkit.org/browser/trunk/LayoutTests/fast/forms/script-tests/input-number-keyoperation.js?rev=80096#L9"
  }],
  "knownBugs": ["Only ever returns true if the browser/OS is configured to use comma as a decimal separator. This is probably fine for most use cases."]
}
!*/
define(["Modernizr","createElement","docElement","getBody","test/inputtypes","test/forms/validation"],function(e,n,t,r){e.addTest("localizednumber",function(){if(!e.inputtypes.number)return!1;if(!e.formvalidation)return!1;var i,o=n("div"),a=r(),u=function(){return t.insertBefore(a,t.firstElementChild||t.firstChild)}();o.innerHTML='<input type="number" value="1.0" step="0.1"/>';var s=o.childNodes[0];u.appendChild(o),s.focus();try{document.execCommand("InsertText",!1,"1,1")}catch(c){}return i="number"===s.type&&1.1===s.valueAsNumber&&s.checkValidity(),u.removeChild(o),a.fake&&u.parentNode.removeChild(u),i})});