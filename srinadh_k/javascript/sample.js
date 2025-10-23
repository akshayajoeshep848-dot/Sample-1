
// let a = [22,34,54,23,87,99,123,345]
// let b = new Array(1,2,3,4,5,6)
// console.log(a[0])
// console.log(b)


//Array methods

// a.push(100)
// console.log(a)
// a.unshift(1000)
// console.log(a)

// b.shift()
// console.log(b)
// b.pop()
// console.log(b)

// a.splice(1,2)
// console.log(a)
// a.splice(1,0,100,200,300)
// console.log(a)
// s = a.slice(1,4)
// console.log(s)
// console.log(s.length)


// let a = [22,34,54,23,87,99,123,345,99]
// console.log(a.indexOf(99))
// console.log(a.lastIndexOf(22))
// console.log(a.includes(22))
// a.fill(0,1,5)
// console.log(a)

// for(let i=0 ; i<a.length;i++){
//     console.log(a[i] * 2)
// }
// console.log(("------------------"))

// for(let i of a){
//     console.log(i)
// }
// function add(a,b){
//       return a+b;
//     }
//     function sub(a,b){
//       return a-b;
//     }
//     function mul(a,b){
//       return a*b;
//     }
//     function calc(a,b,h){
//         return h(a,b);
//     }
//     console.log(calc(10,20,sub));
//     console.log(calc(10,20,mul));
//     console.log(calc(10,20,add));

// function areaCircle(radius){
//     return Math.PI*radius*radius;

// }
// function squareArea(side){
//     return side*side;

// }
// function triangleArea(side){
//     return (Math.sqrt(3)/4)*side*side;

// }
// function calc(a,callback){
//     console.log(callback(a)); 
// }

// calc(5,triangleArea);

// fetch("https://catfact.ninja/fact")
// .then((res) =>res.json())
// .then((txt) => console.log(txt))
// .catch(()=>console.log("api failed"));


// async function getCatfact(){
//    const data= await fetch("https://catfact.ninja/fact")
// //    console.log(data)
//    const txt= await data.json()
//    console.log(txt)


// }getCatfact();


























// (function () {
//   console.log("IIFE executed immediately!");
// })()

// arrow functions
// let add = (a,b)=>{
//     return a+b
// }
// console.log(add(100,200))

//fuction expression
// let add = function(a,b){
//     return a+b
// }
// console.log(add(10,30))




// function add(a,b){
//     return (a+b)
// }

// let x = 20;
// let y = 30;
// console.log(add(x,y))




// function add(a,b){
//     console.log(a+b)
// }

// let x = 20;
// let y = 30
// add(x,y)

// function add(){
//     let a = 10;
//     let b = 20;
//     return a+b
// }

// console.log(add())


// function add(){
//     let a = 10;
//     let b = 20;
//     console.log(a+b)
// }

// add()