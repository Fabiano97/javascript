(function(){
    'use strict';
function midNumber(){
    let total = 0;
    let qtd = arguments.length;
    for(let i = 0; i < qtd; i++){
        if(typeof arguments[i] !== 'number'){
            throw Error('only numbers');
        }
        total += arguments[i];
    }
    return (total / qtd) || 0;
}

let mid = midNumber();
console.log(mid);

}());