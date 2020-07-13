$(document).ready(()=>{
  
  $('nav ul li').hoverIntent(
     function(){
        $(this).find('ul').slideDown(600);
     },
     function(){
        $(this).find('ul').slideUp(400);
     }
  	);
});