/*!
{
  "name": "Form Validation",
  "property": "formvalidation",
  "tags": ["forms", "validation", "attribute"],
  "builderAliases": ["forms_validation"]
}
!*/
define(["Modernizr","createElement","docElement","testStyles"],function(e,n,t,r){e.addTest("formvalidation",function(){var t=n("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var i,o=!1;return e.formvalidationapi=!0,t.addEventListener("submit",function(e){window.opera||e.preventDefault(),e.stopPropagation()},!1),t.innerHTML='<input name="modTest" required><button></button>',r("#modernizr form{position:absolute;top:-99999em}",function(n){n.appendChild(t),i=t.getElementsByTagName("input")[0],i.addEventListener("invalid",function(e){o=!0,e.preventDefault(),e.stopPropagation()},!1),e.formvalidationmessage=!!i.validationMessage,t.getElementsByTagName("button")[0].click()}),o})});