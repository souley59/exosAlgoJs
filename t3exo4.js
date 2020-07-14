

console.log(" tableau contenant neuf notes à saisr : ");

let tableau = ['A', 'B', 'C', 'D', 'E', 'F'];
tableau;
console.table(tableau);
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Entrez le premier nombre! ', (answer1) => {
    rl.question('Entrez le deuxieme nombre! ', (answer2) => {
        rl.question('Entrez le troisieme nombre! ', (answer3) => {
            rl.question('Entrez le quatrieme nombre! ', (answer4) => {
                rl.question('Entrez le cinquieme nombre! ', (answer5) => {
                    rl.question('Entrez le sixieme nombre! ', (answer6) => {
                        rl.question('Entrez le septieme nombre! ', (answer7) => {
                            rl.question('Entrez le huitieme nombre! ', (answer8) => {
                                rl.question('Entrez le neuvieme nombre! ', (answer9) => {
    let n1 = parseInt(answer1);
    let n2 = parseInt(answer2);
    let n3 = parseInt(answer3);
    let n4 = parseInt(answer4);
    let n5 = parseInt(answer5);
    let n6 = parseInt(answer6);
    let n7 = parseInt(answer7);
    let n8 = parseInt(answer8);
    let n9 = parseInt(answer9);


    let tableau2 = [n1, n2, n3, n4, n5, n6, n7, n8, n9];
    tableau;

    console.table(tableau2);

    let somme = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9

    console.log("la somme des valeurs du tableau est:"+ somme );
rl.close();
    });
});
});
});
});
});
});
});
});

/*Exercice 4
Ecrivez un algorithme calculant la somme des valeurs d’un tableau 
(on suppose que letableau a été préalablement saisi).

//exercice 4 série 3
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somme = 0;
/* tab.map(element => {
    somme += element;
}); */
/* for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
} 
function reducer(accumulator, currentValue) {
    return accumulator + currentValue;
  }
  somme = tab.reduce(reducer);
  console.log(somme); (modifié) 

*/