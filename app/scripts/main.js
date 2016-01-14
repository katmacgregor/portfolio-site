'use strict';

$(document).ready(function() {
  var body = $('body');

  $('.main-container').addClass('loaded');

  function dayNight(){
    var currentTime = new Date().getHours();

    if ((currentTime >= 0) && (currentTime < 5)) {
      body.addClass('night');
    }
    if ((currentTime >= 5) && (currentTime < 16)) {
      body.addClass('day');
    }
    if ((currentTime >= 16 ) && (currentTime < 24)) {
      body.addClass('night');
    }
  }

  dayNight();

  var header = $('.content-header'),
      container = $('.content-container');
  header.click(function() {
    $(this).parent().toggleClass('active');
    $('.top').removeClass('visible');
    if (container.hasClass('active')) {
      $('.top').addClass('visible');
    }
  });
  $('.top').click(function(){
    $('html, body').animate({ scrollTop: '0' });
    container.removeClass('active');
    $(this).removeClass('visible');
  });
});
