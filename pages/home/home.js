const buttonAdicionar = document.querySelector('.button-Adicionar');
const iconDeletar = document.querySelectorAll('.icon-Deletar');
const logout = document.querySelector('.logout');
const closeDialogIcon = document.querySelectorAll('.close-dialog');
const caixaDialogAdd = document.querySelector('.dialog-add');
const caixaDialogDelete = document.querySelector('.dialog-delete');

logout.addEventListener('click', (event)=>{
    event.stopPropagation();

    window.location = '../../index.html';
});

buttonAdicionar.addEventListener('click', (event)=>{
    event.stopPropagation();

    caixaDialogAdd.showModal();
});

for (const item of iconDeletar) {
    item.addEventListener('click', (event)=>{
        event.stopPropagation();

        caixaDialogDelete.showModal();
    });
}

for (const item of closeDialogIcon) {
    item.addEventListener('click', (event)=>{
        event.stopPropagation();
    
        caixaDialogAdd.close();
        caixaDialogDelete.close();
    });
}

