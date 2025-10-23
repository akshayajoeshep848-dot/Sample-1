// function add(a,b){
//     return a+b
// }
// console.log(add(2,3));
// console.log(add(-5,7));
// console.log(add(4,3));

// function even(a){
//     if (a%2==0){
//         // console.log("true")
//         return true
//     }else{
//         // console.log("false")
//         return false
//     }
    
// }
// console.log(even(5));

// let m=function max(a,b,c){
//     if (a>b && a>c){
//         return a
//     } 
//     else if (b>c && b>a){
//         return b
//     }else{
//         return c
//     }
    
// }
// console.log(m(10,10,20))


// function square(a,b=2){
//     return a**b
// }
// console.log(square(10))

// function prime(a){
//     if (a/a)
// }

function isPrime(n){
    let c = 0
    for(let i=1;i<=n;i++){
        if(n%i==0){
            c+=1
        }
    }
    if(c==2){
        return true
    }
    else{
        return false
    }
}
console.log(isPrime(11))
console.log(isPrime(13))
console.log(isPrime(12))

