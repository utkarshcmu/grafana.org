$(document).ready(function(){function e(e,t){var o=_.contains(t.toString(),"Ensure the done() callback is being called in this test.");if(o)return window.global_test_results={message:t};t?n.failed+=1:n.passed+=1,n.total+=1;var i=function(e){for(var t=[];e.parent.title;)t.push(e.parent.title),e=e.parent;return t.reverse()};n.tests.push({name:e.title,result:t?!1:!0,message:t?t.message:"passe",stack:t?t.stack:void 0,titles:i(e)})}var t=mocha.run(),n={passed:0,failed:0,total:0,tests:[]};t.once("suite",function(){mocha.suite.afterAll("send coverage",function(e){window.global_test_results||(window.global_test_results=n),window.__coverage__?$.ajax({type:"POST",url:"/coverage/client",data:JSON.stringify(__coverage__),success:function(){e()}}):e()})}),t.on("fail",e)});