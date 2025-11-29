let arr = [1, 3, 5, 7, 9];

let teste = arr.push(11, 13, true, 'hello world');
console.log(teste);
console.log(arr);

let lastItem = arr.pop();
console.log(lastItem);
console.log(arr);

let firstItem = arr.shift();
console.log(firstItem);
console.log(arr);

teste = arr.unshift(4, 5, 6);
console.log(teste);
console.log(arr);

let arr2 = arr.slice(5);
console.log(arr2);
console.log(arr);

let arr3 = arr.splice(2, 4, 'hello world', 10, 100, 1000);
console.log(arr);
console.log(arr3);