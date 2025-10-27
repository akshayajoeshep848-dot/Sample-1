const list =[1,2,4,5,3,6,8]

let sumValue = 0;
let multipleValue = 1;
let divisionValue = 1;
let subtractionValue = 0;
let remainderValue =1;

for (let i = 0; i < list.length; i++) {
    sumValue += list[i];
    subtractionValue -= list[i];
    multipleValue *= list[i];
    divisionValue /= list[i];

}
remainderValue %= list[3];


console.log(sumValue);
console.log(subtractionValue);
console.log(multipleValue);
console.log(remainderValue);
console.log(divisionValue);
