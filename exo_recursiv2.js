// Exercice 2 Ecrire un algorithme qui permet de calculer la somme de 1 à n en utilisant la récursivité

let n = 0;

function somme(n) {
    if (n === 1) {
        return n;
    } else {
        return (n + somme(n -1)) ;
    }
}

console.log(somme(3));







/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Entrez un nombre: ', (answer1) => {
    let d = parseInt(answer1)
    
    


        console.log('voici le calcul des sommmes de chaque entier en demarrant de un a votre saisie');

    rl.close();


    let n = 1;
function calcul(n){
    
    if (n < d) {

        return n;
    }else {

        console.log(n);
        return  calcul(n+(n+1));

        
    }
    
}


console.log(calcul(n));

});*/