
 



 $( "#cikget" ).mouseout(function() {
$(".cls-4").hide();
$(".quitahi").hide();
});
 $( "#cikget" ).mouseover(function() {
$(".cls-4").show();
  $(".cls-2").show();
});document.getElementById("getGet").onclick = ans;
document.getElementById("xcerrar").onclick = ans2;

document.getElementById("cikget").onclick= function(){
  ans()
};
document.getElementById("visible-button").onclick = function() {
document.getElementById("visible-input").removeAttribute("disabled");
   document.querySelector("#visible-input").select();
  // Copy to the clipboard
  document.execCommand('copy');
  document.getElementById("visible-input").setAttribute("disabled", "true");
  
};


function ans(){/*  */
  
  
$(".contediv").css("display", "block");
  $(".contediv").css("opacity", "1");
  
  
  document.getElementById("contediv").onclick = ans2;
   $(".contediv").removeClass("animation2");$(".contediv").addClass("animation");
  

  
  
}
function ans2(){/*  */
   $(".contediv").removeClass("animation");$(".contediv").addClass("animation2");
  $(".contediv").fadeOut("slow")
  
  
  
}



$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        }).one(animationEnd, function() {
            $(this).addClass('displaynone');
        });
      
    }
});

// $('h1').animateCss('pulse');

$('.scrollbanner').mouseover(function() {
  $('.scrollbanner').animateCss('rubberBand');
});

setTimeout(function(){ 
  randomAnimate();
}, 3000);

function randomAnimate () {
  var ranNum = Math.floor((Math.random() * 7) + 1);
    if (ranNum == 1) {
      $('.scrollbanner').animateCss('tada');
    } else if (ranNum == 2) {
      $('.scrollbanner').animateCss('swing');
    } else if (ranNum == 3) {
      $('.scrollbanner').animateCss('shake');
    } else if (ranNum == 4) {
      $('.scrollbanner').animateCss('pulse');
    } else if (ranNum == 5) {
      $('.scrollbanner').animateCss('bounce');
    } else if (ranNum == 6) {
      $('.scrollbanner').animateCss('jello');
    } else {}
  setTimeout(function(){ 
    randomAnimate();
  }, 3000);
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var oneEstado = 'sin';

$('.contenedorCirculos1').hover(function() {
 $('.circulo1-1').attr('src','https://i.ibb.co/q5L1xZC/bosque-3.png');
                       $('.circulo2-1').attr('src','https://i.ibb.co/pL0gNYz/monta-a.png');
                       $('.circulo3-1').attr('src','https://i.ibb.co/ydTV7FV/luna.png')
              
});

$('.contenedorCirculos2').hover(function() {
 $('.circulo1-1').attr('src','https://i.ibb.co/PWV78kR/bosque.png');
                       $('.circulo2-1').attr('src','https://i.ibb.co/QHVrFjh/monta-a-1.png');
                       $('.circulo3-1').attr('src','https://i.ibb.co/ydTV7FV/luna.png')
              
});


$('.contenedorCirculos3').hover(function() {
 $('.circulo1-1').attr('src','https://i.ibb.co/PWV78kR/bosque.png');
                       $('.circulo2-1').attr('src','https://i.ibb.co/pL0gNYz/monta-a.png');
                       $('.circulo3-1').attr('src','https://i.ibb.co/DDYdtqj/luna-1.png')
              
})

$('a.smoothScroll').smoothScroll({
offset: -80,
scrollTarget: $(this).val()
});






// Copy to clipboard example

