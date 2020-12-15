var menuBurgerShow = $('.show_nav');
var dwsMenu = $('.dws_menu');

menuBurgerShow.click(function(){
    menuBurgerShow.toggleClass('active');
    dwsMenu.toggleClass('active');
})



  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 2,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // $(document).ready(function() {

  //   var navOffset = $('.nav').offset().top;
  //   var navHeight = $('.nav_height').height();
  //   var main = $('.main');
  
  //     $(window).scroll(function() {
  
  //       var scrolledWin = $(this).scrollTop();
  //       if (scrolledWin > navOffset ) {
  //         $('.nav-wrap').addClass('navFixed');
  //         $('.nav-wrap').css('z-index', '9998');
  //         main.css('margin-top' , navHeight + 'px');
  //       }
  //       else if(scrolledWin < navOffset){
  //         $('.nav-wrap').removeClass('navFixed');
  //         main.css('margin-top' , '0px');
  //         $('.nav-wrap').css('z-index', '2');
  
  //       }
  //     })
  // });