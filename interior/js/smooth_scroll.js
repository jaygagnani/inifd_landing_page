var top-banner-height = document.getElementById("top-banner");
var courses-height = document.getElementById("courses");
var why-us-height = document.getElementById("why-us");
var contact-map-height = document.getElementById("contact-map");
var social-media-height = document.getElementById("social-media");

var total-height = top-banner-height;
var lastScrollTop = 0;

$(document).scroll(function(){

  var st = $(this).scrollTop();
  if(st>lastScrollTop){

    if($(window).scrollTop() < total-height){
      $(window).scrollTop(total-height);
      total-height = top-banner-height + courses-height;
    }
    else if($(window).scrollTop() < total-height){
      $(window).scrollTop(total-height);
      total-height = top-banner-height + courses-height + why-us-height;
    }
    else if($(window).scrollTop() < total-height){
      $(window).scrollTop(total-height);
      total-height = top-banner-height + courses-height + why-us-height + contact-map-height;
    }
    else if($(window).scrollTop() < total-height){
      $(window).scrollTop(total-height);
      total-height = top-banner-height + courses-height + why-us-height + contact-map-height + social-media-height;
    }
    else if($(window).scrollTop() < total-height){
      $(window).scrollTop(total-height);
      total-height = top-banner-height + courses-height + why-us-height + contact-map-height + social-media-height;
    }
  }
  else if(st<lastScrollTop){

    if($(window).scrollTop() >= total-height){
      $(window).scrollTop(total-height);
      total-height -= (social-media-height + contact-map-height);
    }
    else if($(window).scrollTop() >= total-height){
      $(window).scrollTop(total-height);
      var total-height -= why-us-height;
    }
    else if($(window).scrollTop() < total-height){
      $(window).scrollTop(total-height);
      var total-height -= courses-height;
    }
    else if($(window).scrollTop() < total-height){
      $(window).scrollTop(total-height);
      total-height -= top-banner-height;
    }

  }

});
