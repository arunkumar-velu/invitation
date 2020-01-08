var current = $(window).scrollTop();
var total = $(window).height() - current;
var ele1 = $(".caricature");
var currPosition1 = ele1.position().left + 100;
var ele2 = $(".train");
var total1 = $(window).width();
$(window).scroll(function (event) {
    current = $(window).scrollTop();
    if(current <= 315){
      ele1.css({marginLeft:(current-315)+'px'});
    }
    ele2.css({marginLeft: total1 - current +'px'});
});