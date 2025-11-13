// Examine The Document Object
// console.dir(document); //shows us different type of properties of our document

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.nodeName);
// console.log(document.nodeType);
// console.log(document.nodeValue);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.fonts);
// console.log(document.links);
// console.log(document.images);

// document.all[8].textContent = 'hey ';
// document.title = "Max View";


// NOw We learn Selectors
// console.log(document.getElementById('header-title'));

// let id = document.getElementById('header-title');
// console.log(id);
// id.textContent = "max grace";
// id.innerText = "tac grace";

// var headertitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headertitle);
// headertitle.textContent = 'Goodbye';
// headertitle.innerText = 'Bye';
// headertitle.innerHTML = '<h3> Max The Fury </h3>';

// console.log(headertitle.innerHTML);

// header.style.borderBottom = 'solid 3px #333';

//------  get elements by classname ------//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hi';
// items[1].style.fontWeight = 'bold';

// // items.style.backgroundColor = "#f4f4f4";

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "#f4f4f4";
// }


//------- get element by tag name -------//
// var items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// items[0].textContent = 'hi';
// items[0].style.fontWeight = 'bold';

// // items.style.backgroundColor = "#f4f4f4";

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "#f4f4f4";
// }


//----- querySelector -----//

// let head = document.querySelector('#main-header');
// head.style.borderBottom = '5px solid #3543ed';

// let input = document.querySelector('input');
// input.value = 'Hello My Fucking Friend';

// let submit = document.querySelector('input[type = "submit"]');
// submit.value = 'send me stuff';


//----- queryselectorall -----//
// let title = document.querySelectorAll('.title');
// console.log(title);

// title[1].textContent = 'Hello';

let itemlist = document.querySelector("#items");
//parantenode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentNode.parentNode);

console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemlist.parentElement.parentElement);

// ChildNodes
// console.log(itemlist.childNodes);
console.log(itemlist.children);
// itemlist.children[1].style.backgroundColor = "#a2a353ff";

//firstchild
// console.log(itemlist.firstChild);
// itemlist.firstChild.style.Color = "#a45a65ac"

// FirstElement Child
// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent = "Max the Great"

//lastElement Child
// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.textContent = "Max the Great"

//nextSibling
// console.log(itemlist.nextSibling);

// //nextSibling
// console.log(itemlist.nextElementSibling);

// previous sibling
console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);

//create an element
let head = document.createElement("h1");

//add class
head.className = "mat";

//add id
head.id = "max";

//add atribute
head.setAttribute("title", "hlo");

//create text node
let nexthead = document.createTextNode("Hello world");

//add texttodiv
head.appendChild(nexthead)

let container = document.querySelector('header .container');
let h1 = document.querySelector("header h1")
console.log(head)

container.insertBefore(head, h1)