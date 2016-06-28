/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/quota-api/"
  }]
}
!*/
define(["Modernizr","prefixed"],function(e,n){e.addTest("quotamanagement",function(){var e=n("temporaryStorage",navigator),t=n("persistentStorage",navigator);return!(!e||!t)})});