let menuBurgerShow = $('.show_nav');
let dwsMenu = $('.dws_menu');

menuBurgerShow.click(function(){

  menuBurgerShow.toggleClass('active');
  dwsMenu.toggleClass('active');

});

$('a[href^="#"').on('click', function() {

  let href = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  dwsMenu.removeClass('active');  
  menuBurgerShow.removeClass('active');

  return false;
});

//Swiper slider
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

//wow.js scrolling
var wow = new WOW(
  {
    boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
    animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
    offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
    mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
    live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
    callback:     function(box) {
      // функция срабатывает каждый раз при старте анимации
      // аргумент box — элемент, для которого была запущена анимация
    },
    scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
  }
);
wow.init();


//залипание меню
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

