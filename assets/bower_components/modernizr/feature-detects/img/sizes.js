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
define(["Modernizr","createElement","addTest"],function(A,w,e){A.addAsyncTest(function(){var A,D,P,n=w("img"),a="sizes"in n;!a&&"srcset"in n?(D="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",A="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",P=function(){e("sizes",2==n.width)},n.onload=P,n.onerror=P,n.setAttribute("sizes","9px"),n.srcset=A+" 1w,"+D+" 8w",n.src=A):e("sizes",a)})});