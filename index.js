// question 1 solution :-

const input = { a: 1, b: 2, c: 3 };
const output = Object.entries(input).map(([key, value]) => ({ [key]: value }));
console.log(output); // [{ a: 1 }, { b: 2 }, { c: 3 }]


// question 2 solution :- 

const input1 = [{ a: 1 }, { b: 2 }, { c: 3 }];
const output1 = {};
input1.forEach(obj => Object.assign(output1, obj));
console.log(output1); // { a: 1, b: 2, c: 3 }
