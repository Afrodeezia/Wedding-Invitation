//------------------ OVERLAY ------------------------------
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    
  }

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
//------------------- OVERLAY ------------------------------------


 //----------------- NAVBAR STICKY -------------------------------
  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction(); scrollFunction();};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. 
//Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 
//----------------- NAVBAR STICKY -------------------------------

function scrollWin(){
  window.scrollTo(0,500);
}



//----------------- NAVIGATION BUTTONS --------------------------

//----------------- SCROLL TOP TOP BUTTON -----------------------



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

// ----------- burger button and overlay -----------------

$(".menu-icon").click(function() {
  $(this).toggleClass("active");
  $(".overlay-menu").toggleClass("open");
});