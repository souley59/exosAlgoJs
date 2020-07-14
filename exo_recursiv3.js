// Exercice 3 Ecrire un algorithme qui permet de calculer la suite de Fibonacci en utilisant la récursivité.
let tab = [];
tab = [0, 1];
let i = 2;
let n = 10;
function scale(i) {
    if (i < n) {
        tab[i] = tab[i - 1] + tab[i - 2];
        return scale(i + 1);
    } else {
        return tab;
    }
} console.table(scale(i));



/*function fibo(n) {
    if (n==0) {
	return 1;
    }
    else {
	if (n==1) {
	    return 1;
	}
	else {
	    return fibo(n-1)+ fibo(n-2);
	}
    }
}
console.log(fibo(9));*/
