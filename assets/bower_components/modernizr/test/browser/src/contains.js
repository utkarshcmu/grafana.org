describe("contains",function(){var t,e;before(function(n){var i=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});i(["contains","cleanup"],function(i,r){t=i,e=r,n()})}),it("finds substrings",function(){expect(t("fakeDetect","akeDet")).to.be(!0)}),after(function(){e()})});