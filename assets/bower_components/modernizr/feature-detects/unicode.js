/*!
{
  "name": "Unicode characters",
  "property": "unicode",
  "tags": ["encoding"],
  "warnings": [
    "positive Unicode support doesn't mean you can use it inside <title>, this seems more related to OS & Language packs"
  ]
}
!*/
define(["Modernizr","createElement","testStyles","isSVG"],function(e,n,t,r){e.addTest("unicode",function(){var e,i=n("span"),o=n("span");return t("#modernizr{font-family:Arial,sans;font-size:300em;}",function(n){i.innerHTML=r?"\u5987":"&#5987",o.innerHTML=r?"\u2606":"&#9734",n.appendChild(i),n.appendChild(o),e="offsetWidth"in i&&i.offsetWidth!==o.offsetWidth}),e})});