(function(){
    'use strict';

    const arr = new Array();
    const arr2 = new Array(true, 'Fabiano', 25, new Array(2, 4, 10));

    const arr3 = ["Fabiano", 40, [3, 6, 9], true]
    arr3[4] = 'a';
    arr3[arr3.length] = 'b' ;
    arr3.push('push');
    arr3.push('a', 'b', 'c');

    console.log(arr3);
    console.log(arr3[2]);
    console.log(arr3[2][0]);
    let n = 6;
    console.log(arr3[n]);

}());