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
define(["Modernizr","createElement","docElement","isSVG"],function(e,t,n,i){e.addTest("regions",function(){if(i)return!1;var r=e.prefixed("flowFrom"),o=e.prefixed("flowInto"),s=!1;if(!r||!o)return s;var a=t("iframe"),c=t("div"),u=t("div"),l=t("div"),f="modernizr_flow_for_regions_check";u.innerText="M",c.style.cssText="top: 150px; left: 150px; padding: 0px;",l.style.cssText="width: 50px; height: 50px; padding: 42px;",l.style[r]=f,c.appendChild(u),c.appendChild(l),n.appendChild(c);var d,p,h=u.getBoundingClientRect();return u.style[o]=f,d=u.getBoundingClientRect(),p=parseInt(d.left-h.left,10),n.removeChild(c),42==p?s=!0:(n.appendChild(a),h=a.getBoundingClientRect(),a.style[o]=f,d=a.getBoundingClientRect(),h.height>0&&h.height!==d.height&&0===d.height&&(s=!0)),u=l=c=a=void 0,s})});