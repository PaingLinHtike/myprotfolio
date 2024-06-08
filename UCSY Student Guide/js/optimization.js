/* For navigation bar to go up and down */
var previousScroll = 0;

$(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > previousScroll){
        // Scrolling down
        $('#navbar').css('top', '-80px');  // Adjust '-50px' as needed
    } else {
        // Scrolling up
        $('#navbar').css('top', '0');
    }
    previousScroll = currentScroll;
});

/* To hide an option in the category */
$(document).ready(function() {
    $('#defaultOptionDestinations').hide();
    $('#defaultOptionActivities').hide();
});

$('.destinations, .activities').click(function() {
    $(this).children('option:first-child').hide();
});

/* For smooth scroll */
function smoothScroll(event, target) {
    event.preventDefault();
    window.scroll({
        top: target.offsetTop,
        behavior: 'smooth'
    }); 
}