function myBlockScopeFunction(){
    let outerBlockvar ="Outer";
 if (true) {
    let innerBlockerVar = "Inner with let";
    const innerConstVar = "Inner with const";
    console.log(innerBlockerVar); //Accessible
    console.log(innerConstVar); // Accessible
    console.log(outerBlockvar); // Accessible
 }

 console.log(innerBlockerVar);
 console.log(innerConstVar);
 console.log(outerBlockvar);
}


{
let blockvar = "Inside standalone block";
console.log(blockvar);

}
console.log(blockvar);