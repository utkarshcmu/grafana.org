/*!
{
  "name": "CSS Media Queries",
  "caniuse": "css-mediaqueries",
  "property": "mediaqueries",
  "tags": ["css"],
  "builderAliases": ["css_mediaqueries"]
}
!*/
define(["Modernizr","mq"],function(e,n){e.addTest("mediaqueries",n("only all"))});