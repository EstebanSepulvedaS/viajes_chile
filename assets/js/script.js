$(function(){

  $('.nav-link').click(function(event){
    if (this.hash !=="") {
      event.preventDefault();

      var hash= this.hash;

      $('html, body').animate({
        scrollTop:$(hash).offset().top

      });

    }
  })
      //scroll
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= $(header).height() ) {
         $('nav').addClass('cabeceraOscura');
      } else{
         $('nav').removeClass('cabeceraOscura');
      }
  });


          //toogle
  $( "#clickme1" ).click(function() {
    $( "#cuerpo1" ).toggle( "800", function() {
    });
    });
  $( "#clickme2" ).click(function() {
    $( "#cuerpo2" ).toggle( "800", function() {
    });
    });
  $( "#clickme3" ).click(function() {
    $( "#cuerpo3" ).toggle( "800", function() {
    });
    });
      //tooltip
  $('[data-toggle="tooltip"]').tooltip();

});
