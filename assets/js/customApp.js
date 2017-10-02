$(document).ready(function(){
    var windowHeight = window.innerHeight;
    var appHeaderHeight = $('header').height();
    var appNavBarHeight = $('.appNavbar').height();
    var appContainerHeight = windowHeight - (appHeaderHeight + appNavBarHeight);
    $('.appContainer').css('height',appContainerHeight);
    $('.appContainer').css('max-height',appContainerHeight);
    initializeSlider();
});

// $(window).load(function() {
//     var windowHeight = window.innerHeight;
//     var appHeaderHeight = $('header').height();
//     var appNavBarHeight = $('.appNavbar').height();
//     var appContainerHeight = windowHeight - (appHeaderHeight + appNavBarHeight);
//     $('.appContainer').css('height',appContainerHeight);
//     $('.appContainer').css('max-height',appContainerHeight);
// });

$(window).resize(function() {
    var windowHeight = window.innerHeight;
    var appHeaderHeight = $('header').height();
    var appNavBarHeight = $('.appNavbar').height();
    var appContainerHeight = windowHeight - (appHeaderHeight + appNavBarHeight);
    $('.appContainer').css('height',appContainerHeight);
    $('.appContainer').css('max-height',appContainerHeight);
});

function initializeSlider(){
 $('.taskSlider').bxSlider();
}
