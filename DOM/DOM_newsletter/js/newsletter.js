
    'use strict';

    const txtEmail = document.getElementById('txtEmail');
    const msgFeedback = document.getElementById('newsletterFeedback');

    function registerEmail(){
        let email = txtEmail.value // email = ''
        msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso!`;
    }
    

