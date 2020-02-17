

$(document).ready(function() {
  CheckFadeAnimation();


    /* Every time the window is scrolled ... */
    $('body').scroll( function(){
        /* Check the location of each desired element */
        CheckFadeAnimation();

    });

});


function CheckFadeAnimation(){
  $('.fadeInAnimation').each( function(i){

      var bottom_of_object = $(this).offset().top + 100;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){

          $(this).animate({'opacity':'1'},1500);

      }

  });

  $('.fadeInAnimationFast').each( function(i){

    var bottom_of_object = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window-100 > bottom_of_object ){

          $(this).animate({'opacity':'1'},500);

      }

  });
}
