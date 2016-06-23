/*!
{
  "name": "CSS Regions",
  "caniuse": "css-regions",
  "authors": ["Mihai Balan"],
  "property": "regions",
  "tags": ["css"],
  "builderAliases": ["css_regions"],
  "notes": [{
    "name": "W3C Specification",
    "href": "https://www.w3.org/TR/css3-regions/"
  }]
}
!*/
define(["Modernizr","createElement","docElement","isSVG"],function(A,e,t,n){A.addTest("regions",function(){if(n)return!1;var i=A.prefixed("flowFrom"),o=A.prefixed("flowInto"),a=!1;if(!i||!o)return a;var d=e("iframe"),r=e("div"),w=e("div"),D=e("div"),s="modernizr_flow_for_regions_check";w.innerText="M",r.style.cssText="top: 150px; left: 150px; padding: 0px;",D.style.cssText="width: 50px; height: 50px; padding: 42px;",D.style[i]=s,r.appendChild(w),r.appendChild(D),t.appendChild(r);var l,u,P=w.getBoundingClientRect();return w.style[o]=s,l=w.getBoundingClientRect(),u=parseInt(l.left-P.left,10),t.removeChild(r),42==u?a=!0:(t.appendChild(d),P=d.getBoundingClientRect(),d.style[o]=s,l=d.getBoundingClientRect(),P.height>0&&P.height!==l.height&&0===l.height&&(a=!0)),w=D=r=d=void 0,a})});