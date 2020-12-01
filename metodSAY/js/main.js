
//slider
$(document).ready(function(){
    let slidesToShow = 3;//количество слайдов

    if($(window).width()< 768){
        slidesToShow = 2;//количество слайдов
    }
    if($(window).width()< 486){
        slidesToShow = 1;//количество слайдов
    }
    let position = 0;
    const slidesToScroll = 1;//скролл за один клик

    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const itemCounts = item.length;
    const btnNext = $('.btn-next');
    const btnPrev = $('.btn-prev');
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;
 
    item.each(function (index, item){
     $(item).css({
         minWidth: itemWidth,
     });
    });
 
    btnPrev.click(function(){
     const itemsLeft = Math.abs(position) / itemWidth;
     position += itemsLeft >= slidesToScroll ? movePosition: itemsLeft * itemWidth;
     setPosition();
     checkBtns();
    });
 
    btnNext.click(function(){
     const itemsLeft = itemCounts - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
     position -= itemsLeft >= slidesToScroll ? movePosition: itemsLeft * itemWidth;
     setPosition();
     checkBtns();
 
    });
 
    const setPosition = () =>{
     track.css({
         transform: `translateX(${position}px)`
     });
    };
    const checkBtns = () =>{
     btnPrev.prop('disabled', position === 0);
     btnNext.prop(
         'disabled',
         position <= -(itemCounts - slidesToShow) * itemWidth
         
         );
    };
 
    checkBtns();
 });

 document.getElementById("mybtn").onclick = function(){
 
       let myaudio = document.getElementById("myaudio");

       if(myaudio.paused == true){
         document.getElementById("myaudio").play();
       }else if (myaudio.paused == false){
           document.getElementById("myaudio").pause();
        }
}
 