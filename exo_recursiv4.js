/* Exercice 4 Ecrire un algorithme qui permet de calculer la somme des chiffres d’un nombre donné en utilisant la récursivité.
Exemple: Pour 34 le résultat est 7 */

let n = (654);

let fraction = (n).toString(n.length).split("").map(function (t) { return parseInt(t) }); //  fractionnement du nombre

let f = fraction.length
let u = fraction[f];

function somme(u) {
    // This is the base case.
    if (f === 1) {
        return u;
        
        // This is the recursive one.
    } else {
        fraction[f]+fraction[f-1]
        return u + somme(f - 1);
    }
} 
console.log(somme(u));
