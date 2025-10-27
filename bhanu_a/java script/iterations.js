// for...of
// to iterate through arrays

let array = [1,2,3,4,5];

for (let a of array) {
    console.log(a);
}

//for ... in
// to iterate through objects
let student ={
    name: "Bhanu",
    location: "Hyderabad",
    age: 25,
    company: "LogicWhile",
    marks:[98,89,78,68]

};

for (let a in student) {
    console.log('${a}: ',student[a]);

}
