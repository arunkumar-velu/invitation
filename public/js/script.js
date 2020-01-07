// I know that the code could be better.
 // If you have some tips or improvement, please let me know.
 
$('.img-parallax').each(function(){
 var img = $(this);
 var imgParent = $(this).parent();
 function parallaxImg () {
   var speed = img.data('speed');
   var imgY = imgParent.offset().top;
   var winY = $(this).scrollTop();
   var winH = $(this).height();
   var parentH = imgParent.innerHeight();


   // The next pixel to show on screen      
   var winBottom = winY + winH;

   // If block is shown on screen
   if (winBottom > imgY && winY < imgY + parentH) {
     // Number of pixels shown after block appear
     var imgBottom = ((winBottom - imgY) * speed);
     // Max number of pixels until block disappear
     var imgTop = winH + parentH;
     // Porcentage between start showing until disappearing
     var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
   }
   img.css({
     top: imgPercent + '%',
     transform: 'translate(-50%, -' + imgPercent + '%)'
   });
 }
 $(document).on({
   scroll: function () {
     parallaxImg();
   }, ready: function () {
     parallaxImg();
   }
 });
});

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