console.log("Entrez votre genre (M/F) ainsi que votre age : ");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Entrez votre genre, M ou F! ', (answer1) => {
  rl.question('Entrez votre age! ', (answer2) => {
    let sex = answer1;
    let age = answer2;

    if (sex == "M" && age > 20 || sex == "F" && age > 18 && age < 35) {

      console.log(" vous êtes imposable! ");
    } else {
      console.log(" vous êtes non imposable! ");
    }

    rl.close();
  });
});
/* Exercice 7 Les habitants de paris paient l’impôt selon les règles suivantes :
●les hommes de plus de 20 ans paient l’impôt
●les femmes paient l’impôt si elles ont entre 18 et 35 ans
●les autres ne paient pas d’impôt
Le programme demandera donc l’âge et le sexe du parisien,
et se prononcera donc ensuitesur le fait que l’habitant est imposable.

Variable sex en Caractère
Variable age en Numérique
Variables C1, C2 en Booléen
Début
Ecrire "Entrez le sexe (M/F) : "
Lire sex
Ecrire "Entrez l’âge: "
Lire age
C1 ← sex = "M" ET age > 20
C2 ← sex = "F" ET (age > 18 ET age < 35)
Si C1 ou C2 Alors
  Ecrire "Imposable"
Sinon
  Ecrire "Non Imposable"
*/
