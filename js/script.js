$(".modal-buy").hide();
$(".modal-content").hide();

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu').toggleClass('menu_active');
});

$(window).scroll(function(){
    
});

$(document).ready(function(){
  $(".anim1").toggleClass('anim1_active');
  $(".anim2").toggleClass('anim2_active');
});

function slowScroll(id){
  var offset = 0;
  $('html, body').animate ({
    scrollTop: $(id).offset().top - offset
  },1700);
  return false;
};

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll != 0) {
      $(".on-top").addClass("on-top_active");
    }else{
      $(".on-top").removeClass("on-top_active");
    }
});

$(".on-top-btn").click(function(){
     let onTop = $("#on-top");
     if (onTop.hasClass("on-top_active")){
        slowScroll(".main");
     }else{
       slowScroll(".contacts");
     }
});


var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);
});

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}





var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");

   btnTarget.classList.add("active");
}

$("#senior").click(function(){
    $(".pay-method").html('<iframe src="https://money.yandex.ru/quickpay/button-widget?targets=Senior%20%D0%A2%D0%B0%D1%80%D0%B8%D1%84&default-sum=2799&button-text=12&any-card-payment-type=on&button-size=l&button-color=orange&fio=on&phone=on&mail=on&successURL=https%3A%2F%2Fmy-files.ru%2Fdevkrf&quickpay=small&account=410018707507727&" width="227" height="48" frameborder="0" allowtransparency="true" scrolling="no"></iframe><iframe src="https://money.yandex.ru/quickpay/button-widget?targets=Senior%20%D0%A2%D0%B0%D1%80%D0%B8%D1%84&default-sum=2799&button-text=12&mobile-payment-type=on&button-size=l&button-color=orange&fio=on&phone=on&mail=on&successURL=https%3A%2F%2Fmy-files.ru%2Fdevkrf&quickpay=small&account=410018707507727&" width="227" height="48" frameborder="0" allowtransparency="true" scrolling="no"></iframe>');
    $(".modal-buy").show();
    $(".modal-content").fadeIn(800);
});
$("#junior").click(function(){
    $(".pay-method").html('<iframe src="https://money.yandex.ru/quickpay/button-widget?targets=Junior%20%D0%A2%D0%B0%D1%80%D0%B8%D1%84&default-sum=999&button-text=12&any-card-payment-type=on&button-size=l&button-color=orange&fio=on&phone=on&mail=on&successURL=https%3A%2F%2Fmy-files.ru%2Fh3ofdf&quickpay=small&account=410018707507727&" width="227" height="48" frameborder="0" allowtransparency="true" scrolling="no"></iframe><iframe src="https://money.yandex.ru/quickpay/button-widget?targets=Junior%20%D0%A2%D0%B0%D1%80%D0%B8%D1%84&default-sum=999&button-text=12&mobile-payment-type=on&button-size=l&button-color=orange&fio=on&phone=on&mail=on&successURL=https%3A%2F%2Fmy-files.ru%2Fh3ofdf&quickpay=small&account=410018707507727&" width="227" height="48" frameborder="0" allowtransparency="true" scrolling="no"></iframe>');
    $(".modal-buy").show();
    $(".modal-content").fadeIn(800);
});

$("#pro").click(function(){
    $(".pay-method").html('<iframe src="https://money.yandex.ru/quickpay/button-widget?targets=Pro%20%D0%A2%D0%B0%D1%80%D0%B8%D1%84&default-sum=1999&button-text=12&any-card-payment-type=on&button-size=l&button-color=orange&fio=on&phone=on&mail=on&successURL=https%3A%2F%2Fmy-files.ru%2F62r1jr&quickpay=small&account=410018707507727&" width="227" height="48" frameborder="0" allowtransparency="true" scrolling="no"></iframe><iframe src="https://money.yandex.ru/quickpay/button-widget?targets=Pro%20%D0%A2%D0%B0%D1%80%D0%B8%D1%84&default-sum=1999&button-text=12&mobile-payment-type=on&button-size=l&button-color=orange&fio=on&phone=on&mail=on&successURL=https%3A%2F%2Fmy-files.ru%2F62r1jr&quickpay=small&account=410018707507727&" width="227" height="48" frameborder="0" allowtransparency="true" scrolling="no"></iframe>');
    $(".modal-buy").show();
    $(".modal-content").fadeIn(800);
});
$("<iframe>").click(function(){
  $(".modal-buy").hide();
  $(".modal-content").hide();
});
$(".close").click(function(){
  $(".modal-buy").fadeOut(800);
  $(".modal-content").fadeOut(800);
})
