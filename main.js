$(document).ready(function(){
    $('ul li:first').addClass('active');
    $('.contentPage section').fadeOut(200);
    $('.contentPage section:first').fadeIn(200);
    
    $('ul li').click(function(){
        $('ul li').removeClass('active');
        $(this).addClass('active');
        $('.contentPage section').fadeOut(200);

        var activeTab = $('a', this).attr('href');
        $(activeTab).fadeIn(200);
        return false;
    });
});

//pre-loader
var delayInMilliseconds = 1500; //1 second

$(window).on('load',function(){
    setTimeout(function() {
    $(".loader").fadeOut(300);
    $(".allbody").fadeIn(300);
}, delayInMilliseconds);
});