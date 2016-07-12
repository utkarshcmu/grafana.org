/*!
{
  "name": "Reverse Ordered Lists",
  "property": "olreversed",
  "notes": [{
    "name": "Impressive Webs article",
    "href": "http://impressivewebs.com/reverse-ordered-lists-html5"
  }],
  "builderAliases": ["lists_reversed"]
}
!*/
define(["Modernizr","createElement"],function(A,e){A.addTest("olreversed","reversed"in e("ol"))});