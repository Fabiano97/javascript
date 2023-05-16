(function(){
    'use strict';

    const produto = {
        nome: 'caneta',
        qtd: 10,
        comprar(n){
            console.log(this);
            if(n > this.qtd){
                return 'Quantidade não disponível';
            }
            this.qtd -= n;
        }
    };
    produto.comprar(3);
    console.log(produto);

    produto.comprar(13);
    console.log(produto);


}());