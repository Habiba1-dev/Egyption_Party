/// <reference types ="../@types/jquery" />

$('#closebtn').on('click', function (e) {
    $('.anchors').animate({ width: '0' }, 1000)
    $('.content').animate({ marginLeft: '0px' }, 1000);
    $(e.target).addClass('active')
    $(e.target).siblings().removeClass('active')

})

$(".openNav").on('click', function () {
    $(".anchors").animate({ width: '250px' }, 1000)
    $(".content").animate({ marginLeft: '250px' }, 1000)
})

$('#slider .toggle h2').on('click', function () {
    $('#slider .toggle p').not($(this).next('p')).slideUp(500);
    $(this).next('p').slideToggle(500);

})
$(function () {
    const targetDate = new Date('2024-10-30');
    setInterval(function () {
        const now = new Date()
        const distance = targetDate - now;
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        $('#countdown .days').text(`${days}D`)
        $('#countdown .hours').text(`${hours}H`)
        $('#countdown .minutes').text(`${minutes}M`)
        $('#countdown .seconds').text(`${seconds}S`)



    }, 1000);


});



$(function () {
    $('#exampleFormControlTextarea1').on('input', function () {
        const myLimit = 100 - $(this).val().length;
        $('#charCount').text(`${myLimit}`);

        if (myLimit <= 0) {

            $('#charCount').text(`your available character finished  Characyer Reamining`);
        }
    });
});

$('a').on('click', function (e) {
    const link = e.target.getAttribute('href')
    const sectionOffset = $(link).offset().top
    $('body,html').animate({ scrollTop: sectionOffset }, 2000)
    $(e.target).addClass('active')
    $(e.target).siblings().removeClass('active')
    console.log( $(e.target).siblings());
    
})
