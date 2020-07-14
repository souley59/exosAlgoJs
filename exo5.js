function article(Narticle,prixHt,TVA) {
    let prixttc=Narticle*prixHt*(1+TVA);
console.log( "Les " + Narticle + " articles, au prix hors taxe de " + prixHt + " avec une tva de " + TVA + " sont vendu au prix ttc de " + prixttc + " €");
}
article(1,10,5);
/* Exercice5 Ecrire un programme qui lit le prix HT d’un article, 
le nombre d’articles et le taux de TVA, etqui fournit le prix total TTC correspondant.
 Faire en sorte que des libellés apparaissentclairement. (TTC=NA*HT*(1+TVA)) 
const HT = 20;
const NA = 15;
const TVA =0.2;

function total() {
    return NA*HT*(1+TVA);
}
console.log
 */
