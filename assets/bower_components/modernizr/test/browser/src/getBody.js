describe("getBody",function(){var t,e;before(function(n){var i=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});i(["getBody","cleanup"],function(i,r){t=i,e=r,n()})}),it("returns document.body",function(){var e=t();expect(e).to.equal(document.body),expect(e.fake).to.be(void 0)}),it("returns a fake when document.body does not exist",function(){var e=document.body,n=e.parentNode;n.removeChild(e);var i=t();n.appendChild(e),expect(i).to.not.equal(document.body),expect(i.fake).to.be(!0)}),after(function(){e()})});