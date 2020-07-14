
/*
let t = [20, 230, 36, 23, 5, 23, 89, 23];

function pair(toto){
    return toto%2==0;

}
function impair(tata){
    return tata%2!==0;
}
let tri_pair = t.filter(pair);
let tri_impair= t.filter(impair);


console.log("le nombre d'entier pair est de:", tri_pair.length);
console.log("le nombre d'entier impair est de:", tri_impair.length);
 */



const array = [3, 4, 9, 11];
const odd = array.filter(element => element % 2).length;
const even = array.length - odd;

console.log("Il y a " + even + " chiffre paire dans votre tableau.");
console.log("Il y a " + odd + " chiffre impaire dans votre tableau.");