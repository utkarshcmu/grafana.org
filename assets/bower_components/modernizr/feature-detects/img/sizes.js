/*!
{
  "name": "sizes attribute",
  "async": true,
  "property": "sizes",
  "tags": ["image"],
  "authors": ["Mat Marquis"],
  "notes": [{
    "name": "Spec",
    "href": "http://picture.responsiveimages.org/#parse-sizes-attr"
    },{
    "name": "Usage Details",
    "href": "http://ericportis.com/posts/2014/srcset-sizes/"
    }]
}
!*/
define(["Modernizr","createElement","addTest"],function(e,n,t){e.addAsyncTest(function(){var e,A,r,i=n("img"),o="sizes"in i;!o&&"srcset"in i?(A="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",r=function(){t("sizes",2==i.width)},i.onload=r,i.onerror=r,i.setAttribute("sizes","9px"),i.srcset=e+" 1w,"+A+" 8w",i.src=e):t("sizes",o)})});