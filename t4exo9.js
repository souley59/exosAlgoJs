 /*   
let t =[0,1];
let cent = 100;

for (let i= 0; i<= cent; i++) {
    
   t[i]= t[i-1]+t[i+1];
      
}
console.table(t)
*/
let t =[0,1];
let cent = 100;

for ( i= 2; i<= cent; i++) {
    
   t[i]= t[i-1]+t[i-2];
      
}

console.table(t)
