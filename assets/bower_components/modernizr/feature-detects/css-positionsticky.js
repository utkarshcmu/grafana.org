Modernizr.addTest("csspositionsticky",function(){var t="position:",e="sticky",n=document.createElement("modernizr"),o=n.style;return o.cssText=t+Modernizr._prefixes.join(e+";"+t).slice(0,-t.length),-1!==o.position.indexOf(e)});