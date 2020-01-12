var current = $(window).scrollTop();
var total = $(window).height() - current;
var ele1 = $(".caricature");
var currPosition1 = ele1.position().left + 100;
var ele2 = $(".train");
var total1 = $(window).width();
var showFireworks = 500;
$(window).scroll(function (event) {
    current = $(window).scrollTop();
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if(!isMobile && current <= 315){
      ele1.css({marginLeft:(current-315)+'px'});
      
    }
    if(isMobile){
      showFireworks = 900;
    }
    if(current >= showFireworks){
      $(".caricature-block .content-div .invitation-content .name").addClass('fireworks');
    }else{
      $(".caricature-block .content-div .invitation-content .name").removeClass('fireworks');
    }

    if(isMobile){
        var scale = current/350 > 1 ? 1 : (current/350 < 0.5) ? 0.5 : current/350;
        ele1.css({'-webkit-transform' : 'scale('+ scale +')',
        '-moz-transform'    : 'scale('+ scale +')',
        '-ms-transform'     : 'scale('+ scale +')',
        '-o-transform'      : 'scale('+ scale +')',
        'transform'         : 'scale('+ scale +')' });
      current = current - 1100;

    }
    

    ele2.css({marginLeft: total1 - current +'px'});
});


function initparticles() {
   hearts();
}

/*The measurements are ... whack (so to say), for more general text usage I would generate different sized particles for the size of text; consider this pen a POC*/

function hearts() {
   $.each($(".particletext.hearts"), function(){
      var heartcount = ($(this).width()/250)*5;
      for(var i = 0; i <= heartcount; i++) {
         var size = ($.rnd(60,120)/10);
         $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
      }
   });
}


jQuery.rnd = function(m,n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor( Math.random() * (n - m + 1) ) + m;
}

initparticles();

