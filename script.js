var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  breakpoints: {
    953: {
      spaceBetween: 35,
      slidesPerView: 2,
      loop: true
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true
    }
  }
});
$(function() {
  $(".header__burger").click(function() {
    var close = $(
      '<a href="#" class="header__x"><span></span><span></span></a>'
    );
    $(this).hide();
    $(".header__nav").append(close);
    $(".mob-list").slideDown("slow");
    $(".header__nav")
      .find(".header__x")
      .click(function() {
        $(this).remove();
        $(".mob-menu")
          .find(".mob-list")
          .slideToggle();
        $(".header__burger").show();
      });
  });
  $(".show-call-request").click(function(event) {
    event.preventDefault();
    $("body").toggleClass("scroll-lock");
    $(".popup-container").show();
    $(".form__input_email").hide();
  });
  $(".show-call-request-email").click(function(event) {
    event.preventDefault();
    $("body").toggleClass("scroll-lock");
    $(".popup-container").show();
    $(".form__input_email").show();
  });
  $(".popup-container").click(function(event) {
    if (event.target == this) {
      $(this).hide();
      $("body").toggleClass("scroll-lock");
    }
  });
});
$(document).ready(function() {
  $('input[type="tel"]').inputmask({ mask: "+7 (999) 999-99-99" });
});
