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
    "href": "http://www.w3.org/TR/css3-regions/"
  }]
}
!*/
define(["Modernizr","createElement","docElement","isSVG"],function(e,n,t,r){e.addTest("regions",function(){if(r)return!1;var i=e.prefixed("flowFrom"),o=e.prefixed("flowInto"),a=!1;if(!i||!o)return a;var u=n("iframe"),s=n("div"),c=n("div"),f=n("div"),d="modernizr_flow_for_regions_check";c.innerText="M",s.style.cssText="top: 150px; left: 150px; padding: 0px;",f.style.cssText="width: 50px; height: 50px; padding: 42px;",f.style[i]=d,s.appendChild(c),s.appendChild(f),t.appendChild(s);var l,p,A=c.getBoundingClientRect();return c.style[o]=d,l=c.getBoundingClientRect(),p=parseInt(l.left-A.left,10),t.removeChild(s),42==p?a=!0:(t.appendChild(u),A=u.getBoundingClientRect(),u.style[o]=d,l=u.getBoundingClientRect(),A.height>0&&A.height!==l.height&&0===l.height&&(a=!0)),c=f=s=u=void 0,a})});