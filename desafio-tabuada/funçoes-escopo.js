(function(){
    'use strict';

    let n = 'global';

    function mostrarN(){
        let n = 'local';
        console.log('valor de n: ' + n);
    }

    mostrarN();
    console.log('valor de n no escopo global: ' + n);

}());