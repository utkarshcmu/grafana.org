describe("html5shiv",function(){this.timeout(3e4);var e,t;before(function(n){var r="./iframe.html?id=shiv";t=$("<iframe>"),$(document.body).append(t),t.css({height:10,width:10,position:"absolute",top:0,left:0}).attr({src:r,id:"shiv"}).on("lockedAndLoaded",function(){e=$(this)[0].contentWindow,e.requirejs.config({baseUrl:"../src"}),n()})}),it("shivs the document",function(t){try{e.requirejs(["html5shiv"],function(){expect("html5"in e).to.be(!0),expect(e.html5.type).to.equal("default"),t()})}catch(n){t(n)}}),after(function(){t.remove(),e=t=void 0})});