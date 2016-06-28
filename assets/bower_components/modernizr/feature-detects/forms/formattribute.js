/*!
{
  "name": "input[form] Attribute",
  "property": "formattribute",
  "tags": ["attribute", "forms", "input"],
  "builderAliases": ["forms_formattribute"]
}
!*/
define(["Modernizr","createElement","docElement"],function(e,r,t){e.addTest("formattribute",function(){var e,n=r("form"),a=r("input"),o=r("div"),i="formtest"+(new Date).getTime(),l=!1;n.id=i;try{a.setAttribute("form",i)}catch(s){document.createAttribute&&(e=document.createAttribute("form"),e.nodeValue=i,a.setAttributeNode(e))}return o.appendChild(n),o.appendChild(a),t.appendChild(o),l=n.elements&&1===n.elements.length&&a.form==n,o.parentNode.removeChild(o),l})});