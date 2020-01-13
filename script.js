$(document).ready(function () {
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });
    $('#topBtn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbare').css({"opasity": "1"});
        } else {
            $('.navbare').css({"opasity": "0"});
        }
    });
    $('#topBtn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    });
});

$('.navbar-nav').on('click', 'a', function (event) {
    event.preventDefault();
    const id = $(this).attr('href');
    const top = $(id).offset().top;
    $('.navbar-nav  a').removeClass('active');
    $(this).addClass('active')
    $('html').animate({
        scrollTop: top
    }, 1500)
})