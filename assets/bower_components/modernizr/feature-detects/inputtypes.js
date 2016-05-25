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
define(["Modernizr","inputElem","docElement"],function(e,n,t){var r="search tel url email datetime date month week time datetime-local number range color".split(" "),i={};e.inputtypes=function(e){for(var r,o,a,u=e.length,s=":)",c=0;u>c;c++)n.setAttribute("type",r=e[c]),a="text"!==n.type&&"style"in n,a&&(n.value=s,n.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&void 0!==n.style.WebkitAppearance?(t.appendChild(n),o=document.defaultView,a=o.getComputedStyle&&"textfield"!==o.getComputedStyle(n,null).WebkitAppearance&&0!==n.offsetHeight,t.removeChild(n)):/^(search|tel)$/.test(r)||(a=/^(url|email|number)$/.test(r)?n.checkValidity&&n.checkValidity()===!1:n.value!=s)),i[e[c]]=!!a;return i}(r)});