console.log("Calcul de la moyenne de la somme des deux chiffres : ");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entrez le chiffre 1! ', (answer1) => {
    rl.question('Entrez le chiffre 2! ', (answer2) => {
      let chiffre1 = answer1;
      let chiffre2 = answer2;
       
 moyenne = (chiffre1 /2) + (chiffre2 /2);
 
 console.log(" la moyenne de la somme des deux chiffres est "+ moyenne);

rl.close();
});
});

    
  
// Exercice 8Écrire un algorithme saisissant 2 variables entières qui calcule et affiche leur moyenne. 

/*
Var

a,b : Entier

moy : Réel

Ecrire  "Saisir a"

Lire  a

Ecrire  " Saisir b"

Lire  b

moy ç(a + b) / 2

Ecrire  "Moyenne=", moy */