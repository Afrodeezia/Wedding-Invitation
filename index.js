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

  function aboutCloseNav() {
    window.scrollTo(0,125);
    document.getElementById("myNav").style.width = "0%";
    
  }

  function portCloseNav() {
    window.scrollTo(0,500);
    document.getElementById("myNav").style.width = "0%";
    
  }

  function contactCloseNav() {
    window.scrollTo(0,965);
    document.getElementById("myNav").style.width = "0%";
    
  }
//------------------- OVERLAY ------------------------------------


 //----------------- NAVBAR STICKY -------------------------------
  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

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

