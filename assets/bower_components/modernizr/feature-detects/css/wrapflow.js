/*!
{
  "name": "CSS wrap-flow",
  "property": "wrapflow",
  "tags": ["css"],
  "notes": [
    {
      "name": "W3C Exclusions spec",
      "href": "http://www.w3.org/TR/css3-exclusions"
    },
    {
      "name": "Example by Adobe",
      "href": "http://html.adobe.com/webstandards/cssexclusions"
    }
  ]
}
!*/
define(["Modernizr","prefixed","docElement","createElement","isSVG"],function(e,n,t,r,i){e.addTest("wrapflow",function(){var e=n("wrapFlow");if(!e||i)return!1;var o=e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-"),a=r("div"),u=r("div"),c=r("span");u.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+o+":end;",c.innerText="X",a.appendChild(u),a.appendChild(c),t.appendChild(a);var s=c.offsetLeft;return t.removeChild(a),u=c=a=void 0,150==s})});