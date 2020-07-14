// ex10 soit a deux dimensions (n,m) préalablement rempli de valeurs numériques. écrire l'algo qui recherche la plus grde valeur au sein de ce tableau
let n = [1, 1056, 7, 90];
let m = [4, 67, 3, 1000, 7, -9000];
let t = [n, m];

let valeur_max = Math.max(Math.max(...m), Math.max(...n));

console.log("la valeur max du tableau t est: " + valeur_max);

