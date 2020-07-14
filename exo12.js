console.log(" resultat de la multiplication de deux nombres par additions : ");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entrez le premier nombre! ', (answer1) => {
    rl.question('Entrez le deuxieme nombre! ', (answer2) => {
        let n1 = parseInt(answer1);
        let n2 = parseInt(answer2);
        let multi = "";
        console.log(" la multiplication des deux nombres par addition est: ")
        for (let i = 1; i <= n1; i++){

            multi = i * n2; 
        console.log( multi);
        
        }
        rl.close();
    });
});
/* Exercice 12Donnez le résultat de la multiplication de deux nombres en ne faisant que des additions. */