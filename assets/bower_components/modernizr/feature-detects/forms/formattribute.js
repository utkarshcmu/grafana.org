/*!
{
  "name": "input[form] Attribute",
  "property": "formattribute",
  "tags": ["attribute", "forms", "input"],
  "builderAliases": ["forms_formattribute"]
}
!*/
define(["Modernizr","createElement","docElement"],function(e,n,t){e.addTest("formattribute",function(){var e,r=n("form"),i=n("input"),o=n("div"),a="formtest"+(new Date).getTime(),u=!1;r.id=a;try{i.setAttribute("form",a)}catch(s){document.createAttribute&&(e=document.createAttribute("form"),e.nodeValue=a,i.setAttributeNode(e))}return o.appendChild(r),o.appendChild(i),t.appendChild(o),u=r.elements&&1===r.elements.length&&i.form==r,o.parentNode.removeChild(o),u})});