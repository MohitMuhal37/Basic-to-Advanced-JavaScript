// let username;
// if (username == null)
//     username = "max the great"
// console.log(username);

// if (!username) username = "john"; 
// console.log(username);

// let address = null;
// if(!address){
//     address = "kp panipat";
//     message = "please specify mail";
//     console.log(address, "\n"+message);
// }

// let num = 5;
// if(num === 1)
//     console.log("you have 1 new message");
// else
//     console.log(`you have ${num} new messages`);

// let i = j = 1;
// let k = 3
// if(i == j){
//     console.log(`${i} is equal to ${j}`)
//     if(i === k)
//         console.log(`${i} is also equal to ${k}`);
// }
// else
//     console.log(`${i} and ${k} are not equal`);

// let n = prompt("Enter day here");
// if(n == 1){
//     console.log("Day is Monday");
// }
// else if(n == 2){
//     console.log("Day is Tuesday");
// }
// else if(n == 3){
//     console.log("Day is Wednesday");
// }
// else if(n == 4){
//     console.log("Day is Thrusday");
// }
// else if(n == 5){
//     console.log("Day is Friday");
// }
// else if(n == 6){
//     console.log("Day is Saturday");
// }
// else if(n == 7){
//     console.log("Day is Sunday");
// }
// else{
//     console.log("Apki mummy ne invent kiya ka nya din")
// }


// let day = prompt("Enter day here ");
// let day2 = prompt(" ");
// let day1 = prompt("Enter day here1 ");
// switch(day){
//     case '+':console.log(day + day1);
//         break;
//     case '-' :
//         console.log(day - day1);
//         break;
// }


// let data = [12, 3, 45, 56, 76], sum = 0
// for(let element of data){
//     sum += element;
// }
// console.log(sum);


// let o = {x : 1, y : 2};
// for(let element of o){
//     console.log(element);
// }

// let o = {x : 1, y : 2};
// let keys = ""
// for(let element of Object.keys(o)){
//     keys += element;
// }
// console.log(keys);

// let sum1 = 0; 
// for(let element of Object.values(o)){
//     sum1 += element;
// }
// console.log(sum1);

// let pairs = "";
// for(let [k, v] of Object.entries(o)){
//     pairs += k+v;
// }
// console.log(pairs);

// let frequency = {};
// for(let leter of "missi"){
//     if(frequency[leter]){
//         frequency[leter]++;
//     }else{
//         frequency[leter] = 1;
//     }
// }
// console.log(frequency)
// printing loop
for(let i = 1; i <= 5; i++){
    console.log(`${i} Hello World`);
}

let val = 1;
for(let i = 0; i < 10; i++){
      val += i;
}
 console.log(val);

 // table 
 let tb = 8;
 for(let i = 1; i <= 10; i++){
    let mul = tb * i
    console.log(`${tb} X ${i} = ${mul}`)
 }

let data = [13, 45, 67, 89, 9, 89], sum = 0;
for(let val of data){
    sum += val;
}
console.log(sum);

let obj = {
    x : 1,
    y : 2,
    z : 3
};
let key = 0;
let str = "";
let pairs = "";

for(let val of Object.values(obj)){
    key += val;
}
console.log(key);

for(let val of Object.keys(obj)){
    str += val;
}
console.log(str)

for(let [val, str] of Object.entries(obj)){
    pairs += val + str;
}
console.log(pairs);


// for of with string
let freq = {};
for(let leter of "missippi"){
    if(freq[leter]){
        freq[leter]++;
    }
    else{
        freq[leter] = 1;
    }
}
console.log(freq);
console.log("hi new line");