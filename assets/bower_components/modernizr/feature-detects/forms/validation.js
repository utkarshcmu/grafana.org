/*!
{
  "name": "Form Validation",
  "property": "formvalidation",
  "tags": ["forms", "validation", "attribute"],
  "builderAliases": ["forms_validation"]
}
!*/
define(["Modernizr","createElement","docElement","testStyles"],function(e,t,r,n){e.addTest("formvalidation",function(){var r=t("form");if(!("checkValidity"in r&&"addEventListener"in r))return!1;if("reportValidity"in r)return!0;var i,a=!1;return e.formvalidationapi=!0,r.addEventListener("submit",function(e){(!window.opera||window.operamini)&&e.preventDefault(),e.stopPropagation()},!1),r.innerHTML='<input name="modTest" required="required" /><button></button>',n("#modernizr form{position:absolute;top:-99999em}",function(t){t.appendChild(r),i=r.getElementsByTagName("input")[0],i.addEventListener("invalid",function(e){a=!0,e.preventDefault(),e.stopPropagation()},!1),e.formvalidationmessage=!!i.validationMessage,r.getElementsByTagName("button")[0].click()}),a})});