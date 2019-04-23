$(document).ready(function () { 
    $('.nav-icon').on('click', function(e) {
       e.preventDefault() 
     $('.nav-mobile').toggleClass('nav-open');
    })

    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });

    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    });
   });