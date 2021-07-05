$(document).ready(function(){
    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));
    
    $(window).on("scroll", function(){
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", (scrollFromTop > 150));
    });
    
    //smooth scroll
    $('.menu li a[href^="#"]').on('click', function(e){
       e.preventDefault();
        var target = $(this.hash);
        if(target.length){
            $('html,body').stop().animate({
               scrollTop: target.offset().top - 60 
            }, 750);
        }
    });
    
    //Masonry
    $('.grid').masonry({
        //options
        itemSelector: '.grid-item',
        columnWidth: 120,
        fitWidth: true
    });
    
    
    //Responsive Menu
    var body = $('body');
    var menuTrigger = $('.js-menu-trigger');
    var mainOverlay = $('.js-main-overlay');
    
    menuTrigger.on('click', function(){
       body.addClass('menu-is-active');
        
    });

    mainOverlay.on('click', function(){
       body.removeClass('menu-is-active');
        
    });
    
    $('.menu li a').on('click', function(){
       body.removeClass('menu-is-active');
        
    });
});