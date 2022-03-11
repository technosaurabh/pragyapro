$(window).on("load",function(){
    $(".preloader").fadeOut("slow");
});

$(document).ready(function(){
   /*----------Navbar Shrink-------- */
    $(window).on("scroll",function(){
     if($(this).scrollTop() > 90){
         $(".navbar").addClass("navbar-shrink"); 
     }
     else{
         $(".navbar").removeClass("navbar-shrink");
     }
    });
 
     /*----------Features Corousel-------- */
    $('.features-carousel').owlCarousel({
     loop:true,
     margin:0,
     autoplay:true,
     responsiveClass:true,
     responsive:{
         0:{
             items:1,
         },
         600:{
             items:2,
         },
         1000:{
             items:3,
         }
     }
 });

  /*----------Page Scrolling-------- */
  $.scrollIt({
      topOffset: -50,
  });

  /*---------navbar colapse--------*/
  $(".nav-link").on("click", function(){
      $(".navbar-collapse").collapse("hide");
  });

  /*--------Light & Dark Mode---------*/
  function toggleTheme(){
      if(localStorage.getItem("ameer-theme") !== null){
         if(localStorage.getItem("ameer-theme") === "dark"){
             $("body").addClass("dark");
      }
         else{
             $("body").removeClass("dark");
         }
      }
      updateIcon();
  }

  toggleTheme();

  $(".toggle-theme").on("click", function(){
     $("body").toggleClass("dark");
     if($("body").hasClass("dark")){
       localStorage.setItem("ameer-theme", "dark")
     }
     else{
         localStorage.setItem("ameer-theme", "light")

     }
     updateIcon();
  });
  function updateIcon(){
      if($("body").hasClass("dark")){
          $(".toggle-theme i").removeClass("fa-moon");
          $(".toggle-theme i").addClass("fa-sun");
      }

      else{
         $(".toggle-theme i").removeClass("fa-sun");
          $(".toggle-theme i").addClass("fa-moon"); 
      }
  }

 });

