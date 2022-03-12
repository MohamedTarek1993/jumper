//loader
let loader = document.getElementById('preloader');
window.addEventListener('load', function () {
  loader.style.display = 'none';
});
//loader
//  scroll-up 
var btn = $('#button');
var image = $('.navbar-light .navbar-brand img');
var link = $('.navbar-light .nav-item .nav-link');
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
    image.css('width', '50%');
    link.addClass('change');
  } else {
    btn.removeClass('show');
    image.css('width', '70%');
    link.removeClass('change');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
//    scroll-up 
// animated hamburger icon
$(document).ready($(function () {
  let navBtn = $('.navbar-toggler');
  $(navBtn).click(function () {
    $(navBtn).toggleClass('active-hamburger');
  });
}));
// animated hamburger icon
//    light&& dark 
// const body = document.querySelector('body');
// const toggle = document.getElementById('toggle');
// const dark = document.getElementById('dark');
// const light = document.getElementById('light');
// const logoLight=document.getElementById('logoLight');
// const logoDark=document.getElementById('logoDark');

// toggle.onclick = function () {
//   // toggle.classList.toggle('active-light-dark');
//   body.classList.toggle('active-body');
//   dark.classList.toggle('active-dark');
//   light.classList.toggle('active-light');

//   if(dark.classList.contains('active-dark')){
//     logoLight.style.display="none";
//     logoDark.style.display="block";
//   }
//   else{
//     logoLight.style.display="block";
//     logoDark.style.display="none";
//   }
//   dark.addEventListener( 'change', function() {
//     localStorage.setItem('dark',this.checked);
//     if(this.checked) {
//          body.classList.add('active-dark')
//     } else {
//          body.classList.remove('active-dark')     
//     }
// });

// }

//    light&& dark
