/**
 * Created by HIEUVH on 6/13/2016.
 */
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('.stick-point').offset() ? $('.stick-point').offset().top : 0;
    if (window_top > div_top) {
        $('.restaurant-place').addClass('stick');
        $('.stick-point').height($('.restaurant-place').outerHeight());
        $('.restaurant-place').width($('.restaurant-rate').width());
    } else {
        $('.restaurant-place').removeClass('stick');
        $('.stick-point').height(0);
    }
}

function signinEventBinding(){
     $('.signinform').submit(function() { 
       $.ajax({ 
           type : "POST",
           data : $(this).serialize(),
           dataType:'json',
           url: $(this).attr('action'), // target element(s) to be updated with server response 
           cache : false,
           //check this in firefox browser
           success : function(response){ console.log(response); 
               if (response.type == 'success'){
                   location.href = location.href;
               }
               else if (response.type == 'error'){
                   alert(response.text);
               }
           },             
           error: function(response){ console.log(response); },
       });        
       return false; 
    }); 
    $('#submit_login').click(function(e){             
        e.preventDefault();
        $('.signinform').submit();
    })
}

$(function() {
    signinEventBinding(); 
    $(window).scroll(sticky_relocate);
    sticky_relocate();               
});



$(document).ready(function(){


    //responsive


    function checkWidth() {
        if(window.matchMedia('(max-width: 768px)').matches){
            if($(".navbar>ul").hasClass("topbar")){
                $(".navbar>ul").removeClass("topbar")
                $(".navbar>ul").addClass("R-topbar")
            }
        }
        if(window.matchMedia('(min-width: 768px)').matches){
            if($(".navbar>ul").hasClass("R-topbar")){
                $(".navbar>ul").removeClass("R-topbar")
                $(".navbar>ul").addClass("topbar")
            }
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);




    $('#home-list-resp').click(function(){
        $('.bar1').toggleClass('rotated1');
        $('.bar2').toggle(100);
        $('.bar3').toggleClass('rotated2');
        $('.list-tool-resp').slideToggle();
        $('.cross-down').fadeToggle();
    });

    $('.cross-down').click(function(){
        if(!$(this).children(".bar5").hasClass('rotated3')){
            if($('.cross-down').children(".bar5").hasClass('rotated3')){
                $('.cross-down').children('.bar4').removeClass('rotated3');
                $('.cross-down').children('.bar5').removeClass('rotated3');
                $('.cross-down').children('.bar4').show(100);
                $('.cross-down').parent('li').children('.hover-menu').slideUp();
            }
        }
        $(this).children('.bar4').toggleClass('rotated3');
        $(this).children('.bar5').toggleClass('rotated3');
        $(this).children('.bar4').toggle(100);
        $(this).parent('li').children('.hover-menu').slideToggle();
    });





    $('#home-list-resp').click(function() {
        $('.R-topbar').slideToggle();
    });
});