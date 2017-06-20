$(function () {
    var navBar = $('#navbar');
    var navLink = $('.nav-start > ul').find('a');
    navLink.click(function () {
        var toBeActive = $(this);
        navLink.each(function () {
                $(this).removeClass('active-link');
            });
        toBeActive.addClass('active-link');
    });
});
