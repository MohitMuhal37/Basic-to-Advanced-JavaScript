// ---- Create an undefined function ---- //
function printo(o){ // printo is identifier o is local parameter of this function
    for(let p in o){
        console.log(`${p}: ${o[p]}\n`);
    }
}
// -------------------------------- //

// ------- distance function ------- //
function distance(d1, d2, y1, y2){
    let x1 = d1 - y1;
    let x2 = d2 - y2;
    return Math.sqrt(x1 * x1 + x2 * x2);
}
console.log(distance(34, 56, 29, 45));
// --------------------------------- //

// ------- Factorial function -------- //
function fact(num){
    if(num == 0 || num == 1){
        return 1;
    }
    else{
        return num*fact(num-1);
    }
}
console.log(fact(5))

// --------- Variable Using Functions -------- //

const sqaure = function(val) {
    return val*val;
}
console.log(sqaure(5));

const facto = function(val){
    if(val == 0 || val == 1){
        return 1;
    } 
    else{
    return val*facto(val - 1);
    }
}
console.log(facto(9));

// -------- Arrow Functions --------- //

const sum = (x, y) => {return x + y};
console.log(sum(23, 65))

// we can also write this function without return statement
// we dont want want to return things
const sums = (x, y) => x + y;
console.log(sums(23, 69));

// if it has only 1 parameter we dont need braces
const str = x => x*x + 2*x + 3;
console.log(str(3));

// without arguments we can also write function
const witargs = () =>  "Hi i am Max";
console.log(witargs())

// We can also use function with functions
let filtered = [1, null, 2, 3].filter(x => x != null);
console.log(filtered)

let maps = [12, 4, 5, 7].map(x => x*x);
console.log(maps);

// ---------- Nested Functions ----------- //
function hp (a, b){
    function squares(x) {return x*x}
    return Math.sqrt(squares(a) + squares(b));
}
console.log(hp(25, 6));

// ----------------------------------- //

//---------- Method Invocation ----------//
let calculator = {
    operand1 : 1,
    operand2 : 1,
    add(){ // this is a sorthand method syntax
         this.result = this.operand1 + this.operand2;
    }
};
// method invocate
console.log(calculator.add())
console.log(calculator.result)

// -------------------------------- //
// --------- Method Chaining --------- //
let o1 = {
    m : function(){
        let self = this;
        this === o1 // give true 
        f();

        function f(){
            this === o1 // give false o is now global or undefined
            self === o1
        }
    }
};

// --------------------------------- //
// ------- Optional Parameter and default ------- //
// getting properties using functions
function getpropertyname(o, a){
    if (a === undefined) a = []; // empty array is created
    for(let property in o)a.push(property)
        return a;
}
let o = {x : 1}, p = {y : 3, t : 6}; // to object for testing
let a = getpropertyname(o);
console.log(o)
console.log(getpropertyname(p, a));

//converting parameter into objects
const rectangle = (width, height = width*2) => ({width, height});
console.log(rectangle(2))
//------------------------------------------- //
// ---------- Rest Parameter ------------- //

function max(first = -Infinity, ...rest){
        let maxvalue = first // start by assuming the first arguments is the biggest argument // then loop threw the rest of it
        for(let val of rest){
            if(val > maxvalue){
             maxvalue = val;
            }
        }
        return maxvalue;
}
console.log(max(1, 23, 5000, 56, 677));


// using argument objects
function maxy(){
    let maxvalue1 = -Infinity;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > maxvalue1){
            maxvalue1 = arguments[i];
        }
    }
    return maxvalue1
}
console.log(maxy(1, 500000, 7695, 8979))
// ------------------------------------ //

// ------ Function as Values ------- //
function square(x) {return x*x;}
//now assign this function into a variable
let s = sqaure;
console.log(sqaure(4))
console.log(s(4))

//function can also be assigned into object properties
let f1 = {
    sqaure : function(x){
        return x*x;
    }
};
console.log(f1.sqaure(5));

// they also used in array but in array they doesnt require a name
let arr = [x => x*x, 9, 76];
console.log(arr[0](arr[2]))

//--------- Closures Understand Lexical Scope -------- //
let scope = "global scope";
function checkScope(){
    let scope = "local Scope";
    function f(){
        return scope;
    }
    return f();
}
console.log(checkScope())

let scope1 = "global scope";
function checkScope1(){
    let scope1 = "local Scope";
    function f(){
        return scope1;
    }
    return f;
}
console.log(checkScope1()());

// find largest element in array using apply method
let arrofmax = [12, 54, 67, 777, 65, 45]
let biggest = Math.max.apply(Math, arrofmax);
console.log(biggest);

// using bind function
function f(y) {
    return this.x + y; // this function need to be bound
}
let obj = {x : 1}; // the object in which we want to bind this function
let g = f.bind(o); // calling g(x) invoking f() on o
console.log(g(2)); // => return 3
let p1 = {x : 10, g}; // invoke g as a method of this object
console.log(p1.g(2)) // g is still bound to o not p

// creating a function constructor
const f2 = new Function();
console.log(f2());


//processing array with functions
let data = [12, 34, 66, 87];
// the mean is the sum that is divided by our numbers
let total = 0;
for(let i = 0; i < data.length; i++)
    total += data[i];
let mean = total / data.length;
console.log(mean);

// now compute standard deviation , we first square of the deviation of each element of mean

for(let i = 0; i < data.length; i++){
    let dv = data[i] - mean;
    total += dv * dv;
}console.log(total)

let stddv = Math.sqrt(total/(data.length-1));
console.log(stddv)

// ------------------------------------------ //    
// ------------- Memoization -------------- //
function memoize(f){
    const cache = new Map();
    
    return function(...args){
        let keys = args.length + args.join("+");
        if(cache.has(keys)){
            return cache.get(keys);
        }else{
            let result = f.apply(this, args);
            cache.set(keys, result);
            return result;
        }
    };
}
const factorial = memoize(function(n) {
    return (n <= 1) ? 1 : n*factorial(n-1);
});
console.log(factorial(5))

// function of Gcd
function gcd(a, b){
    if(a < b){
        [a, b] = [b, a] // destructure them
    }
    while(b != 0){
        [a, b] = [b , a%b]; // THIS IS EUCLID'S ALGORITHAM FOR GCD
    }
    return a;
}
const gcddemo = memoize(gcd);
console.log(gcddemo(8, 16));

// _______ -------- The End -------- _______ //