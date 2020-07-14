//Exercice 6Ecrire un algorithme qui permet de calculer le factoriel d’un entier en utilisant la récursivité.
let n = 1;

function somme(n) {
    if (n > 1) {
        return n * somme(n - 1);
    } else {
        return n ;
    }
}
console.log(somme(15));