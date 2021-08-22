$('.hero-slider').owlCarousel({
    items: 1,
    animateOut: 'fadeOut',
    // margin: 30,
    // stagePadding: 30,
    autoplay: true,
    smartSpeed: 450,
    loop: true,

});
$(document).ready(function() {
    $('#hamburger').click(function() {
        $(this).toggleClass('open');
        $('.menu').toggleClass('open')
    });

});

// 
$(window).on('load', function() {
    $(".loader").fadeOut("fast");
    $("#overlayer").fadeOut("fast");
    $('body').removeClass('loading');
});

// counter 

$(function() {

    $(".counter").each(function(item) {

            var sayed = $(this)

            function getCounterData(obj) {
                var day = sayed.find('.e-m-days');
                var days = parseInt($(day[0], obj).text());
                var hour = sayed.find('.e-m-hours');
                var hours = parseInt($(hour[0], obj).text());
                var minute = sayed.find('.e-m-minutes');
                var minutes = parseInt($(minute[0], obj).text());
                var second = sayed.find('.e-m-seconds')
                var seconds = parseInt($(second[0], obj).text());
                return seconds + (minutes * 60) + (hours * 3600) + (days * 3600 * 24);
            }

            function setCounterData(s, obj) {
                var days = Math.floor(s / (3600 * 24));
                var hours = Math.floor((s % (60 * 60 * 24)) / (3600));
                var minutes = Math.floor((s % (60 * 60)) / 60);
                var seconds = Math.floor(s % 60);

                // console.log(days, hours, minutes, seconds);

                $('.e-m-days', obj).html(days);
                $('.e-m-hours', obj).html(hours);
                $('.e-m-minutes', obj).html(minutes);
                $('.e-m-seconds', obj).html(seconds);
            }
            let count = getCounterData(this);

            let timer = setInterval(function() {
                count--;
                if (count == 0) {
                    clearInterval(timer);
                    return;
                }
                setCounterData(count, sayed);
            }, 1000);
        })
        //         // var count = getCounterData($(".counter"));

    //     // var timer = setInterval(function() {
    //     //     count--;
    //     //     if (count == 0) {
    //     //         clearInterval(timer);
    //     //         return;
    //     //     }
    //     //     setCounterData(count, $(".counter"));
    //     // }, 1000);
});