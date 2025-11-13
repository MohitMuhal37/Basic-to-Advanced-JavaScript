
// creating a old school class
//create a factory function that return a new range of objects
function range(from, to){
    //use object.create to create a new object
    //aprototype object defined below prototype object share all the property of this function
    // & defined shared methods for all range object
    let r  = Object.create(range.methods);
    //store the start and end points of this new range object
    // these are non inherited properties that are unique to this object
    r.from = from;
    r.to = to;
    
    //now return new object
    return r;
}
//this prototype object define methods inherited by all range objects
range.methods = {
    // return true if x in range, false otherwise
    //this method work textual and date range as well as numeric
    includes(x) {return this.from <= x && x <= this.to; },
    //a generator function that makes instance of a class iterable.
    // the only work for numeric ranges.
    *[Symbol.iterator](){
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    // return a string representation of range
    toString() {return "("+ this.from + "..." + this.to +")";}
}
// here an example of using of range object
let r = range(1, 3); // create range
let r3 = range(1, 8); // create range
let r4 = range(1, 10); // create range
console.log(r)
console.log(r3.includes(2)) // it include 2 yes
console.log(r.toString())
console.log([...r])
console.log([...r4])

// Create a function using range constructors
// create a constructor for Range
function Range(from, to){
    this.from = from;
    this.to = to;
}
Range.prototype = {
    // if range is true print true if its falls 
    includes: function(x){return this.from <= x && x <= this.to;},
    //now iterate this function using generator function
    [Symbol.iterator] : function*(){
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    //now return string representation of range
    toString: function(){return "("+this.from+"hloo"+this.to+")"}
};
// here are example of uses of this new range
let r1 = new Range(1, 5);
let r2 = new Range(8, 15);
console.log(r1.includes(3))
console.log(r1.toString())
console.log([...r1])
console.log(r2.includes(6))
console.log(r2.toString())
console.log([...r2])

//check range constructor
function Strange(){}
Strange.prototype = Range.prototype;
console.log(new Strange() instanceof Range)

// ------------------------------------------- //
// ------- Classes with the Class Keyword -------- //
class Range1{
    constructor(from, to){
        this.from = from;
        this.to = to;
        
    }
    includes(x) {return this.from <= x && x <= this.to;}
    
    *[Symbol.iterator](x){
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }

    toString(x){return`${this.from}....${this.to}`}

     static parsen(s){
     let matches = s.match(/^\((d+)\.\.\.(\d+)\)$/);
        if(!matches){
            throw new TypeError(`cannot parse range from "${s}"`)
        }
        return new Range1(parseInt(matches[1]), parseInt(matches[2]));
    } 
}

let r5 = new Range1(1, 7);
// let r6 = Range1.parsen('(1.....10)');
// console.log(r6.parsen())
console.log(r5.includes(5))
console.log([...r5]);
console.log(r5.toString());

// using extend keyword to inherit a class

class Span extends Range1{
    constructor(start, length){
        if (length >= 0){
            super(start, start+length);
        }
        else{
            super(start+length, start)
        }
    }
}
// let s1 = new Span(12, 78);
// console.log(s1.includes(65));

//functions can also be used with constructors
let square = class{constructor(x){this.area = x*x};}
let s2 = new square(9).area
console.log(s2);

//------------------------------------------ //
// --------- Adding Method to existing class --------- //
if(!String.prototype.startsWith){
    let s = "max the great";
    String.prototype.startsWith = function(s){
        return this.indexOf(s) === 0;
    }
}

let n = 3;
// n.times(i => {console.log(`hello ${i}`)});
Number.prototype.times = function(f, context){
    let n = this.valueOf();
    for(let i = 0; i < n; i++) f.call(context, i);
};

// Inherit classes
function Span1(start, span){
    if(span >= 0){
        this.from = start;
        this.to = start + span;
    }
    else{
        this.to = start;
        this.from = start + span;
    }
}

// now inherit class Range in span1
Span1.prototype = Object.create(Range1.prototype);
// we dont want to inherit Range 1 constructor so we define our own constructor
Span1.prototype.constructor = Span1;
// By defining its own string method  it override Range1 to string method otherwise it inherit
Span1.prototype.toString = function(x){
    return `${this.from}......+${this.to - this.from}`;
}

let sp1 = new Range1(1, 8);
console.log(sp1.toString())

// -------------------------------------- //