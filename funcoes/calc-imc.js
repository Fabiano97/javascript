(function(){
    /*
    Muito abaixo do peso - 16 a 16,9 kg/m²
    Abaixo do peso - 17 a 18,4 kg/m²
    Peso normal - 18,5 a 24,9 kg/m²
    Acima do peso - 25 a 29,9 kg/m²
    Obsidade GrauI - 30 a 34,9 kg/m²
    Obsidade GrauII - 35 a 40 kg/m²
    Obsidade GrauIII - maior que 40 kg/m²
    */
    'use strict';

    function calcIMC(peso, altura, callback){
        if(peso === undefined || altura === undefined){
            throw Error('need two parameters: weight and height');
        }
        let imc = peso / (altura * altura);
        if(typeof callback === 'function'){
            return callback(imc);
        }
        return imc;
    }

    function classIMC(imc){
        if(imc <= 16.9){
            return 'Muito abaixo do peso';
        }else if(imc <= 18.4){
            return 'Abaixo do peso';
        }else if(imc <= 24.9){
            return 'Peso normal';
        }else if(imc <= 29.9){
            return 'Acima do peso';
        }else if(imc <= 34.9){
            return 'Obsidade 1';
        }else if(imc <= 40){
            return 'Obsidade 2';
        }else{
            return 'Obsidade 3';
        }
    }

    let imc = calcIMC(60, 1.65);
    let imc2 = calcIMC(60, 1.65, classIMC);

    console.log(imc);
    console.log(imc2);
}());