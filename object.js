// objects are mutable and manipulated by refrence rather than value
// objects are made with keyvalue pair or string 
let obj = {};//empty object
let point = {x:0, y: 1}; //Numeric properties
let p2 = {x: point.x, y:point.y+1}; //complex Numbers
let book = {
    'main title' : 'JavaScript',
    for : 'all audience',
    author: {
        'Name' : 'David',
        'Surname' : 'Flangan'
    }
};
let p = [];
console.log(book);
console.log(p2);
console.log(point);
console.log(obj);
console.log(p);

// creating objects with new keywords
let o = new Object();
let a = new Array();
let d = new Date([15-12-2003]); //crreate date object for cuttent time
let m = new Map(); //create map object for keyvalue maping

console.log(d.getFullYear());

//---------------------------------------------------------//
// create object using create key word

let objs = Object.create({a:1, b:3});

console.log(objs.a + objs.b); // obj inherit properties of a and b in it
console.log(objs.a = 10 + objs.b); // obj inherit properties of a and b in it and use override

//------------------------------------------------------------//

let o2 = Object.create(null); // this o2 does not inherit other properties

let o3 = Object.create(Object.prototype);//empty object creations
console.log(o3);


let library;
let o4 = {x:"you cannot change it "};
// library.function(Object.create(o4)); // guard against accidental modification
// console.log(o4 = 'max');


//-----------------------------------------------------//

// Querying and Setting properties

// we can access values and its properties using (.) operator
// or using [] brackets
// when we use brackets we use string inside it to access values
let author = book['author'];
let srn = author['Surname'];
let title = book['main title'];
console.log(author);
console.log(srn);
console.log(title);

//change properties using (.) or [] brackets 
// it can change globally so generly dont use in your program
book.edition = 7;
book['main title'] = 'ECMAScript';
console.log(book['main title']);

console.log(book);
//----------------------------------------------------//

//--------------------------------------------------//
//Object as asscociate with arrays
let cutomer = {a:12, b : 2, c : 'max'};
let adr = "";
for(let i = 0; i < 4; i++){
    adr = adr +cutomer[`address${i}`];
console.log([`address${i}`]);
}


//--------------------------------------------------//
// inheritance of objects
let c = {};
c.j = 98;
let a1 = Object.create(c);
a1.x = 9;
let p1 = Object.create(a1);
p1.y1 = 34;
let q = Object.create(p1);
q.z = 87;
let f = q.toString();
console.log(q.x + q.y1);
console.log(q.x+q.j);

// ---------------------------------------------//

// --------- Delete operator in object -------//

// delete book.author; 
// console.log(book.author);//this delete operator delete value of properties 
// console.log(author);  //but does not delete property itself
// so in book.author delete author in the book but cannot delet author itself

delete book['main title'];
console.log(book["main title"]);

//-------------------------------------------//

//------- Testing Properties -------//
//first type to check property
console.log("Name" in book);

// second type to check it hasOwnProperty is other function except in
console.log(book.hasOwnProperty("author"));
//-----------------------------------------//

// ------- Extend object Properties -------- //
let target = {x: 1, b: 67}, source = {y: 2, z: 3, a: 5} , max = {c: 34, e:45};
// for(key of Object.keys(source)){
//         target[key] = source[key];
// }
// console.log(target)

console.log(Object.assign({x: 1, b: 67}, {y: 2, z: 3, a: 5},));

// ----------------------------------- //

//------- Serielizing Objects --------//
let op = {x:21,
    max:{
        "main": "pure" //these are values
    },
    z:null
}
console.log(JSON.stringify(op)); // convert object into string
let s = JSON.stringify(op);
console.log(JSON.parse(s)); // convert string into object

console.log(op.max);

//------------------------------------//

// ----- to string Method ------- //
let ob = {x: 'max', y:'tax',c:'fix'};
console.log(ob.toString());

let pin = {
 x: 1000,
 y: 2000,
 z: 'max',
 toString : function(){
    return (`${this.x}, ${this.y}, ${this.z}`);
 },
 toLocaleString: function(){
     return (`${this.x.toLocaleString()}, ${this.y.toLocaleString()}, ${this.z.toLocaleString()}`);
 }
};
console.log(pin.toString());
console.log(pin.toLocaleString());

