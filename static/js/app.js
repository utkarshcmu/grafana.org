
import $ from  '../bower/jquery/dist/jquery.js';
import '../bower/foundation/js/foundation.js';

import '../bower/lightgallery.js/dist/js/lightgallery.js';
import '../bower/lg-thumbnail.js/dist/lg-thumbnail.js';
import '../bower/lg-fullscreen.js/dist/lg-fullscreen.js';
import '../bower/lg-zoom.js/dist/lg-zoom.js';
import './prism.js';

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

  $('[data-download-link]').click(function() {
    $('.download-plaform-tip').hide();
    var label = $(this).data('download-link')
    ga('send', 'event', 'download', 'download', label)
    var asd = $('.download-plaform-tip[data-type="' + label + '"]').show();
  });

  $(document).foundation();

});
