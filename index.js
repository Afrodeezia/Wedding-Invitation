//------------------ OVERLAY ------------------------------
const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('overlay');

document.onclick = function(e) {
    if(e.target.id !== 'overlay' && e.target.id !== 'toggle' )
    {
      toggle.classList.remove('active');
      overlay.classList.remove('active')
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    overlay.classList.toggle('active');
}

  

 



  function storyCloseNav() {
    window.scrollTo(0,400);
    
    
    
    
  }

  function gettingCloseNav() {
    window.scrollTo(0,700);
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



