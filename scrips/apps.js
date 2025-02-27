document.getElementById('menu-icon').addEventListener('click', function(){

    let menu = document.getElementById('menu', 'menu2');

    if (menu.style.display === 'block') {

        menu.style.display = 'none';

    }else{

        menu.style.display = 'block';
    }
});


