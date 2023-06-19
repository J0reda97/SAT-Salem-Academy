$(document).ready(function () {

    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active'); // remove active class from all links
        $(this).addClass('active'); // add active class to the clicked link
    });

    $("#login-toggler").click(function () {
        if ($("#login-div").height() >= 100) {
            $("#login-div").animate({ height: 0 }, 500);
        } else {
            $("#login-div").animate({ height: 300 }, 500);
        }
    });
});