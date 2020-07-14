
/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entrez le nombre de valeurs à saisir! ', (answer1) => {
  
  rl.question('saisir vos valeurs! ',(answer1) => {
    let nb = parseInt(answer1);*/
    let t = [1, -2, 3, -4, -5, -6, 7, -8];
    let nbpos = 0;
    let nbneg = 0;
console.log('Vous avez saisi ' + t.length + ' valeurs dans le tableau\n');



    for (let i = 0; i < t.length; i++) {
      if (t[i] > 0) {
          nbpos++;
      }
      else {
          nbneg++;
      }
    }
    console.log('Vous avez saisi ' + nbpos + ' valeurs positives.');
console.log('Vous avez saisi ' + nbneg + ' valeurs negatives.');

    

/* Exercice 3
Ecrivez un algorithme permettant à l’utilisateur de saisir un nombre quelconque de valeurs,
qui devront être stockées dans un tableau. L’utilisateur doit donc commencer par entrer 
le nombre de valeurs qu’il compte saisir. Il effectuera ensuite cette saisie. 
Enfin, une fois lasaisie terminée, le programme affichera le nombre de valeurs négatives 
et le nombre devaleurs positives 

Variables Nb, Nbpos, Nbneg en Numérique
Tableau T() en Numérique
Debut
Ecrire "Entrez le nombre de valeurs :"
Lire Nb
Redim T(Nb-1)
Nbpos ← 0
Nbneg ← 0
Pour i ← 0 à Nb - 1
  Ecrire "Entrez le nombre n° ", i + 1
  Lire T(i)
  Si T(i) > 0 alors
    Nbpos ← Nbpos + 1
  Sinon
    Nbneg ← Nbneg + 1
  Finsi
i Suivant
Ecrire "Nombre de valeurs positives : ", Nbpos
Ecrire "Nombre de valeurs négatives : ", Nbneg */