console.log("calcule la somme .∑ni=oi3 : ");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Entrez un entier! ', (answer) => {
    let entier = parseInt(answer);
   let resultat = 0;
    for (let i = 1; i <= entier; i++) {
        resultat += Math.pow(i, 3);
    }
    console.log("la somme calculé est: " + resultat);


    rl.close();
});

/* Exercice 11Ecrire un algorithme qui demande un entier, calcule et affiche la somme .∑ni=oi3

function sommeAlgo(n, debut) {
    let resultat = 0;
    for (let i = debut; i <= n; i++) {
        resultat += Math.pow(i, 3);
    }
    console.log(resultat);
}
sommeAlgo(2,0);


*/
