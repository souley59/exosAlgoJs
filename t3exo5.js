let t1 = [4, 5, 9, 45];
let t2 = [ 34, 9 , 3 , 1];
let t3= [];

for (i=0; i<t1.length;i++){
t3.push(t1[i]+t2[i]);//t3[i]=t1[i]+t2[i];
/*tab1.map((element, i) => {
    tab3[i] = element + tab2[i];
});*/
}
console.table(t3);