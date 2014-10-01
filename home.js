$('.navbar-toggle').click(function() {
    _this = $('.navbar-toggle');
    if(_this.hasClass('collapsed')) {
        $('.tab-content').css('margin-top', 207);
        console.log('DOWN');
    } else {
        $('.tab-content').css('margin-top', 30);
        console.log('UP');
    }
});

$('.nav li').click(function() {
    $('.tab-content').hide();
    $('.tab-content').fadeIn();
});

$(document).ready(function(){
    $('.tab-content').fadeIn(3500);
    $('nav').css('display', 'none');
    $('nav').delay('3000').fadeIn(1500);
});