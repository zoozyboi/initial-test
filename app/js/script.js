var counter = 1;
 setInterval(function(){
    document.getElementById('rd' + counter).checked = true;
    counter ++;
    if(counter > 4) {
        counter = 1;
    }
 }, 3000);
 const btnTop = document.getElementById('btnTop');

 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
     if(document.body.scrollTop > 400 || document.documentElement > 400) {
         btnTop.style.display="block";
     }
     else {
         btnTop.style.display = "none";
     }
 }

 btnTop.addEventListener('click', function(){
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 });

 //hamburger menu
 const menu = document.querySelector('.hamburger');
const nav = document.querySelector('nav')
const fadesElem = document.querySelectorAll('.has-fade');

menu.addEventListener('click', function(){
    // menu.classList.toggle('open');
    if(menu.classList.contains('open')) {
        menu.classList.remove('open')
        fadesElem.forEach(function(elements){
            elements.classList.remove('fade-in');
            elements.classList.add('fade-out');
        })
    }
    else {
        menu.classList.add('open');
        fadesElem.forEach(function(elements){
            elements.classList.remove('fade-out')
            elements.classList.add('fade-in');
        })
    }
});
