console.log(" Résultat étudiant : ");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez la note sur 20 du module à l'ecrit! ", (answer1) => {
    rl.question("Entrez la note sur 20 du module à l'orale! ", (answer2) => {
      let ecrit = parseInt(answer1);
      let oral = parseInt(answer2);
       
 note = ((ecrit * 2) + oral)/3;

 console.log(" votre note est de "+ note);

 if (note > 10 || note == 10){
    console.log(" votre module est validé ");
 }else{
     console.log("votre module est invalidé ");
 }
rl.close();
});
});

/* Exercice 9Ecrire un algorithme qui permet de donner le résultat d'un étudiant
 à un module sachant quece module est sanctionné par une note d'oral de coefficient 1
  et une note d'écrit decoefficient 2. 
  La moyenne obtenue doit être supérieure ou égale à 10 pour valider le module. */
