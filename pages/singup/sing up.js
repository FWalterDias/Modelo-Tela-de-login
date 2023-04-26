const form = document.querySelector('form');
const nome = document.querySelector('#name');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const strong = document.querySelector('strong');
const span = document.querySelector('span');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    event.stopPropagation();

    if(!nome.value || !email.value || !senha.value){
        strong.textContent = 'Peencha todos os campos acima!';
        return;
    };

    strong.style.color = 'green';
    strong.textContent = 'Cadastro realizado com sucesso!';
    window.location = '../../index.html';
});

span.addEventListener('click', (event)=>{
    event.stopPropagation();

    window.location = '../../index.html';
})