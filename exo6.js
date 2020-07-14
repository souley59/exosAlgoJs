console.log("Entrez deux nombres : ");


function nombres(a,b){
let c1=(a);
let c2=(b);

    if (c1 > 0 ){
        console.log( " La valeur de " + c1 + " est positive");
    }else{
        
        console.log( " La valeur de " + c1 + " est négative");
     }
     if (c2 > 0 ){
        console.log( " La valeur de " + c2 + " est positive");
    }else{
        
        console.log( " La valeur de " + c2 + " est négative");
     }
}

nombres(-6,-36);



 
/* Exercice6 Ecrire un algorithme qui demande deux nombres à l’utilisateur 
et l’informe ensuite si leurproduit est négatif ou positif 
(on laisse de côté le cas où le produit est nul). 
Attention toutefois :on ne doit pas calculer le produit des deux nombres.
Variables m, n en Entier
Début
Ecrire "Entrez deux nombres : "
Lire m, n
Si (m > 0 ET n > 0)
Alors
  Ecrire "Leur produit est positif"
   OU (m < 0 ET n < 0)
Sinon
  Ecrire "Leur produit est négatif"
Fin */