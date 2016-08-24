/*!
{
  "name": "CSS.escape()",
  "property": "cssescape",
  "polyfills": [
    "css-escape"
  ],
  "tags": [
    "css",
    "cssom"
  ]
}
!*/
define(["Modernizr"],function(t){var e=window.CSS;t.addTest("cssescape",e?"function"==typeof e.escape:!1)});