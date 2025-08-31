 $(document).ready(function(){
    $(window).scrollTop(0);
/*-----------------Use waypoint to implement sticky nav---------------------*/
    // $('#portfolio-section').waypoint(function(direction){
    //     if(direction == "down"){
    //         $('nav').addClass("sticky");
    //         $("nav").appendTo("#js--sticky-nav");
    //        }
    //     else {
    //         $('nav').removeClass("sticky");
    //         $("nav").appendTo("#js--home-nav");
    //     }
    // }, {
    //     offset: '60px;'
    // });
/*-------------------Cross current section in the nav-----------------------*/
    //     $('.home-content').waypoint(function(direction){
    //         $(".js--scroll-to-portfolio").removeClass("current-page-nav");
    //         if(direction =="down"){
    //             $('.main-nav').addClass('hidden-nav');
    //         }
    //         else {
    //             $('.main-nav').removeClass('hidden-nav');
    //         }
    //    });
     
    //    $('#portfolio-section').waypoint(function(direction){
    //        if(direction =="down"){
    //            $(".js--scroll-to-portfolio").addClass("current-page-nav");
    //        }
    //    });
     
    //     $('#about-section').waypoint(function(direction){
    //        if(direction =="down"){
    //            $(".js--scroll-to-about").addClass("current-page-nav");
    //             $(".js--scroll-to-portfolio").removeClass("current-page-nav");
    //        }
    //        else {
    //            $(".js--scroll-to-portfolio").addClass("current-page-nav");
    //            $(".js--scroll-to-about").removeClass("current-page-nav");
    //        }
    //    });
     
/*----------------------Scroll to selected section---------------------------*/
    $('.js--scroll-to-portfolio').click(function(){
        $('html, body').animate({scrollTop: $('#portfolio-section').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-about').click(function(){
        $('html, body').animate({scrollTop: $('#about-section').offset().top}, 1000);
    });
/*-----------------------Background Color Transitions--------------------------*/
$(window).scroll(function() {
    if ($(this).scrollTop() <= 450) {
        $("#wrapper").addClass("mainColor")
        .removeClass('portfolioColor');
    } else if ($(this).scrollTop() <= 1000) {
        $("#wrapper").addClass("portfolioColor")
        .removeClass('mainColor');
    } else {
        $("#wrapper").addClass("mainColor")
        .removeClass('portfolioColor');
    }
  });

/*-------------------------------Mobile navigation----------------------------*/
    $('.js--nav-icon').click(function(){
        toggle();
    });
     
     function toggle(){
        var nav = $('.main-nav');
        var icon = $('.mobile-nav-icon i');
        if(icon.hasClass('ion-navicon-round')){
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
            nav.removeClass('hidden-nav');
        }else 
        {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            nav.addClass('hidden-nav');
        }
     }

/*-----------------Move Social icons to the About Me section------------------*/
    // $('#about-section').waypoint(function(direction){
    //        if(direction =="down"){
    //            $(".social-links").appendTo("#social-bottom");
    //        }
    //        else {
    //            $(".social-links").appendTo("#social-top");
    //        }
    //    }, {
    //     offset: "50%"
    // });  
     
/*----------------------Circle text animation---------------------------*/
     // Initialize circle text and position it around the home nav
     var circleEl = document.getElementById('circle-text');
     // Wrap in a positioned container so we can translate without affecting rotation animation
     if (!document.getElementById('circle-wrapper')) {
         var wrapper = document.createElement('div');
         wrapper.id = 'circle-wrapper';
         circleEl.parentNode.insertBefore(wrapper, circleEl);
         wrapper.appendChild(circleEl);
     }
     var circleWrapper = document.getElementById('circle-wrapper');
     var circleType = new CircleType(circleEl);

     function repositionCircle() {
        var $homeContent = $('.home-content');
        var $target = $('#js--home-nav');
        if ($target.length === 0 || $homeContent.length === 0) return;

        // Target bounding boxes
        var targetOffset = $target.offset();
        var homeOffset = $homeContent.offset();
        var targetWidth = $target.outerWidth();
        var targetHeight = $target.outerHeight();

        var centerX = targetOffset.left - homeOffset.left + (targetWidth / 2);
        var centerY = targetOffset.top - homeOffset.top + (targetHeight / 2);

        // Radius slightly larger than max dimension
        var padding = Math.max(20, Math.min(80, Math.round(Math.max(targetWidth, targetHeight) * 0.15)));
        var radius = Math.round(Math.max(targetWidth, targetHeight) / 2) + padding;
        circleType.radius(radius);

        // Position wrapper so its center aligns to target center
        circleWrapper.style.position = 'absolute';
        circleWrapper.style.pointerEvents = 'none';
        circleWrapper.style.zIndex = '0';
        circleWrapper.style.left = centerX + 'px';
        circleWrapper.style.top = centerY + 'px';
        circleWrapper.style.transform = 'translate(-50%, -50%)';
     }

     // Initial position and on resize (debounced)
     repositionCircle();
     var resizeTimer;
     $(window).on('resize', function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(repositionCircle, 100);
     });
     
/*----------------------------Tag Cloud---------------------------------*/   
/*     var words = [
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
*/     
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