Modernizr.addTest("formattribute",function(){var t,e=document.createElement("form"),o=document.createElement("input"),n=document.createElement("div"),i="formtest"+(new Date).getTime(),a=!1;return e.id=i,document.createAttribute&&(t=document.createAttribute("form"),t.nodeValue=i,o.setAttributeNode(t),n.appendChild(e),n.appendChild(o),document.documentElement.appendChild(n),a=1===e.elements.length&&o.form==e,n.parentNode.removeChild(n)),a});