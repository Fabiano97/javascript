function somar(){
    console.log(arguments);
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
console.log(somar.name);

console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 5, 8));
console.log(somar(1, 2, 3, 9, 15, 22, 35));