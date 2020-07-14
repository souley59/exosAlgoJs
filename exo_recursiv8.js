//Exercice8 Ecrire un algorithme qui permet de chercher une valeur dans un tableau ordonné en utilisant la récursivité

let tableau = [1, 3, 4, 6, 8,9];

function search(tab,val) {
    
    if (tab.length === 1) {
        return tab[0]===val;
    } 

    console.log(tab[0]);
    
        return tab.shift() === val || search(tab,val);
        
    }
    console.log(search([...tableau],4));
    

