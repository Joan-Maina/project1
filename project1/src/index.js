//string type of variable
const name = 'joan';
// console.log(name);

//object
const details = {
   age: 22,
   residence: 'Nyeri'
}
// console.log(details);

//array
const hobbies = ['coding', 'reading novels', 'skating', 'solving puzzles']
// console.log(hobbies);

//rest operator
const allDetails = { details, ...hobbies } 
// console.log(allDetails);

//spread operator
const joanDetails = {...hobbies , details}
// console.log(joanDetails);

//use of template literals
// console.log(`my name is ${name}`);
// console.log('my name is '+name);

// console.log(`I am ${details.age} years old`)

//Destructuring
const{age} = details
//  console.log(`I am ${age} years old`)

//function - normal
function joan(){
    console.log(name);
}
// joan();

//fat arrow function
joanna = () => {
    console.log(age);
}
// joanna();

//if...else clause 
//difference between == and ===
const name1 = 1;
const name2 = '1';
if(name1 == name2){
    // console.log(name)
}

const num1 = 1;
const num2 = 1;
if(num1 === num2){
    // console.log(age)
}

//ternary operator
(num1 === num2) ? console.log('they are equal') : console.log('they are not equal')

//difference between const, let and var
// const qwerty = 1;
// const qwerty = 2;
// console.log(qwerty);

let length = 12;
function asd(){
    let length = 1;
    // console.log(length)
}
// asd();

// console.log(length)

var height = 10;
function jHeight(){
    console.log(height)
}
// jHeight();
