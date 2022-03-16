//------------------ OVERLAY ------------------------------
  $(".menu-icon").click(function() {
    $(this).toggleClass("active");
    $(".overlay-menu").toggleClass("open");
  });

  function homeCloseNav() {
    window.scrollTo(0,0);
    document.getElementById("myNav").style.width = "0%";
    
  }

  function storyCloseNav() {
    window.scrollTo(0,600);
    document.getElementById("myNav").style.width = "0%";
    
  }

  function gettingCloseNav() {
    window.scrollTo(0,1300);
    document.getElementById("myNav").style.width = "0%";
    
  }

  function faqsCloseNav() {
    window.scrollTo(0,1600);
    document.getElementById("myNav").style.width = "0%";
    
  }


//----------------- SCROLL TOP TOP BUTTON -----------------------

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if(document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200){
    
    document.getElementById("myBtn").style.display = "block";
  }else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}



