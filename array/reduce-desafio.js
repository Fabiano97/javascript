
const numeros = [1, 3, 4, 1, 4, 5, 3, 8, 9];
let numerosPorOrdem = numeros.reduce(function(numerosPorOrdem, numeroAtual){
    if(numerosPorOrdem.indexOf(numeroAtual) < 0){
        numerosPorOrdem.push((numeroAtual));
    }
    return numerosPorOrdem;
}, []);
console.log(numerosPorOrdem);