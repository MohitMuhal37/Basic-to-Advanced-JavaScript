// Creating an array with array literals

let a1 = []; //empty array
let arr = [12, 2, 5.6, 'Max']; //array with mixed data type
let arr1 = [12, 4, 55, 34, 7]; //array with only numeric values

console.log(a1);
console.log(arr);
console.log(arr1);

let base = 1024;
let table = [base, base + 1, base + 2, base + 3];
console.log(table);

//Array literals can contains other array literals or objects
let b = [123, 43, ["hello", "world", 12, 54, 7.9, true], [34, "fig", "orange"], [2, {x: 32, y: 'Max'}]]
console.log(b[4])//can get only single array
console.log(b[3][2]) //can get element of array 3  which is orange

// create a sparse array
let p = [1, ,45];// it is a sparse array because array are not placed in contigious places;
console.log(p);
console.log(p.length);

let undef = [, ,]
console.log(undef);

//---------------------------------------//

//-------- Using Spread Operators ---------//

//spread operators are used for copying 1 array to other once with its  existing elements

let a = [1, 34, "max"];
let b1 = [0, ...a, 98]
console.log(a);
console.log(b1);
console.log(b1[2]);

// So now create a copy
let original = [12, 'max', 444, 76];
let copy = [...original];
console.log(original);
console.log(copy);
copy[5] = 'mat'; //add an element in copy 
console.log(copy); //but does not change the original once;

//now remove the duplicate element in an array
let letter = [..."hello world"];
console.log([...new Set(letter)]);
console.log(letter);

//string a also an array of characters so we can also traverse and get the element of string

let str = [..."1234567890000987654322222"];
console.log(str);

//-----------------------------------------//

//------- Creating an array with array constructors --------//

 let arr2  =  new Array(); //create an empty array

 let arr3 = new Array(5); //creating an array with 5 elements

 let arr4 = new Array(13, "max", 5.6);

 console.log(arr2);
 console.log(arr4);
 
 arr3 = [14, "mat", true, false, "max"];
 console.log(arr3);

//--------------------------------------//

//------ creating an array with arrayof ------//

    console.log(Array.of())//empty array
    console.log(Array.of(10))// take only 1 element
    console.log(Array.of(14, "max"))//empty array

//---------------------------------------//

// ------- Create an array with array.from ------//
//it is actually a copy array which literally copy a whole array

    let og = [15, 54, "max", 0, true];
    let copy1 = Array.from(og);
    console.log(copy1)
    copy1[5] = 56;
    console.log(copy1);

    console.log(copy1);
    console.log(og);

//---------------------------------------//

// ------ Reading and writing Array Elements -----//

let a2 = ["world"];
let value = a2[0];
a2[1] = 3.14;
let i = 2;
a2[i] = 3;
a2[i+1] = "hello";
a2[a2[i]] = a[0];
console.log(a2[a2[i]]);
console.log(a2.length);

//create a plain object
let o1 = {};
o1[2] = "two";
o1["2"];
console.log(o1[2]); // numeric and string property names are same
console.log(o1["2"]);


//create array with -index

let o2 = [];
o2[-1.23];
o2["1000"] = 5;
o2[0.00] = 10;
o2[1.00] = 1;
o2[2.00] = 4;
o2[3.00] = 5;
o2[4.00] = 8;

console.log(o2[4]);

//special type array
let o3 = [true, false];
console.log(o3[1])
//-------------------------------------------//

// ------ Sparse Array --------//

let sparr = [];
sparr[10] = 2;
console.log(sparr);

let spar = [,];
let spar1 = [undefined];
console.log(0 in spar);
console.log(0 in spar1);// it pick 0 because undefined is there

//----------------------------------------//

// ---------- Array length ----------- //
let len = [13, 4.4 , 76, 87, 56, "max", "Tag", 67];
len.length = 5;
console.log(len);

//------------------------------------------//

// -------- Adding and Deleting Array Element ------- //

let fruits = ["Apple", "Banana", "Orange", "Papaya", "kiwi"];
fruits.push("PineApple");// add element at last
console.log(fruits);

fruits.pop() //it removes the last element from the array
console.log(fruits);

fruits.unshift("PineApple"); // it addup the the element from ist index
console.log(fruits);

fruits.shift();// it removes the first element
console.log(fruits);

// fruits[4] = "guvava"; its not a useful way
// console.log(fruits);

fruits.splice(0, 2);
console.log(fruits);

//-------------------------------------//

// ------ Iterating Arrays ------- //
let leter = [..."hello world"];
let strin = "";
for(let ltr of leter){
   strin += ltr;
}
console.log(strin); // it produced hello world string


// Accesssing even letters in a string array
let everyother = "";
for(let [index, ltr] of leter.entries()){
    if(index % 2 == 0){
        everyother += ltr;
    }
}
console.log(everyother);

// using foreach array
// to convert all element to upper case
let uppercase = ""; // create an empty string to combine all iterating string
leter.forEach(ltr => { // using arrow function
  uppercase += ltr.toUpperCase();
});
console.log(uppercase);

// to convert all element to lowercase case
let lowercase = "";
leter.forEach(ltr => { // using arrow function
  lowercase += ltr.toLowerCase();
});
console.log(lowercase);

//--------------------------------------//

// ------ Array Iterator Methods ------- //

let data = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
// apply for each method
data.forEach(value =>{
    sum += value;
});
console.log(sum);

// other way to add items or elements
// for(let val of data){
//     sum += val;
// }
// console.log(sum);

// now increment each value
data.forEach(function(v, i, a){
    a[i] = v + 1;
});
console.log(data);

// -------------------------------------- //
// ------- Map Functions --------- //
let mp = [1, 3, 3, 4];
console.log(mp.map(val => val**val));
console.log(mp);

// ------------------------------------- //
// ------ Filter Function ------- //
let fil = [1, 2, 3, 4, 5, 6, 7];
console.log(fil.filter(val => val < 5));
console.log(fil.filter((val, i) => i % 2 == 0));

let sparse = [1,,2];
console.log(sparse);
let dense = sparse.filter(() => true);
console.log(dense);

// use find type functions

let fin = [2, 3, 4, 5];
console.log(fin.find(val => val % 2 === 0));
console.log(fin.findIndex(val => val >= 3));

// use reduce and reduce-right
let reduc = [1, 2, 3, 4, 5];
console.log(reduc.reduce((val, i)=> val+i, 0));
console.log(reduc.reduce((val, i)=> val*i,));

//use reduce right
let redright = [2, 3, 4];
console.log(redright.reduce((val, i) => Math.pow(i,val )));
// ----------------------------------- //

// ------ Use Flat and FlatMap ------- //
let flt = [12, 43, [[67,45]]];
console.log(flt.flat(2));

//use flat map

let phrase = ["hello world", "how are you"];
let words = phrase.flatMap(phrase => phrase.split(" "));
console.log(words)
console.log(phrase);

// ---------------------------------- //

// ------- Use Concattenation -------- //
let cat = [14, 344, 65 ,76];
console.log(cat.concat(2, 4));
console.log(cat.concat([2, 4], [9, 7]));
console.log(cat);

//-----------------------------------//

// ------ Stack and Quese with push and pop ------- //

let Stack = [];
console.log(Stack.push(1, 3, 45, 67, 76));
console.log(Stack.pop());
console.log(Stack.push(3));
console.log(Stack.push([12, 34]));
console.log(Stack.pop());
console.log(Stack.length);
console.log(Stack.pop());
console.log(Stack)

let q = [];
console.log(q.push(12));
console.log(q.push(3));
console.log(q.push(34, 56, 7));
console.log(q.pop());
console.log(q.push([56, 76, 67], [67, 67, 4]))
console.log(q.pop());

// ------------------------------------- //

// ----- Using Slice Function ----- //
let slc = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(slc.slice(0, 3));
console.log(slc.slice(3));
console.log(slc.slice(-3, -1));

//------------------------------//
// ----- Splice Function ----- //
let spl = [1, 2, 3, 45, 65, 78, 87];
console.log(spl.splice(4));
console.log(spl);
console.log(spl.splice(1, 2));
console.log(spl);

//-------------------------------//

// ------ Using Fill Function ------ //
let fila = new Array(5);
console.log(fila.fill(0));
console.log(fila.fill(9, 1));
console.log(fila.fill(8, 2, -1));

// ----------------------------- //
// ------ Main Array Functions ------ //

let cp = [1, 3, 5, 6, 8, 9];
console.log(cp);
console.log(cp.copyWithin(1)); //copy array element 1
console.log(cp.copyWithin(3, 2, 5));

let srt = ["max", "bax", "fax"];
console.log(srt.sort());

// Array to string conversion
let strc = [1, 3, 4, 5,[3, 4], 6];
console.log(strc.join());
console.log(strc.toString());
console.log(strc.toLocaleString());

// static array function
let statc = [13, 5, {x: 45, y:45}];
console.log(Array.isArray(statc));

// ----------------------------------- //
// ----- Create object into array length  ---- //
let ab = {};
let n = 0; //take an index;
while(n < 10){
    ab[n] = n * n;
    n++;
}
console.log(n);

// ----- create object to array ----- //
let mj = {"0" : "a", "1" : "b", "2" : "c", length : 3};
console.log(Array.prototype.join.call(mj,"+")); 
console.log(Array.prototype.slice.call(mj, 2)); 

// ---- String as Array ---- //
let sar = "test";
console.log(sar.charAt(1))
console.log(sar[2])

// _______--------- THE END --------- ________ //