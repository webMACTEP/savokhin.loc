jQuery(document).ready(function ($) {


   $(function () {
      window.addEventListener("scroll", function (event) {

         var top = this.scrollY;

         var layers = $(".body");
         var speed = 5;
         layers.each(function () {
            var yPos = (top * speed / 10);
            $(this).attr('style', 'background-position-y: ' + yPos + 'px');
         });

      });
   });


   const sliderThumbs = new Swiper('.slider01', {
      direction: 'horizontal',
      speed: 400,
      spaceBetween: 35,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
         renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
         },
      },
      slidesPerView: 1,
      autoplay: false,
   });


   const sliderThumbs2 = new Swiper('.slider02', {
      direction: 'horizontal',
      speed: 400,
      spaceBetween: 35,
      navigation: {
         nextEl: '.swiper-button-next2',
         prevEl: '.swiper-button-prev2',
      },

      slidesPerView: 1,
      autoplay: false,
   });


   $('.link01').click(function (event) {
      $('.link01').addClass('active');
      $('.item01').addClass('active');
      $('.link02').removeClass('active');
      $('.item02').removeClass('active');
      $('.link03').removeClass('active');
      $('.item03').removeClass('active');
   });

   $('.link02').click(function (event) {
      $('.link02').addClass('active');
      $('.item02').addClass('active');
      $('.link01').removeClass('active');
      $('.item01').removeClass('active');
      $('.link03').removeClass('active');
      $('.item03').removeClass('active');
   });

   $('.link03').click(function (event) {
      $('.link03').addClass('active');
      $('.item03').addClass('active');
      $('.link02').removeClass('active');
      $('.item02').removeClass('active');
      $('.link01').removeClass('active');
      $('.item01').removeClass('active');
   });



});