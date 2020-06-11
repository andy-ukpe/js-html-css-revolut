
$(document).ready(
  function( ) {
// quando il maouse di muove sul menu si apre il dropdown
    $('.with-dropdown').mouseenter(
      function(){
         $(this).children('.dropdown').addClass('active');

      }
    );
// quando il maouse si sposta dal menu si chiude il dropdown
    $('.with-dropdown').mouseleave(
      function(){
         $(this).children('.dropdown').removeClass('active');
      }
    );
// quando si clicca su un elemento si apre o chiude l'indice alternativamente
    $('.with-dropdown').click(
      function(){
         $(this).children('.dropdown').toggleClass('active');
      }
    );
  // quando si clicca sulla lingua la freccia punta verso l'alto
    $('.lang').mouseenter(
      function(){
         $('.arrow-down').addClass('display');
         $('.arrow-down').removeClass('show');
         $('.arrow-up').addClass('show');
         $('.arrow-up').removeClass('display')
      }
    );
    $('.lang').mouseleave(
      function(){
         $('.arrow-down').addClass('show');
         $('.arrow-down').removeClass('display');
         $('.arrow-up').addClass('display');
         $('.arrow-up').removeClass('show');
      }
    );
  }
);
