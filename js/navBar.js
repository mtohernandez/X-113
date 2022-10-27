"use strict";

const openNav = document.getElementById("nav__toggle"),
  closeNav = document.getElementById("nav__close"),
  navBar = document.getElementById("nav-menu"),
  overlay = document.querySelector(".overlay");

if (openNav) {
  openNav.addEventListener("click", function () {
    navBar.classList.add("show-menu");
    overlay.classList.remove('hidden');
  });
}

if (closeNav) {
  closeNav.addEventListener("click", function () {
    navBar.classList.remove("show-menu");
    overlay.classList.add('hidden');
  });
}

function reveal(){
  var reveals = docment.querySelectorAll('.reveal');

  for(let i = 0; i < reveals.length; i++){
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if(revealtop <= windowheight - revealpoint){
      reveals[i].classList.add('active');
      
    }else{
      reveals[i].classList.remove('active');

    }
  }
}

window.addEventListener('scroll', reveal);
