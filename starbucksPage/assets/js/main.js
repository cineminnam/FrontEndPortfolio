//Tap 기능

$("#coffee__tab").click(function(){
    
    $(".section__gridFirstWrapper").removeClass('selected').siblings().addClass('selected');
                     
 });

 $("#food__tab").click(function(){
    
    $(".section__gridSecondWrapper").removeClass('selected').siblings().addClass('selected');
    
    });
    
$("#blend__tab").click(function(){

    $(".section__gridThridWrapper").removeClass('selected').siblings().addClass('selected');

});



// 줌 기능
$('.col-md-3 img').mouseover(function(){
    
$(this).elevateZoom();
    
});



// 슬라이더 기능

$("#coffee__tab").click(function(){
    $(".section__gridFirstWrapper").addClass('animated fadeInRight');
  
});


 $("#food__tab").click(function(){
    
    $(".section__gridSecondWrapper").addClass('animated fadeInRight');
    
    });

$("#blend__tab").click(function(){

    $(".section__gridThridWrapper").addClass('animated fadeInRight');

});

// menu modal 관련





// top menu scroll

$('#top__navMenu').smoothScroll();

$('#top__navEvent').smoothScroll();

$('#top__navFAQ').smoothScroll();

$('#top__navStore').smoothScroll();


