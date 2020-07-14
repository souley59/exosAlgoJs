/*
var t = ["h", "e", "l", "l", "o"];
var t2 = t.splice(0, 4,);
var t3 = t2.splice(0,0,"o")
console.log(t2);

*/
const str = "hello";
const tab =[...str];
const [a,...tab2]=tab;

console.log(...tab2);
