/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/
define(["Modernizr","testAllProps"],function(e,t){!function(){e.addTest("csscolumns",function(){var e=!1,n=t("columnCount");try{(e=!!n)&&(e=new Boolean(e))}catch(o){}return e});for(var n,o,i=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<i.length;r++)n=i[r].toLowerCase(),o=t("column"+i[r]),("breakbefore"===n||"breakafter"===n||"breakinside"==n)&&(o=o||t(i[r])),e.addTest("csscolumns."+n,o)}()});