let n = [15, 8, 6, 11, 9, 10, 2];
let reducer = (accumulator, currentValue) => accumulator + currentValue;
let t = n.reduce(reducer);
let m = parseFloat(t / n.length);

function dessus_moyenne(n) {
    return n >= m;
}
let r = n.filter(dessus_moyenne);
/*//ex8S3
const tab = [10, 2, 13, 14, 15, 16, 7, 18, 19, 10];
let moyenne = tab.reduce((total, element) => total + element)/tab.length;
const tabSupMoy = tab.filter(element => element > moyenne);
console.log('La moyenne de la classe est de: ' + moyenne);
console.log('Les notes supérieure à la moyenne sont: ' + tabSupMoy.join('|'));*/
console.log("la moyenne de la classe est de: "+ m)
console.log(" les notes au dessus de la moyenne de la classe sont: "+ r);