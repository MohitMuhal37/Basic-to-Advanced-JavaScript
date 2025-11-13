// const fruit = ["Mango", "Orange", "peach"];

// fruit[3] = 'grape';

// fruit.push("Onion");

// fruit.unshift('stawberry');

// fruit.pop();

// console.log(Array.isArray(fruit));
// console.log(fruit.indexOf('Orange'));

// console.log(fruit)


// // object literals are just key value pair

// const person = {
//     name:"Mohit",
//     age:21,
//     marks:76.9,
//     adress:{
//         street:'50 main street',
//         city:"valhallah"
//     }
// }

// person.mail = 'max@mail.com';

// const {name, age} = person;
// console.log(name);
// console.log(person);

// console.log(person.adress.street)


// const todo = [
//     {
//         id:1,
//         text:'take out trash',
//         iscompleted: true
//     },
//     {
//         id:2,
//         text:'meet with boss',
//         iscompleted: true
//     },
//     {
//         id:3,
//         text:'meet with dentist',
//         iscompleted: false
//     }
// ];

// console.log(todo[1].text);

// const todoJSON = JSON.stringify(todo);
 // console.log(todoJSON);

// for(let todoJSON of todo){
//     console.log("todo list is ")
// }

// for each, map, filters
// const todotext = todo.map(function(todo){
//      return todo.text;  
// });
// const todocompleted = todo.filter(function(todo){
//      return todo.iscompleted === false;  
// }).map(function(todo){
//     return todo.text;
// });

// console.log(todocompleted);


// functions
// const addNum = (num1 = 2, num2 = 4) => {
//     return num1 + num2;
// }

// console.log(addNum(2, 6));


// constructor function
function Person(age,firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.age = age;
    this.getbirthyear = function(){
        return this.dob.getFullYear();
    }
    Person.prototype.getFullname = function(){
        return `${this.firstname} ${this.lastname}`;
    }
}

// initiate the object

const p1 = new Person('21','Max', 'Murdock', 15-11-2003);
const p2 = new Person('22','Dax', 'Murdock', '7-12-2003');
console.log(p1.getbirthyear())
console.log(p1.getFullname())


// create class
// class Person{
//     constructor(age,firstname, lastname, dob){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
//     }

//     getname(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }