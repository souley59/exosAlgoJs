let v1 = [2, 1, 4, 3];
let v2 = [1, 3, 5, 10];
let v = [];
let reducer = (accumulator, currentValue) => accumulator + currentValue;

for (let i = 0; i < v1.length; i++) {
    v.push(v1[i] * v2[i]);
}
let r = v.reduce(reducer);

console.log(r);