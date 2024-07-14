let botaoMenu = document.getElementById("btn-menu");
let botaoMenuMobile = document.getElementById('btn-menu-mobile');
let overlay = document.getElementById('overlay-menu')

botaoMenu.addEventListener('click', ()=>{
    botaoMenuMobile.classList.add('abrir-menu')
});

botaoMenuMobile.addEventListener('click', ()=>{
    botaoMenuMobile.classList.remove('abrir-menu')
});

overlay.addEventListener('click', ()=>{
    botaoMenuMobile.classList.remove('abrir-menu')
});
