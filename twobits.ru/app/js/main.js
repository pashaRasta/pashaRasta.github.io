// открытие меню
var btn_show_menu = $('.show_menu');
var showMenu = $('.content ul');

btn_show_menu.click(function(){
	showMenu.toggleClass('active_toggle');
	btn_show_menu.toggleClass('menu_toggle')
})
// Верхний слайдер 
var swiper = new Swiper('.swiper-container', {
    speed: 300,
      // parallax: true,
    loop:true,
    // effect:'fade'
});
// слайдер калькулятор
var swiper = new Swiper('.swiper-container_calculate', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
 });
// модальное окно
var href_open_modal_wrapp = $('.request_modal')
var modal_wrapper = $('.modal_wrapper');
var show_btn_modal = $('.clossed_modal')

href_open_modal_wrapp.click(function(){
	modal_wrapper.toggleClass('modal_show');
});
show_btn_modal.click(function(){
		modal_wrapper.removeClass('modal_show');
});








$(function() {
	   if(jQuery('#parallax').length != 0){
		if(jQuery(window).width() > 980){
			
			//apply parallax effect
			jQuery('#parallax .parallax-layer').parallax(
				{mouseport: jQuery('#parallax')}
			);
		
			$(window).load(function(){
				jQuery('#parallax .parallax-layer').css('display','block');		
				
			});
		}
	}
 }); 