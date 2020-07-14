let t=[5,-6,-96,-23,65,89,5,-30];
/*
function neg(n){
    return n<=0;

}
function pos(p){
    return p>0
}
*/
let tri_neg = t.filter(/* fonction si dessus*/n=> n>0 );
let tri_pos= t.filter(/* fonction si dessus*/n=> n<0);
let nem=tri_neg.length;
let vmen = tri_neg.reduce((total, element) => total + element)/tri_neg.length;
let vmep = tri_pos.reduce((total, element) => total + element)/tri_pos.length;
 console.log( "la valeur moyenne negative est: " + vmen);
 console.log( "la valeur moyenne positive est: " + vmep);