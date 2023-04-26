const form = document.querySelector('form');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const strong = document.querySelector('strong');
const span = document.querySelector('span');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    strong.textContent = '';

    if (!email.value || !senha.value) {
        strong.textContent = 'Preencha os campos acima!';
        return;
    }

    window.location = 'pages/home/home.html';

});
span.addEventListener('click', (event)=>{
    event.stopPropagation();

    window.location = 'pages/singup/singup.html';
});