function echangeValeurs(A, B, C) {
    D = C;
    C = B;
    B = A;
    A = D;
console.log (A+ " " + B + " " + C);
}
echangeValeurs(5,8,6);

/* Exercice4 On dispose de trois variables A, B et C. 
Ecrivez un algorithme transférant à B la valeur de A, à C la valeur de B et à A la valeur de C. 
D ← C
C ← B
B ← A
A ← D*/