/*!
{
  "name": "DOM Pointer Events API",
  "property": "pointerevents",
  "tags": ["input"],
  "authors": ["Stu Cox"],
  "notes": [
    {
      "name": "W3C spec",
      "href": "https://www.w3.org/TR/pointerevents/"
    }
  ],
  "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
  "polyfills": ["handjs"]
}
!*/
define(["Modernizr","domPrefixes","hasEvent"],function(A,e,t){A.addTest("pointerevents",function(){var n=!1,i=e.length;for(n=A.hasEvent("pointerdown");i--&&!n;)t(e[i]+"pointerdown")&&(n=!0);return n})});