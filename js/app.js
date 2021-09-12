// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    }
     else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();



// menus styleMedia
const hambergar = document.getElementById('open-menu')
const closeNav = document.getElementById('close-nav')
const menu = document.querySelector('nav ul')

hambergar.addEventListener('click',function(e){
    menu.style.display = 'flex'
    closeNav.style.display = 'block'
    hambergar.style.display = 'none'
})
closeNav.addEventListener('click',function(e){
    menu.style.display = 'none'
    closeNav.style.display = 'none'
    hambergar.style.display = 'block'
})



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
