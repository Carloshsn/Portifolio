function esconder() {
    document.querySelector('.historico').innerHTML = (" ");
}
esconder();

function menuToggle() {
    let menuArea = document.getElementById("menu-area");

    if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened')
    }

   /* if (menuArea.style.width =='200px') {
        menuArea.style.width = '0px';
    } else {
        menuArea.style.width = '200px';
    }  /* Segunda opção de if e else*/

}