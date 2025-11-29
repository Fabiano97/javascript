
let x = 10;
x = 'uma string';

let msg = 'uma string';
console.log(msg);

console.log('2' * 2);

function test(){
    console.log(this);
}
const test2 = () => {
    console.log('teste2');
    console.log(this);
}

test();

const obj = {
    n: 1,
    test,
    test2
};
obj.test();
