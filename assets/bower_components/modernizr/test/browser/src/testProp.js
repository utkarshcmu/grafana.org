describe("testProp",function(){var e,t,n,o,i,r={};before(function(e){i=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{sinon:"../test/js/lib/sinon",cleanup:"../test/cleanup"}}),define("ModernizrProto",[],function(){return r}),define("package",[],function(){return{}}),i(["cleanup","sinon"],function(t,i){n=t,o=i,e()})}),beforeEach(function(n){t=o.spy(),define("testProps",function(){return t}),i(["testProp"],function(t){e=t,n()})}),it("is a curried version of `testProps`",function(){e("flexAlign","end",!0),expect(t.calledOnce).to.be(!0),expect(t.calledWithExactly(["flexAlign"],void 0,"end",!0)).to.be(!0)}),it("is added to ModernizrProto",function(){expect(e).to.equal(r.testProp)}),after(function(){n()})});