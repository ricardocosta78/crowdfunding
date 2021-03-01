// VARIAVEIS

let button = document.querySelector('#button');
let book = document.querySelector('#book');
let btnBook = document.querySelector('#btn-book');
let image = document.querySelector('#image');
let circle = document.querySelector('#circle1');
let path = document.querySelector('#path');
let close = document.getElementById('close');
let hidden = document.querySelector('.hidden');
let buttonModal = document.querySelectorAll('.button-modal');
let modal = document.querySelector('.main-project-modal');
let overlay = document.querySelector('.overlay');
let modalMain = document.querySelector('.modal');
// EVENTS


button.addEventListener('mouseover',function(){
    book.style.color = "rgb(20, 123, 116)";
    circle1.style.fill= "var(--darkCyan)";
    path.style.fill= "var(--white)";
    btnBook.style.color = "rgb(20, 123, 116)"
});
button.addEventListener('mouseout',function(){
  book.style.color = "var(--black)"
    btnBook.style.color = "var(--black)"
    circle1.style.fill= "#000000";
    path.style.fill  = "#B1B1B1";
});
buttonModal.forEach(element => {
  element.addEventListener('click', function(){
    modalMain.classList.add('show');
    });
  });
close.addEventListener('click', function(){
    modalMain.classList.remove('show');

  });