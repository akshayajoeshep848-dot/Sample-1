// console.log("srinadh");
// //  alert("srinadh");
// //  prompt()
// var a=0.2;
// let b=0.3;
// const pi=3.142;
// console.log(a)
// console.log(b)
// console.log(pi)

// a=10
// b=20
// pi=4
// console.log(a)
// console.log(b)
// console.log(pi)

// const c="srinadh"
// console.log(c)

// var a=20;

// console.log(b)
// console.log(a)

// let num1=20;
// let num2;
// var num3;
// var num4 =10;
// console.log (num1,num2,num3,num4)
// num2=25;
// num3=35;
// console.log(num1,num2,num3,num4)
// let a=10;
// console.log(typeof a)

// let b="hi"
// console.log(typeof b)
// let c = true
// console.log(typeof c)

// let d;
// console.log(typeof d)

  
// utf-8
// let num=[1,2,3,4];
// let result=num.map(x => Math.sqrt(x));
//  console.log(num);
//  console.log(result);

fetch("https://dogapi.dog/api/v2/breeds")
.then((res)=>res.json())
.then(txt=>console.log(txt))
.catch(()=>console.log("api failed"));