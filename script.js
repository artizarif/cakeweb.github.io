let searchBtn = document.querySelector('#search-btn');
let searchBox = document.querySelector('.search-box');

searchBtn.onclick = () =>{
    searchBox.classList.toggle('active')
    searchBtn.classList.toggle('active')
    navbar.classList.remove('active')
    menuBtn.classList.remove('fa-times')
}



let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuBtn.onclick = () =>{
    navbar.classList.toggle('active')
    menuBtn.classList.toggle('fa-times')
    searchBox.classList.remove('active')
    searchBtn.classList.remove('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
    menuBtn.classList.remove('fa-times')
    searchBox.classList.remove('active')
    searchBtn.classList.remove('active')
}