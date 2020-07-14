/*
console.log("deviner les nombres entiers du tableau : ");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); */

var array = [];

for (i = 0; i < 4; i++) {
  array[i] = Math.floor(Math.random() * 60);
}
console.log(array);
console.log('proposer les quatres nombres du tableau! ');


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Entrez votre premier chiffre: ', (answer1) => {
  rl.question('Entrez votre deuxieme chiffre: ', (answer2) => {
    rl.question('Entrez votre troisieme chiffre: ', (answer3) => {
      rl.question('Entrez votre quatrieme chiffre: ', (answer4) => {
        let un = answer1;
        let deux = answer2;
        let trois = answer3;
        let quatre = answer4;
        let proposition = [un, deux, trois, quatre]

        console.log(" votre proposition est : ");
        console.log(proposition);
        function valeursExist(proposition) {
          
        }

        /*
        import alert from 'alert-node'

        let A = alert(proposition.includes(array.indexOf(0)));
        let B = alert(proposition.includes(array.indexOf(1)));
        let C = alert(proposition.includes(array.indexOf(2)));
        let D = alert(proposition.includes(array.indexOf(3)));
        let result = proposition.filter(word => word());
        console.log(result);*/
        rl.close();
        //;

      });
    });
  });
});

  //let ecrit = parseInt(answer1);      



