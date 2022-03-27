//------------------ OVERLAY ------------------------------
const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('overlay');


toggle.onclick = function(){
    toggle.classList.toggle('active');
    overlay.classList.toggle('active');
}


document.onclick = function(e) {
  if(e.target.id !== 'overlay' && e.target.id !== 'toggle' )
  {
    toggle.classList.remove('active');
    overlay.classList.remove('active')
  }
}
 
  function storyCloseNav() {
    document.getElementById('section-b').scrollIntoView();  
  }

  function gettingCloseNav() {
    document.getElementById('invi').scrollIntoView(); 
  }

  function faqsCloseNav() {
    document.getElementById('section-d').scrollIntoView(); 
  }

  function giftCloseNav() {
    document.getElementById('section-e').scrollIntoView(); 
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




