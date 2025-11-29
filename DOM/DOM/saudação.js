(function(){
    'use strict';

    const userName = '';
    const element = document.querySelector('.top-bar p');

    if(userName){
        //document.querySelector('.top-bar p').textContent = 'Bem-vindo(a), ' + userName;
        console.log(element.textContent);
        //element.textContent = element.textContent + userName;
        element.innerHTML += '<b>' + userName + '</b>';
    } else{
        //element.parentElement.style.display = 'none';
        //element.remove();
        const elementToRemove = element.parentElement;
        elementToRemove.parentElement.removeChild(elementToRemove);
    }

    console.log(element);
    

}());