/*!
{
  "name": "Hidden Scrollbar",
  "property": "hiddenscroll",
  "authors": ["Oleg Korsunsky"]
}
!*/
define(["Modernizr","testStyles"],function(e,n){e.addTest("hiddenscroll",function(){return n("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})})});