describe("tests",function(){var e,t;before(function(n){var r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});r(["tests","cleanup"],function(r,i){e=r,t=i,n()})}),it("is an array",function(){expect(e).to.be.an("array")}),after(function(){t()})});