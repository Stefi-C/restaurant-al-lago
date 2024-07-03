 /*
function main() {

(function () {
  
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 600;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
      });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });

}());


}
main();
 */ 
//slider menu
let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
          stt++;
          items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = 'blur(5px)';
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
  }
  loadShow();
  next.onclick = function(){
      active = active + 1 < items.length ? active + 1 : active;
      loadShow();
  }
  prev.onclick = function(){
      active = active - 1 >= 0 ? active - 1 : active;
      loadShow();
  }
/*
//gallery
let prevGallery = document.querySelector(".prev");
let nextGallery = document.querySelector(".next");


nextGallery.addEventListener('click', function(){
  let galItems = document.querySelectorAll(".gallery-item");
  document.querySelector('.gallery-box').appendChild(galItems[0]);
})
prevGallery.addEventListener('click', function(){
  let galItems = document.querySelectorAll(".gallery-item");
  document.querySelector('.gallery-box').prepend(galItems[galItems.length - 1]);
})*/