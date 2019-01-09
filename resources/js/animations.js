$(document).ready(function() {
    $('.js--name').waypoint(function(direction) {
       $('.js--name').addClass('animated fadeInRight'); 
    }, { 
        offset: '90%'
     });
    
    $('.js--titles').waypoint(function(direction) {
        $('.js--titles').addClass('animated fadeInLeft');
    }, {
        offset:'90%'
    });
    
    $('.js--main-nav').waypoint(function(direction) {
        $('.js--main-nav').addClass('animated fadeInRight');
    }, {
        offset:'90%'
    });
    
    $('.js--logo').waypoint(function(direction) {
        $('.js--logo').addClass('animated fadeInDown');
    }, {
        offset:'90%'
    });
    
    $('.js--circle').waypoint(function(direction) {
        $('.js--circle').addClass('animated fadeIn');
    }, {
        offset:'90%'
    });
    
    $('.js--social').waypoint(function(direction) {
        $('.js--social').addClass('animated fadeIn');
    }, {
        offset:'90%'
    });
    
    $('.js--page-header').waypoint(function(direction) {
        $('.js--page-header').addClass('animated fadeInDown');
    }, {
        offset: '95%'
    });
    
    $('.js--portfolio').waypoint(function(direction) {
        $('.js--portfolio').addClass('animated fadeInUp');
    }, {
        offset: '95%'
    });
    
    $('.js--entry').waypoint(function(direction) {
        $('.js--entry').addClass('animated fadeInLeft');
    }, {
        offset: '95%'
    });
});