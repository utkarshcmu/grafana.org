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
define(["Modernizr","prefixed","domPrefixes","test/webrtc/peerconnection"],function(e,A,n){e.addTest("datachannel",function(){if(!e.peerconnection)return!1;for(var A=0,t=n.length;t>A;A++){var i=window[n[A]+"RTCPeerConnection"];if(i){var r=new i({iceServers:[{url:"stun:0"}]});return"createDataChannel"in r}}return!1})});