
import $ from  '../bower/jquery/dist/jquery.js';
import '../bower/foundation/js/foundation.js';

import '../bower/lightgallery.js/dist/js/lightgallery.js';
import '../bower/lg-thumbnail.js/dist/lg-thumbnail.js';
import '../bower/lg-fullscreen.js/dist/lg-fullscreen.js';
import '../bower/lg-zoom.js/dist/lg-zoom.js';

import {buildFetcher} from './builds.js';

$(window).on('load', () =>  {

  if (window.bootData.pageType === 'builds') {
    buildFetcher();
  }

  $(".lightbox").each(function() {
    lightGallery(this, {
      thumbnail: true,
      fullscreen: true,
      animateThumb: true,
    });
  });


});
