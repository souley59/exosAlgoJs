let t = [4,67,3,1000,7,9000,2,1,0];
console.table("lecture du tableau t: " + t);
console.log("le nombre d'element est de: " + t.length);
let A =t.length-2
t.sort((a, b) => a - b);

let rev = t.reverse();
console.table("tableau trié par ordre décroissant: "+ rev);
let deux_g = rev[1];
console.log(" le deuxieme plus grand nombre est: " + deux_g);
let deux_p = rev[A];
console.log(" le deuxieme plus petit nombre est: " + deux_p);
