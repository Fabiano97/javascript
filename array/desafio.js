function sum(){
    //let numbers = Array.from(arguments);
    const numbers = [...arguments];
    return numbers.reduce(function(sum, atual){
        return sum + atual;
    }, 0)
}
console.log(sum(1, 2, 3, 4, 5));

function avarege(){
    return sum(...arguments) / arguments.length;
}
let media = avarege(1, 2, 3, 4, 5);
console.log(media);