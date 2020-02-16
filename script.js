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
    $(".show-call-request").click(function(event){
        var form1 = $('<form class="form" action="https://echo.htmlacademy.ru/"><label class="form__input"><span>Пожалуйста,<br>укажите Ваше имя</span><input type="text" required="required" name="name"></label><label class="form__input"><span>номер телефона</span><input type="tel" required="required" name="phone" placeholder="+7 (___) ___-__-__"></label><input class="send" type="submit" name="submit" value="Отправить"></form>');
        $("body").toggleClass("scroll-lock");
        $(".popup-container").show();
        $(".popup").append(form1);
    });
    $(".show-call-request-email").click(function(event) {
        var form2 = $('<form class="form" action="https://echo.htmlacademy.ru/"><label class="form__input"><span>Пожалуйста,<br>укажите Ваше имя</span><input type="text" required="required" name="name"></label><label class="form__input"><span>номер телефона</span><input type="tel" required="required" name="phone" placeholder="+7 (___) ___-__-__"></label><label class="form__input form__input_email">	<span>адрес электронный почты</span><input type="email" required="required" name="email"></label><input class="send" type="submit" name="submit" value="Отправить"></form>');
        $("body").toggleClass("scroll-lock");
        $(".popup-container").show();
        $(".popup").append(form2);
    });
    $(".popup-container").click(function(event) {
    if (event.target == this) {
      $('.popup').find(".form").remove();
      $(this).hide();
      $("body").toggleClass("scroll-lock");
    };
    });
});
$(document).ready(function() {
  $('input[type="tel"]').inputmask({ mask: "+7 (999) 999-99-99" });
});