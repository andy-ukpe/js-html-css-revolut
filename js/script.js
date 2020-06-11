
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
        $('.arrow i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    
      }
    );
    $('.lang').mouseleave(
      function(){
        $('.arrow i').addClass('fa-chevron-down').removeClass('fa-chevron-up');

      }
    );
  }
);
