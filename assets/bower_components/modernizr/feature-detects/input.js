/*!
{
  "name": "Input attributes",
  "property": "input",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "notes": [{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#input-type-attr-summary"
  }],
  "knownBugs": ["Some blackberry devices report false positive for input.multiple"]
}
!*/
define(["Modernizr","createElement","inputElem"],function(e,A,n){var t="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),i={};e.input=function(e){for(var t=0,a=e.length;a>t;t++)i[e[t]]=!!(e[t]in n);return i.list&&(i.list=!(!A("datalist")||!window.HTMLDataListElement)),i}(t)});