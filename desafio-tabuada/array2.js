(function(){
    'use strict';

    const person = {
        nomes: 'Maria',
        idade: 28,
        email: 'ela@server.com',
    };
    console.log(person);

    for(let prop in person){
        console.log(prop);
        console.log(person[prop]);
    }

}());