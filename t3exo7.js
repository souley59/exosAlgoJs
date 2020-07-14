let t1 = [104, 500, 89, 45];
let y = 0;
let s = 0;

s   = Math.max(...t1);
y = t1.indexOf(s);

/* for (let i = 0; i < tab.length; i++) {
    if(tab[i] > max) {
        max = tab[i];
        indexmax = i;
    }
} */

console.log("la plus grande valeur du tableau est: "+ s);
console.log("son rang est: "+ y);