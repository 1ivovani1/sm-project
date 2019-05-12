$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu').toggleClass('menu_active');
  $(".content").toggleClass('content_active');
})
$(".menu-btn1").hide();
$(document).ready(function(){
  $(".anim1").toggleClass('anim1_active');
  $(".anim2").toggleClass('anim2_active');
  if ($(window).width() <= '1100'){
    $(".menu-btn1").show();
  }
});
$('.menu-btn1').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn1_active');
  $('.menu-nav').toggleClass('menu-nav_active');
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
