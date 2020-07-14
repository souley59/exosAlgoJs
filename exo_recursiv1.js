// Ecrire un algorithme qui permet d’afficher les 100 premier entier naturel en utilisant la récursivité

function cent (n){
    if (n===100){
        return n;
    }else{
console.log(n);

      return cent(n+1) 
    }
}
console.log(cent(0));
