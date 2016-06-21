/*!
{
  "name": "RTC Data Channel",
  "property": "datachannel",
  "notes": [{
    "name": "HTML5 Rocks! Article",
    "href": "http://www.html5rocks.com/en/tutorials/webrtc/datachannels/"
  }]
}
!*/
define(["Modernizr","prefixed","domPrefixes","test/webrtc/peerconnection"],function(e,t,n){e.addTest("datachannel",function(){if(!e.peerconnection)return!1;for(var t=0,r=n.length;r>t;t++){var o=window[n[t]+"RTCPeerConnection"];if(o){var i=new o({iceServers:[{url:"stun:0"}]});return"createDataChannel"in i}}return!1})});