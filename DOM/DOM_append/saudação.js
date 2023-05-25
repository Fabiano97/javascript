(function(){
    'use strict';

    const userName = 'Fabiano';
    if(userName){
        const topBarElement = document.createElement('div');
        topBarElement.className = 'top-bar';
        topBarElement.innerHTML = `<p> Olá, <b> ${userName} </b> </p>`;

        //elementDad.insertBefore(newElement, elementReference);

        const elementDad = document.querySelector('.hero');
        elementDad.insertBefore(topBarElement, elementDad.firstChild);

    }

}());