/*!
{
  "name": "CSS :invalid pseudo-class",
  "property": "cssinvalid",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid"
  }]
}
!*/
define(["Modernizr","testStyles","createElement"],function(e,n,t){e.addTest("cssinvalid",function(){return n("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var n=t("input");return n.required=!0,e.appendChild(n),n.clientWidth>10})})});