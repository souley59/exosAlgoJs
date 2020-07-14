//Exercice5 Ecrire un algorithme qui permet de calculer le ​PGCD​ de deux nombres entier en utilisant la récursivité

function pgcd(a,b){
    return  a>b && pgcd(a-b, b)|| a< b && pgcd(a,b-a) || a===b && a ; } //Et avec l'opérateur modulo : function pgcd(a,b){ return a>b && a%b>0 && pgcd(b,a%b) || (b>a)&& pgcd(b,a) || a%b===0 && b ;
    
 
    console.log(pgcd(12,3));
/*
  function pgdc(a,b) {
      if (b = 0){
          return a 
      } else{
          r =(a/b)

      }
      
  } */
/*

long pgcd (long a, long b) {
    long r;
    
    while (1) {
      r = a % b;
      if (r == 0)
        return b;
      a = b;
      b = r;
    }
  }*/