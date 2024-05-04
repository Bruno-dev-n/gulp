const container=document.querySelector('.container')
const header=document.querySelector('header')
const footer = document.querySelector('footer');
const footerContainer = footer.querySelector('.container'); 
const navbar=document.querySelector('#navbar')
const navbarli =navbar.querySelectorAll('li');

document.getElementById('dark-mode-toggle').addEventListener('click', function (event) {
    event.preventDefault();
    document.body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    footerContainer.classList.toggle('dark-mode');
    navbarli.forEach(function(li) {
        li.classList.toggle('dark-mode');
    });
});
