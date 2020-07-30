
// function chike(){
//     alert('how are you?');
// }

// chike();

// var loom = function() {
//     console.log('Chike');
// }

// loom(); 

// function sing(song){
//     console.log(song);
// }

// sing  ('aajdjsdfdjsfjsdfj');


// function multiply(a,b){
//     if (a>10 || b<12 ){
//         return 'thats too hard';
//     } else{
//         return a*b;
//     }
// }
// multiply (11, 45);

// function uchenna(d,e){
//     return d*e;
// }

// alert(uchenna(5,3));

// // Carless driver exercise

// function checkDriverage(){
//    var age = prompt('whats your age bro?');
//     if (Number(age)<18){
//         alert('sorry bro you are underaged');
//     } else if (Number(age)>18){
//         alert('powering on, enjoy');
//     } else if (Number (age) === 18){
//         alert('Congrats on your first ride');
//     }
// }

// alert(checkDriverage());



// // End of carless driver exercise


// // to uppercase method
// let fullName = 'John Belly';

// console.log(fullName.toUpperCase());

// concatenation

// const author = 'Barry Johnson';
// const cure = 'madagascar';

// //let result = 'According to  ' +  ' ' + author  + " " "the solution to covid is in  " + cure;


// let result = `According to ${author} the solution to covid is in ${cure};`
// console.log(result);   


// arrays

// let ages = [40, 50, 60,70,90 ];


// let joe = ages.indexOf(50);
// console.log(joe);

//  let gbosa = ages.concat(['okey', 'judah', 'messi']);
//  console.log(gbosa);

//Booleans
//true and false

//let age = [50,40,80,10];
//let town=age.includes(4);
//console.log(town);

//console.log(age[1]===50);

//type conversion
//let sani = 400;

//sani = String(sani);

//console.log(sani, typeof sani);

// function multiplier(x,y){
//     let result = x*y;
//     return result;
//     alert(result);
// }

// console.log(multiplier(4,5));

//var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
//console.log(array2[1][1]);


// using this array,
 //var array = ["Banana", "Apples", "Oranges", "Blueberries"];

 //array.shift();

//Objects

// let John = {
//     name: 'Young J',
//     age: 45,
//     strength: "strong",

// };

// John.speed = 'fast';
// console.log(John.name);

// //an object can be in an array and vice-versa.
// var rora = ['samson', {name: 'sunkani', house: 'Jalingo', speed:90,}, 'Jonah']

// console.log(rora[1].house);

//For loop

// for(let i=0; i<5; i++){
//     console.log('in loop: ', i);
// }

// console.log('The end');


// /

// //2nd for loog example
// const food = ['kpomo', 'leaf', 'akpu','meat'];

// let i=0;
// while (i<food.length) {
//     console.log(food[i]);
//     i++;
// }

//back to if

// const age='thirty';
// if (age.length >= 8){
//     console.log('oga your age too long o');
// } else{
//     console.log('Boss man');
// }

//switch statement

// const grade = 'B';
// switch(grade){
//     case 'A':
//         console.log('massive A');
//         break;
//     case 'B':
//         console.log('massive B');
//         break;
//     case 'C':
//         console.log('massive C');
//         break;
//     default:
//         console.log('not a valid number');
// }


//Assignment 7

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

//solutions

//1
// let facebook= ['Mark', 56, 'Bill Gates', 90, 'zuckerburg'];

// //1
// let Instagram = {
//     age = 4,
//     industry = 'social media',
//     gender = 'none'
// }

// //1

// let twitter = {

//     username = 'twitter-boy',
//     password = 'mypassword'
   
    
// }

// let database = [twitter, facebook];


// //FACEBOOK PROJECT

// let database = [
//     {   username: 'samson',
//         password: '07010164268'
//     }
// ];

// let newsfeed = [

//     {   username: 'sally',
//          timeline: 'The day is cool'
//     },

//     {
//         username: 'danjuma',
//         timeline:'Thank God its friday'
//     },

//     {
//         username: 'okafor',
//         timeline:'Daalu Chi'
//     }
// ];

// let userNamePrompt = prompt('What is your username please?');
// let passwordPrompt = prompt('input password');

// function signIn (username, password){
//     if (userNamePrompt === database[0].username  &&  passwordPrompt === database[0].password){
//         console.log(newsfeed);
//     } else {
//         alert('sorry, wrong username or password');
//     }
// }

// signIn(userNamePrompt, passwordPrompt);

// // end of facebook project

// looping from Ansdrei

//const food = ['kpomo', 'leaf', 'akpu','meat'];

// let i=0;
// while (i<food.length) {
//     console.log(food[i]);
//     i++;
// }

// let todos = ['clean huse', 'pray', 'game', 'hustle'];
// for (let i=0; i<=todos.length;i++){
//    let saleh = todos[i] + '!';
//    console.log(saleh);
// };



// //do while

// let counterOne=10;
// do{
//     console.log(counterOne);
//     counterOne--;

// } while(counterOne>0);

    
// //further on objects
// //take note of the this of the this keyword

// let user = {
//     name: 'okoro',
//     age: 40,
//     email: 'benjaminodogwu@gmail.com',
//     logAge: function(){
//             console.log(this.age);
//     }
// };

// user.logAge();


// //math object

// let area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //random number

// const random = Math.random();
// console.log(random);

// console.log(Math.round(random*100));

// //The DOM

// const para = document.querySelector('.cardd-body');
// console.log(para);

// const paras = document.querySelectorAll('p');
// console.log(paras);

// selecting an inner text 
// const text = document.querySelector('.huza');
// console.log(text);
// console.log(text.innerText);

// text.innerText='I have literally changed this text, halleluyah';

// selecting an inner html

// const brand =  document.querySelector('#brand-logos');
// //console.log(brand.innerHTML);
// brand.innerHTML= '<h2>Hossana</h2>';

// // Selecting tag attribute
// const link = document.querySelector('p');
// console.log(link.getAttribute('class'));
// // setting same attribute to something else
// //link.setAttribute('class', 'odogwu');
// //you can also set inexistent attributes like this
// link.setAttribute('style', 'color:green;');

// // a better way of adding attributes so it doesnt overrride former attributes
// const para = document.querySelector('p');
// para.style.margin = '100px';
// para.style.fontFamily = 'serif';

// //how to add a class to an object
// const content = document.querySelector('div');
// console.log(content.classList); //this inspect the various classes an object has
// content.classList.add('hossana');  //this adds a new class

// console.log(content.classList);

//Toggle class on an element

//const title = document.querySelector('.row');
//title.classList.toggle('newclass');

// // The DOM by Andrei
// //DOM SELECTORS
// const gboss = document.getElementsByTagName('h1');
// console.log(gboss);

// getElementById('section');
// getElementsByClassName('row');

// //use square notation to select from the second to the last item, example
// var exammple = document.querySelectorAll('h1')[3]; //this selects the second h1 
// // selecting parent element of a tag, example
// var exammmpple = document.querySelectorAll('h3').[2].parentElement; //selects the parent of the h3
// // children can also be used as above



// DOM EVENTS
//event listeners are used to read user actions on the web page
// var button = document.querySelector('button');
// button.addEventListener('click', function() {
//     console.log('hes clicked')
// })


// //input and a list to add to the list mini program


// var button = document.getElementById('enter');
// var input = document.getElementById('userinput');
// var ul = document.querySelector('ul');

// button.addEventListener('click', function(){
//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode('testing'));
//     ul.appendChild(li);
// })

// //To add content to list from input
// var button = document.getElementById('enter');
// var input = document.getElementById('userinput');
// var ul = document.querySelector('ul');

// button.addEventListener('click', function(){
//    if(input.value.length > 0){
//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value= ''
//    }
// })

// // to enable that enter can be pressed on input

// input.addEventListener('keypress', function(){
//     if(input.value.length > 0 && event.keyCode ===13){
//      var li = document.createElement('li');
//      li.appendChild(document.createTextNode(input.value));
//      ul.appendChild(li);
//      input.value= ''
//     }
//  })

// //crossing done tasks on To-do shopping list
// const items = document.querySelectorAll('li');
// items.forEach(function (item){
//    item.addEventListener('click', function (e){
//       e.target.style.textDecoration = 'line-through';
//    })
// })

// //deleting done tasks on To-do shopping list
// const items = document.querySelectorAll('li');
// items.forEach(function (item){
//    item.addEventListener('click', function (e){
//       e.target.remove();
//    })
// })


//    const btn = document.querySelector('button');

// btn.addEventListener('click', function (){
//    let inp = document.querySelector('input').value;
//    let inptext = document.createTextNode(inp); 
//    let newli = document.createElement('li');
//    newli.appendChild(inptext);
//    let ol = document.querySelector('ol');
//    ol.appendChild(newli);
// })

//other events

//copy events
//mousemove


// //BACKGRUND GENERATOR
// var css= document.querySelector('h3');
// var color1 = document.querySelector('.color1');
// var color2 = document.querySelector('.color2');
// var body = document.querySelector('.body');

// function setGradient () {
//    console.log(color1.value);
//    console.log(color2.value);
//    color = 'linear-gradient(to right, '+ color1.value +','+ color2.value + ')';
//    body.style.background = color;
//    css.textContent = body.style.background + ';';

// }

// color1.addEventListener('input', setGradient);
    

// color2.addEventListener('input', setGradient);


// //Pop up button

// const button = document.querySelector('button');
// const wrapper = document.querySelector('.popupwrapper');
// const popupclose = document.querySelector('.popupclose');



// function displaypopup () {
//    wrapper.style.display = 'block'; 
// }

// function hidepopup () {
//    wrapper.style.display = 'none'; 
// }


// button.addEventListener('click', displaypopup);
// popupclose.addEventListener('click', hidepopup);
// wrapper.addEventListener('click', hidepopup);


// //Ternary operator syntax
// //condition ?  expr1 : expr2;

// //switch by andrei

// function moveCommand (direction) {
//    var action;
//    switch (direction){
//       case 'forward': action = 'welcome to heaven';
//       break;

//       case 'backward' : action ='Welcome to hell bro!';
//       break;

//       case 'left' : action = 'Gerrarra your left';
//       break;

//       case 'right' : action = 'Gerrarra your right';
//       break;
//       default:
//          action = 'Oga enter right direction';
//    }

//    return action;
// }

// //arrow function
// // const moveCommand = (direction) => a+b;
// const add2 = (a=3,b=4) =>  a+b;
// add2(4,6);


// // Template strings
// let firstName='JohnBosco';
// let city = 'jalingo';


// let message = `Hello ${firstName} have i met you before? I think we met in ${city} last summer`;

// message;
// "Hello JohnBosco have i met you before? I think we met in jalingo last summer"

//object.assign
//basic syntax 
// let newvar = object.assign({}, obj1, obj2);  

// const obj1 = {
//   a: 0,
//   b: 2,
//   c: 4
// };
// const obj2 = Object.assign({c: 5, d: 6}, obj1);
// console.log(obj2.c, obj2.d);
// //result is 46


// //Form events by Ninja
// const form = document.querySelector('.signup-form');
// const myInput = document.querySelector('#username');

// form.addEventListener('submit', e => {
//    e.preventDefault;
//    console.log(myInput.value);
// })

// //Form events by Ninja
// const form = document.querySelector('.signup-form');


// form.addEventListener('submit', e => {
//    e.preventDefault;
//    console.log(form.username.value);
// })

//writing regular xpressions
//^.{6,10}$ this permits all xters 

// //testing RegEx
// const username = 'shaun';
// const pattern = /^[a-z]{6,10}$/;
// let result = pattern.test(username);

// if (result){
//    console.log('regex test passed');
// } else{
//    console.log('regEx failed');
// }

// //Basic form validation

// const form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback');

// form.addEventListener('submit', e => {
//       e.preventDefault();
//       const username = form.username.value;
//       const usernamePattern = /^[a-zA-Z]{6,10}$/;
//       let result = usernamePattern.test(username);
      
      
      

//       if(result){
//          feedback.textContent='This username is valid'
//     } else{
//        feedback.textContent='This username is not valid. Characters must be between 6-10'
//     }

      
//     })

   //  //------Basic form validation ii with border live update
   //  const form = document.querySelector('.signup-form');
   //  const feedback = document.querySelector('.feedback');
    


   //  form.username.addEventListener('keyup', e =>{
   //    const username = form.username.value;
   //    const usernamePattern = /^[a-zA-Z]{6,10}$/;
      
   //    if(usernamePattern.test(username)){
   //       form.username.setAttribute('class', 'success');
   //    }else{
   //       form.username.setAttribute('class', 'error');
   //    }
   //  })

   // //------Interactive Quiz app project
   // const correctAnswers = ['B','B','B','B'];
   // const form = document.querySelector('.quiz-form');
   // const result = document.querySelector('.result');


   // form.addEventListener('submit', e=> {
   //    e.preventDefault();

   //    let score = 0;
   //    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
   //    //check answers
   //    userAnswers.forEach((answer, index) => {
   //       if (answer === correctAnswers[index]){

   //          score +=25;
   //       }
   //    });
   //    scrollTo(0,0);
   //  let theSpan= result.querySelector('span');
   //  theSpan.textContent= `${score}%`;
   //  result.classList.remove('d-none');
   // })

//    //--------Conditional '??'
//    // let age = prompt('age?');

//    // let theMessage = (age<=20)? console.log('You are 20') : console.log('Overage');


//    let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );    


// //--------map array method (works pretty much like forEach loop, just needs return keyword)


// const array = [2,4,10,16,90,41];

// let newArray = array.map((num)=>{
//   return num*10;
// })

// console.log(newArray);

// //--------filter array method 

// const filterArray = array.filter((num)=>{
//   return num>10;
// })

// console.log(filterArray);


//   //--------reduce array method
  
//   let reduceArray = array.reduce((accumulator, num) =>{
//     return accumulator+num;
//   },5)
  
//   console.log(reduceArray);

// //----------exercise
// const array = [
//   {
//     username: "john",
//     team: "red",
//     score: 5,
//     items: ["ball", "book", "pen"]
//   },
//   {
//     username: "becky",
//     team: "blue",
//     score: 10,
//     items: ["tape", "backpack", "pen"]
//   },
//   {
//     username: "susy",
//     team: "red",
//     score: 55,
//     items: ["ball", "eraser", "pen"]
//   },
//   {
//     username: "tyson",
//     team: "green",
//     score: 1,
//     items: ["book", "pen"]
//   },

// ];

// //Create an array using forEach that has all the usernames with a "!" to each of the usernames
// let newArray = [];
// array.forEach((user, i)=>{
//   let {username} = user;
//   username = user + '!';
// })

// console.log(newArray);


// // //----------Array Destructuring
// let arr = ['buba', '40', 'Jephthah'];
// let [firstName, age, surname]= arr;
// console.log(firstName);

   
// // ----------Object instantiation by NAGOIEA
// class player{
//    constructor(name,type){
//       this.name=name;
//       this.type=type;
//    }

//    introduce (){
//       console.log(`I am ${this.name}, and ${this.type}`);
//    }
// }

// //this adds the class wizard to class player
// class wizard extends player{
//   constructor(name,type){
//    super(name, type);
//   }
//   play (){
//      console.log(`i am a ${this.type}`);
//   }
// }

// //to now add more wizards
// const wizard1 = new wizard(shally, black);
// const wizard2 = new wizard(jully, red);

// //-------exercise create two classes: an Animal class and a Mamal class. 
// // create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
// class Animal {
// 	constructor(name, type, color) {
// 		this.name = name;
// 		this.color = color;
// 		this.type = type;
// 	}
// }

// class Mamal extends Animal {
// 	constructor(name, type, color) {
// 		super(name, type, color)
// 	}
// 	sound() {
// 		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
// 	}
// }

// const cow = new Mamal('Shelly', 'cow', 'brown');


// // object.values() & object.entries() object methods
// let obj ={
//    username1: obinna,
//    username2: nonso,
//    username3:chukwunna,
//    username4:john
// }

// Object.values(obj).forEach(value=>{
//    console.log(value);
// })

//-------Array method by Ninja
// //filter
// const scores = [10,30,15,25,50,40,5];
// const filteredScores = scores.filter((score)=>{
//    return score>20;
// })

// console.log(filteredScores);

// //example 2
// const users = [
//    {name: 'Bennie', premium: true},
//    {name: 'jonnie', premium: false},
//    {name: 'Lennie', premium: true},
//    {name: 'Tennie', premium: false}
// ];

// let premiumUsers = users.filter((user)=>{
//    return user.premium;
// })

// console.log(premiumUsers);

// map method

// const scores = [10,30,15,25,50,40,5];

// const divScores = scores.map((score)=>{
//    return score/2;
// });

// console.log(divScores);

// //example2

// const products = [
//    {name: 'oil', price:50},
//    {name: 'palm', price:5000},
//    {name: 'ogbono', price:90},
//    {name: 'pepper', price:900},
//    {name: 'asoebi', price:100},

// ];

// let discountedPrice = products.map((product)=>{
//    if(product.price>200){
//       return {name:product.name, price:product.price/2}
//    } else{
//       return product;
//    }
// })

// console.log(discountedPrice);

// // reduce method
// const scores = [10,90,80,40,20,8,90,34];
// let scoreReducer = scores.reduce((accumulator, current)=>{
//    if(current>40){
//       accumulator++;
//    }
//    return accumulator;
// },0);

// console.log(scoreReducer);


// // find method: returns the very first element that passes the test of the cal back func
// const scores = [10,20,45,30,1,900,1000];
// let scoreFinder = scores.find((score)=>{
//    return score>50;
// })
// console.log(scoreFinder);

// //Sort method. Rearranges an array in ascending order. Reverse does the exact opposite

// const scores = [10,20,45,30,1,900,1000];
// scores.sort();
// console.log(scores);

// //example 2
// const players=[
//    {name:'John', score:40},
//    {name:'Luigi', score:20},
//    {name:'chun-ki', score:30},
//    {name:'yoshi', score:10},
//    {name:'buba', score:10}

// ];

// players.sort((a,b)=>{
//    //return a -ve value for a and +ve for b. 0 for when they same
//    if(a.score>b.score){
//       return -1;
//    } else if(b.score>a.score){
//       return +1;
//    } else{
//       return 0;
//    }
// })

// console.log(players);



// // -------My Todo list III Netninja
// const addForm = document.querySelector('.add');
// const list = document.querySelector('.todos');
// const searchInput = document.querySelector('.search input'); 

// function genTemplate (newtodo){
//    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
//    <span>${newtodo}</span>
//    <i class="far fa-trash-alt delete"></i>
// </li>`

// list.innerHTML += html;
// }



// addForm.addEventListener('submit', e=>{
//    e.preventDefault();
//    const newtodo = addForm.add.value.trim();
//    // this ensures we dont submit an empty field
//    if(newtodo.length){
//       genTemplate(newtodo);
//       addForm.reset();
//    }

// })

// // activating delete buttons
// list.addEventListener('click', e =>{
//    if(e.target.classList.contains('delete')){
//       e.target.parentElement.remove();
//    };
// })

// // activating filtering capacity

// function filterTodos (term){
// //this makes an array, filters and adds the class filtered to each todo
//   Array.from(list.children)
//   .filter((atodo)=>{
//    return !atodo.textContent.toLowerCase().includes(term);
// })
// .forEach((atodo)=>{
//    atodo.classList.add('filtered');
// });

// //this makes an array, filters and removes the class filtered to each todo
// Array.from(list.children)
// .filter((atodo)=>{
//  return atodo.textContent.toLowerCase().includes(term);
// })
// .forEach((atodo)=>{
//  atodo.classList.remove('filtered');
// });



// }

// searchInput.addEventListener('keyup', ()=>{
//    term = searchInput.value.trim().toLowerCase();
//    filterTodos(term);
// })


// // ------Date and Time Netninja
// const now = new Date();
// console.log(now);

// //some date and time methods

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// //timestamp
// console.log(now.getTime());
// // Date strings
// console.log(now.toDateString());
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleString())
// console.log(now.toTimeString())

// const before = new Date('June 1 1996 7:30:40');

// //time stamp difference between new and old
// const diff = now.getTime() - before.getTime();
// console.log('diff', diff);

// const mins = Math.round(diff/1000/60);
// const hours = Math.round(mins/60);
// const days = Math.round(hours/24);


// // ------Digital clock project
// const clock = document.querySelector('.clock');

// function tick (){
//    const now = new Date();
//    const h = now.getHours();
//    const m = now.getMinutes();
//    const s = now.getSeconds();

//    const html = `<span>${h}</span>:
//                   <span>${m}</span>:
//                   <span>${s}</span>`;

//    clock.innerHTML = html;
// }

// setInterval(tick, 1000);

// // ------for of loop (works with arrays and strings)
// const basket = ['apples', 'beer', 'gulder', 'pawpaw'];

// for (item of basket){
//    console.log(item);
// }

// // ------for in loop(works with objects)
// const detailedBasket = {
//    apples:5,
//    oranges:100,
//    gulder:1000
// }

// for (item in detailedBasket);{
//    console.log(item);
// }


// // ------making HTTP Requests NetNinja
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange',()=>{
//    console.log('request', request.readyState);
// } )

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// request.send();

// // ------the Fetch API NetNinja
// fetch('myjson.json').then((response)=>{
//    console.log('resolved', response);
//    return response.json();
// }).then(data=>{
//    console.log(data);
// }).catch((err)=>{
//    console.log('rejected', err);
// })

// ------ASYNC & AWAIT (recommended way to fetch data i suppose)

// const getTodos = async ()=>{
//    const response = await fetch('myjson.json');
//    const data = await response.json();
//    return data;
//    //console.log(data);
// };


// getTodos().then((data)=>{
//    console.log('resolved', data);
// })
// .catch((err)=>{
//    console.log('rejected', err.message);
// });

// // ------Cathcing erros in ASYNC & AWAIT 
// const getTodos = async ()=>{
//    const response = await fetch('myjson.json');

//    if(response.status!==200){
//       throw new Error('this is your custom error message');
//    }

//    const data = await response.json();
//    return data;
//    //console.log(data);
// };


// getTodos().then((data)=>{
//    console.log('resolved', data);
// })
// .catch((err)=>{
//    console.log('rejected', err.message);
// });


// ------Weather app Netninja

const cityForm= document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

cityForm.addEventListener('submit', e=>{
   //prevent default action of refreshing
   e.preventDefault();

   //get city value
   const city = cityForm.city.value.trim();
   cityForm.reset();

   //update  ui with new city
   updateCity(city).then((data)=>{
      updateUI(data);
   }).catch((error)=>{
      console.log(error.message);
   });


})

const updateCity = async (randomcity)=>{
   //these call the functions in forecast.js and return their promises
   const cityDetails= await getCity(randomcity);
   const weatherDetails= await getWeather(cityDetails.Key);

   return {
      citydetails: cityDetails,
      weather: weatherDetails

   };

}

const updateUI=(data)=>{
   //collecting and assigning data
   const cityDets = data.citydetails;
   const cityweather = data.weather;
   

   //update details template
   details.innerHTML=`
   <h5 class="my-3">${cityDets.EnglishName}</h5>
      <div class="my-3">${cityweather.WeatherText}</div>
      <div class="display-4 my-4">
        <span>${cityweather.Temperature.Metric.Value}</span>
        <span>&deg;</span>
       
      </div>
   `;

   //update icons
   const iconsrc= `weathericons/${cityweather.WeatherIcon}.svg`
   icon.setAttribute('src', iconsrc);

   //update day/night icon & image
   let timeSrc =cityweather.IsDayTime? 'weathericons/day.svg':'weathericons/night.svg';
   // if(cityweather.IsDayTime){
   // timeSrc='weathericons/day.svg';
   // }else{
   //    timeSrc='weathericons/night.svg';
   // };
    time.setAttribute('src',timeSrc);


   //remove the d-none class if present
   if(card.classList.contains('d-none')){
      card.classList.remove('d-none');
   }
};




   
   
   