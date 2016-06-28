/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
define(["Modernizr","inputElem","docElement"],function(e,A,n){var t="search tel url email datetime date month week time datetime-local number range color".split(" "),i={};e.inputtypes=function(e){for(var t,a,r,o=e.length,d="1)",s=0;o>s;s++)A.setAttribute("type",t=e[s]),r="text"!==A.type&&"style"in A,r&&(A.value=d,A.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(t)&&void 0!==A.style.WebkitAppearance?(n.appendChild(A),a=document.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(A,null).WebkitAppearance&&0!==A.offsetHeight,n.removeChild(A)):/^(search|tel)$/.test(t)||(r=/^(url|email)$/.test(t)?A.checkValidity&&A.checkValidity()===!1:A.value!=d)),i[e[s]]=!!r;return i}(t)});