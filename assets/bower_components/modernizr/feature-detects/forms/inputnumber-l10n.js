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
    "href": "https://trac.webkit.org/browser/trunk/LayoutTests/fast/forms/script-tests/input-number-keyoperation.js?rev=80096#L9"
  }],
  "knownBugs": ["Only ever returns true if the browser/OS is configured to use comma as a decimal separator. This is probably fine for most use cases."]
}
!*/
define(["Modernizr","createElement","docElement","getBody","test/inputtypes","test/forms/validation"],function(e,t,r,n){e.addTest("localizednumber",function(){if(!e.inputtypes.number)return!1;if(!e.formvalidation)return!1;var i,a=t("div"),o=n(),l=function(){return r.insertBefore(o,r.firstElementChild||r.firstChild)}();a.innerHTML='<input type="number" value="1.0" step="0.1"/>';var s=a.childNodes[0];l.appendChild(a),s.focus();try{document.execCommand("InsertText",!1,"1,1")}catch(d){}return i="number"===s.type&&1.1===s.valueAsNumber&&s.checkValidity(),l.removeChild(a),o.fake&&l.parentNode.removeChild(l),i})});