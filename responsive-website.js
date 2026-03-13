    let dropdown_box = document.querySelector('.dropdown-box');
    let menuIcon = document.querySelector('.action-buttons .bars');
    let navBar = document.querySelector('.nav-bar');
    let isActive = false;

    menuIcon.onclick = function(){
        if (isActive){
            dropdown_box.classList.remove('active');
            menuIcon.src = 'images/bars-solid.png';
            isActive = false;
        }
        else{
            dropdown_box.classList.add('active');
            menuIcon.src = 'images/xmark-solid.png';
            isActive = true;
        }
        
    }

    
    document.onscroll = function(){
        let scroll_position = window.scrollY;
        if (scroll_position > 100){
            navBar.style.backgroundColor = 'black';
        }
        else{
            navBar.style.backgroundColor = 'transparent';
        }
    }

 
   