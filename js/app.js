(function($){
  $(function(){

    //$('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('select').material_select();
    $('input#input_text').characterCounter();
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false
  });
    $('.tap-target').tapTarget('open');
    $('.tap-target').tapTarget('close');
    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'right',
        closeOnClick: true,
        draggable: true
    });
   
      
      //====== SLICK SLIDER

      $('.slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

      
      //============ SMOOTH scroll
      
      $('a[href^="#"]').on('click', function(e){
        e.preventDefault();

        var target = $(this.hash);
        if (target.length) {
          $('html, body').stop().animate({
            scrollTop: target.offset().top -10
          }, 1000);
        }
      });

  }); // end of document ready
})(jQuery); // end of jQuery name space