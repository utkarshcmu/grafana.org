/*!
{
  "name": "Unicode Range",
  "property": "unicoderange",
  "notes": [{
    "name" : "W3C reference",
    "href": "http://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#descdef-unicode-range"
  }, {
    "name" : "24 Way article",
    "href": "http://24ways.org/2011/creating-custom-font-stacks-with-unicode-range"
  }]
}
!*/
define(["Modernizr","testStyles","createElement"],function(e,n,t){e.addTest("unicoderange",function(){return e.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(e){for(var n=[".",".","m","m"],r=0;r<n.length;r++){var i=t("span");i.innerHTML=n[r],i.className=r%2?"mono":"",e.appendChild(i),n[r]=i.clientWidth}return n[0]!==n[1]&&n[2]===n[3]})})});