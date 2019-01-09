 $(document).ready(function(){
     
/*-----------------Use waypoint to implement sticky nav---------------------*/
    $('#portfolio-section').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass("sticky");
            $("nav").appendTo("#js--sticky-nav");
           }
        else {
            $('nav').removeClass("sticky");
            $("nav").appendTo("#js--home-nav");
        }
    }, {
        offset: '60px;'
    });
/*-------------------Cross current section in the nav-----------------------*/
        $('.home-content').waypoint(function(direction){
            $(".js--scroll-to-portfolio").removeClass("current-page-nav");
       });
     
       $('#portfolio-section').waypoint(function(direction){
           if(direction =="down"){
               $(".js--scroll-to-portfolio").addClass("current-page-nav");
           }
       });
     
        $('#about-section').waypoint(function(direction){
           if(direction =="down"){
               $(".js--scroll-to-about").addClass("current-page-nav");
                $(".js--scroll-to-portfolio").removeClass("current-page-nav");
           }
           else {
               $(".js--scroll-to-portfolio").addClass("current-page-nav");
               $(".js--scroll-to-about").removeClass("current-page-nav");
           }
       });
     
/*----------------------Scroll to selected section---------------------------*/
    $('.js--scroll-to-portfolio').click(function(){
        $('html, body').animate({scrollTop: $('#portfolio-section').offset().top}, 1000);
        toggle();
        
    });
    
    $('.js--scroll-to-about').click(function(){
        $('html, body').animate({scrollTop: $('#about-section').offset().top}, 1000);
        toggle();
    });
     
/*-------------------------------Mobile navigation----------------------------*/
    $('.js--nav-icon').click(function(){
        toggle();
    });
     
     function toggle(){
        var nav = $('nav');
        var icon = $('.mobile-nav-icon i');
         
         if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            $('.main-nav').removeClass('hidden-nav');
        }else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            $('.main-nav').addClass('hidden-nav');
        }
     }

/*-----------------Move Social icons to the About Me section------------------*/
    $('#about-section').waypoint(function(direction){
           if(direction =="down"){
               $(".social-links").appendTo("#social-bottom");
           }
           else {
               $(".social-links").appendTo("#social-top");
           }
       }, {
        offset: "50%"
    });  
     
/*----------------------Circle text animation---------------------------*/
     const circleType = new CircleType(document.getElementById('circle-text'));
     
/*----------------------------Tag Cloud---------------------------------*/   
     var words = [
        {text: "Python", weight: 13},
        {text: "Java", weight: 10.5},
        {text: "HTML", weight: 9.4},
        {text: "CSS", weight: 8},
        {text: "Angular", weight: 6.2},
        {text: "JavaScript", weight: 5},
        {text: "MySQL", weight: 5},
        {text: "NoSQL", weight: 5},
        {text: "Eclipse", weight: 5},
        {text: "NetBeans", weight: 5},
        {text: "C", weight: 5}];

        $('#tags').jQCloud(words);
     
});

/*---------------------------Portfolio-Slideshow------------------------------*/
function setEntry(n, m) {
                $(".portfolio__nav_thumb").each(function() {
                    $(this).removeClass("portfolio__nav_selected");
                });
                $(n).addClass("portfolio__nav_selected");
                $(".portfolio__entry").each(function() {
                    $(this).removeClass("current_entry");
                });
                $(m).addClass("current_entry");
            }