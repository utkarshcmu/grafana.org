describe("setClasses",function(){var e,t,n,r,i=function(t,i,o){return function(){var a={_config:i};n=document.createElement("div"),o&&(n.className=o),define("Modernizr",[],function(){return a}),define("docElement",[],function(){return n}),r(["setClasses"],function(n){e=n,t()})}()},o=function(){e=void 0,r.undef("setClasses"),r.undef("docElement"),r.undef("Modernizr")};before(function(e){define("package",[],function(){return{}}),(r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}}))(["cleanup"],function(n){t=n,e()})}),describe("cssClasses disabled",function(){before(function(e){i(e,{classPrefix:"fake",enableClasses:!1})}),it("should not add anything",function(e){r(["setClasses"],function(t){t(["detect"]),expect(n.className).to.not.contain("fakedetect"),e()})}),after(o)}),describe("cssClasses enabled, with prefix",function(){before(function(e){i(e,{classPrefix:"fake",enableClasses:!0})}),it("adds a class with a prefix",function(e){r(["setClasses"],function(t){t(["detect"]),expect(n.className).to.contain("fakedetect"),e()})}),after(o)}),describe("cssClasses enabled, without prefix",function(){before(function(e){i(e,{enableClasses:!0})}),after(o),it("adds a class without a prefix",function(e){r(["setClasses"],function(t){t(["detect"]),expect(n.className).to.contain("detect"),e()})})}),describe("enableJSClass enabled, with prefix",function(){before(function(e){i(e,{classPrefix:"fake",enableClasses:!0,enableJSClass:!0}," fakeno-js +fakeno-js fakeno-js- i-has-fakeno-js")}),it("changes the `js` class, and adds a class with a prefix",function(e){r(["setClasses"],function(t){var r=n.className.split(" ");expect(r).to.contain("fakeno-js"),t(["detect"]),r=n.className.split(" "),expect(n.className).to.contain("fakejs"),expect(n.className).to.contain("+fakeno-js"),expect(n.className).to.contain("fakeno-js-"),expect(n.className).to.contain("i-has-fakeno-js"),expect(n.className).to.contain("fakedetect"),e()})}),after(o)}),describe("enableJSClass enabled, without prefix",function(){before(function(e){i(e,{enableJSClass:!0,enableClasses:!0}," no-js +no-js no-js- i-has-no-js")}),after(o),it("changes the `js` class, and adds a class without a prefix",function(e){r(["setClasses"],function(t){var r=n.className.split(" ");expect(r).to.contain("no-js"),t(["detect"]),r=n.className.split(" "),expect(n.className).to.contain("js"),expect(n.className).to.contain("+no-js"),expect(n.className).to.contain("no-js-"),expect(n.className).to.contain("i-has-no-js"),expect(n.className).to.contain("detect"),e()})})}),after(function(){t()})});