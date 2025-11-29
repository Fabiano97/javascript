let arr = [1, 2, 3, 4,];
//console.log(arr.reverse());
console.log(arr);

let j = 0;
let soma =  arr.reduce(function(acumulador, atual, i, _arr){
    console.log('i: ', i);
    console.log('j: ', j++);
    console.log('acumulador: ', acumulador, '--- atual: ', atual);
    return acumulador + atual;
}, 0);
console.log(soma);
console.log(arr);
