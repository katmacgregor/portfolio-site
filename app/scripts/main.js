'use strict';

$(document).ready(function() {
  var body = $('body');

  $('.main-container').addClass('loaded');

  function setDay(){
    body.addClass('day');
  }

  function setAfternoon(){
    body.addClass('afternoon');
    setDay();
  }

  function setNight(){
    body.addClass('night');
  }

  function setEvening(){
    body.addClass('evening');
    setNight();
  }

  function setMidnight(){
    body.addClass('midnight');
    setNight();
  }

  function dayNight(){
    var currentTime = new Date().getHours();

    if ((currentTime >= 0) && (currentTime < 5)) {
      setMidnight();
    }
    if ((currentTime >= 5) && (currentTime < 12)) {
      setDay();
    }
    if ((currentTime >= 12) && (currentTime < 16)) {
      setAfternoon();
    }
    if ((currentTime >= 16) && (currentTime < 20)) {
      setEvening();
    }
    if ((currentTime >= 20 ) && (currentTime < 24)) {
      setNight();
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


  // Query Time of Day
  var currHref = window.location.href,
      hasQuery = currHref.indexOf('=') !== -1,
      query = hasQuery && currHref.split('=')[1];

  if(hasQuery){
    body.removeClass('night day afternoon evening midnight');

    switch(query){
      case 'night':
        setNight();
        break;
      case 'evening':
        setEvening();
        break;
      case 'midnight':
        setMidnight();
        break;
      case 'afternoon':
        setAfternoon();
        break;
      default:
        setDay();
    }
  }
});
