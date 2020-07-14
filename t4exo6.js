let t =[20,23,36,'23',5,23,89,23];
let tx=[];
let x= 23;

var ntx = t.indexOf(x);
while (ntx !== -1) {
  tx.push(ntx);
  ntx = t.indexOf(x, ntx + 1);
}
console.log(tx.length);   
    

