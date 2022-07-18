$(document).ready(function () {

    $('.accordion-item').find('.icon').addClass('icon_mas');

    $('.nav-link').click(function (e) {
        setTimeout(function () {
            $('.accordion-content').slideUp();
        }, 200);
    })

    $('.accordion-item button').click(function (e) {
        e.stopPropagation();
        $('.accordion-content').not($(this).next()).slideUp();
        $('.accordion-item').not($(this).parent()).find('.icon').addClass('icon_mas');

        $(this).next().slideToggle();
        if ($(this).find('.icon').hasClass('icon_mas')) {
            $(this).find('.icon').removeClass('icon_mas').addClass('icon_menos');
        } else {
            $(this).find('.icon').removeClass('icon_menos').addClass('icon_mas');
        }
    })

});