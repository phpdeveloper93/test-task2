(function ($) {
  'use strict';

  $(document).ready(function () {    
          
    function siteMenu(){
        var $trigger = $('.trigger-nav'),// все объекты, которые имеют класс .trigger-nav
            $menu = $('.trigger-victim');//все объекты, которые имеют класс .trigger-victim
        
        $trigger.click(function(){ //по клику запускается анонимная функция
           $menu.slideToggle();
        });
        //когда меняется размер окна, запускаем функцию
        $(window).resize(function(){
           if($(window).width() > 992){//если ширина окна больше 768 
               $menu.removeAttr('style');//убираем атрибут style
           } 
        });        
    }
      siteMenu();
      
    function siteSlider(){
        var $mainslider = $('.main-slider'),
            $bottomslider = $('.bottom-slider'),
            $left = $('.left-slideshow'),
            $lowerlevel = $('.lower-level-carousel'),
            $upper = $('.upper-level');        
        
        $mainslider.slick({
            arrows: false,                      
            speed: 700,
            fade: true,
            rows: 0,            
            arrows: false,
            draggable: false,
            useTransform: false,
            infinite: false
        });
        $bottomslider.slick({
            customPaging: function (slider, i){
                return '<span>0</span>' + (i + 1);
            },
            dots: true,
            appendDots: $('.pagenav'),
            asNavFor: $mainslider,
            prevArrow: $('.prev-arrow'),
            nextArrow: $('.next-arrow'),
            infinite: false
        });
        $left.slick({
            arrows: true,                      
            speed: 700,
            fade: true,
            rows: 0,           
            draggable: false,
            useTransform: false,
            infinite: false,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
        }); 
        
        $lowerlevel.slick({
            arrows: false,                      
            speed: 700,
            fade: true,
            rows: 0,           
            draggable: false,
            useTransform: false,
            infinite: false            
        });    
        $upper.slick({
            customPaging: function (slider, i){
                return '<span>0</span>' + (i + 1);
            },
            dots: true,
            appendDots: $('.pagination'),                                 
            speed: 700,
            fade: true,
            rows: 0,  
            asNavFor: $lowerlevel,
            draggable: false,
            useTransform: false,
            infinite: false,
            prevArrow: $('.previous-arr'),
            nextArrow: $('.next-arr')           
        });        
    }
    siteSlider(); 
    //function scrollup
      function siteScrollup(){
        var scrollup = $(".scrollup");
          $(window).scroll(function(){
              if($(this).scrollTop() > 200){
                  scrollup.fadeIn();
              }
              else {
                  scrollup.fadeOut();
              }             
            });
           scrollup.click(function(){
                $("html, body").animate({scrollTop: 0}, 1000);
               
            });
    }
    siteScrollup();
    
  }); //end ready

}(jQuery));
