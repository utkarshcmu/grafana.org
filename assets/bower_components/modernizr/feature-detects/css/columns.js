/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,n){!function(){e.addTest("csscolumns",function(){var e=!1,t=n("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(r){}return e});for(var t,r,i=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],o=0;o<i.length;o++)t=i[o].toLowerCase(),r=n("column"+i[o]),("breakbefore"===t||"breakafter"===t||"breakinside"==t)&&(r=r||n(i[o])),e.addTest("csscolumns."+t,r)}()});