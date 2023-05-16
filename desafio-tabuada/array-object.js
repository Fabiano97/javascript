(function(){
    'use strict';

    /*const name = ["Fabiano", "Maria", ""];
    const person = {nome: 'Fabiano', idade: 25, email: ""};
    const person1 = {};*/

    const people = [{
        nome: 'Fabiano',
        idade: 25
    }, {
        nome: 'Maria',
        idade: 32
    }, {
        nome: 'João',
        idade: 20
    }, {
        nome: 'Rafaela',
        idade: 46
    }];
    
    for(let i = 0; i < people.length; i++){
        console.log(`${people[i].nome} possui ${people[i].idade} anos.`);
    }

}());