
 const tab1 = [1, 4, 5, 2];
 const tab2 = [2, 8, 6, 3];
 let n = 0;
 let i = 0
 function scal(i) {
     if (i < tab1.length) {
         n += tab1[i] * tab2[i];
         return scal(i + 1);
     } else /*if (i >= tab1.length) */{
        return n;
     }
 } 
 console.log(scale(i));


//});
 /* Exercice 2Ecrire un algorithme qui permet de calculer 
 //le produit scalaire de deux vecteurs en utilisant la récursivité 

 function scalaire(vect1,vect2){
     if(vect1.length !== vect2.length){
         return null;
 }
 if(vec1.length ===1 && vect2.length === 1){
     return vect1[0] * vect2[0];
 }
 return vect1.pop()*vect2.pop()+ scalaire(vect1, vect2);
}
console.log(scalaire(vect1,vect2));
 
 */