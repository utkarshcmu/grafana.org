/*!
{
  "name": "Binary WebSockets",
  "property": "websocketsbinary",
  "tags": ["websockets"],
  "builderAliases": ["websockets_binary"]
}
!*/
define(["Modernizr"],function(e){e.addTest("websocketsbinary",function(){var e,A="https:"==location.protocol?"wss":"ws";if("WebSocket"in window){if(e="binaryType"in WebSocket.prototype)return e;try{return!!new WebSocket(A+"://.").binaryType}catch(n){}}return!1})});