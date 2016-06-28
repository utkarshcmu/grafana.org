/*!
{
  "name": "MathML",
  "property": "mathml",
  "caniuse": "mathml",
  "authors": ["Addy Osmani", "Davide P. Cervone", "David Carlisle"],
  "knownBugs": ["Firefox < 4 will likely return a false, however it does support MathML inside XHTML documents"],
  "notes": [{
    "name": "W3C spec",
    "href": "https://www.w3.org/Math/"
  }],
  "polyfills": ["mathjax"]
}
!*/
define(["Modernizr","testStyles"],function(e,n){e.addTest("mathml",function(){var e;return n("#modernizr{position:absolute;display:inline-block}",function(n){n.innerHTML+="<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>",e=n.offsetHeight>n.offsetWidth}),e})});