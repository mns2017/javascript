// 'use strict';

// const bookings = [];
// const createBooking = function(flightnum,numpassengers,price){

//     numpassengers = numpassengers || 1;
//     price = price || 199;



//     const booking = {
//         flightnum,
//         numpassengers,
//         price
//     }

//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('lh123');
// createBooking("LH!@#",2,800);
// createBooking("LH!@#",undefined,800);
// createBooking("LH!@#",2);
// createBooking("LH!@#",5);







////////////////////////////////////////////// video how passing arguments works || value  or reference value working
// const flight = 'LH234';
// const NAMer = {
//     Name : 'Suraj Singh',
//     paSsport : 213705
// }


// const checkIn = function(flightnum,passenger){
//     flightnum = 'LH999';
//     passenger.Name = "Mr." + passenger.Name;
//     if(passenger.paSsport === 213705){
//         alert('Check In');
//     }else{
//         alert('Wrong Passenger');
//     }
// }



// checkIn(flight,NAMer);
// console.log(flight);
// console.log(NAMer);



// const createNewPassport = function(person){
//     person.paSsport = Math.trunc(Math.random()*600000) + 1;
// }

// createNewPassport(NAMer);
// console.log(NAMer);
// checkIn(flight,NAMer);










//////////////////////////// FIRST-CLASS vs HIGHER-ORDER FUNCTIONS;

//==>  javascript treats functions as first-class citizens.
//==>  This means that functions are simply values.
//==>  Functions are just another 'type' of object.

//==>  Store function in variables properties.
//==>  pass functions as arguments to other functions.
//==>  Return Functions From Functions.

//==>  Call methods on Functions.








//////////////////////////////////////////////////////// HIGHER ORDER FUNCTION
//==>  A FUnction that receives another function as an argument that returns a new function or both,
//==>  this is only possible because of first class function.



////////////////////////////////part10-131
///////////////////FUnctions -Accepting Callback Function


// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str){
//     const[first, ...others] = str.split(' ');
//     return [first.toUpperCase(),...others].join(' ');
// }


// //////////////////////////////////////////higher order function
// const transformer = function(str,fn){
//     console.log(`Original Strings :- ${str}`);
//     console.log(`Transformed Strings :- ${fn(str)}`);
//     console.log(`Transformed by ${fn.name} Function`);
// };

// transformer('javaScript is the best!',upperFirstWord);
// transformer('javaScript is the best!',oneWord);

// const high5 = function(){
//     console.log("👋👋");
//     document.querySelector('body').style.background = "#c7365f"
// }

// document.addEventListener('click',high5);
// ['jonas','martin','Adam'].forEach(high5);                 //////////////////////////////// for-each mthod necessary







///////////////////////////////////////////// FUNCTIONS RETURNING OTHER FUNCTIONS
// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet("Hey");
// // greeterHey("Suraj");
// greeterHey('Suraj Singh');


// greet("Hello")("AKAASH");




///////CHALLENGE
// const greetArr = greeting => (name) => console.log(`${greeting} ${name}`);

// greetArr("hello")("Suraj Singh Suryavanshi");





////////////////////////////////////////////////////////// THE CALL AND APPLY METHOD
// const lufthansa =  {
//     airline:"Lufthansa",
//     iataCode:'LH',
//     bookings : [],
//     book(flightnum,name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightnum}`,name});
//         // console.log(this.bookings);
//     },
// }


// lufthansa.book(239,"Suraj SIngh");
// lufthansa.book(635, "Suraj Thakur");


// const eurowings = {
//     airline: 'Eurowings',
//     iataCode : "EW",
//     bookings : [],

// }



////////////////////////////////////////////////////////// here we make in such way that our code willl get proper information of desired plane




////////////////////// calll methods:_-------------------------------------------
// const book = lufthansa.book;
// book.call(eurowings,23,"Siddhi Singh");
// // console.log(eurowings);
// book.call(lufthansa,23,"Suraj Singh");
// // console.log(lufthansa);


// ////////////////////new object
// const swiss = {
//     airline: "Swiss Air Lines",
//     iataCode : "LX",
//     bookings:[]
// }
// book.call(swiss,367,"Suraj Singh");
// // console.log(swiss);

// const flightdata = [586,'Suraj Singh'];

// book.call(swiss,...flightdata);








//////////////////////////////////////////////////////////// BIND METHOD 



// const bookEw = book.bind(eurowings);
// bookEw(23,"Suraj Singh");



// const bookEW23 = book.bind(eurowings,23);
// bookEW23("suraj singh suryavanshi");

















///////////////////////////////////////////////////////////////// CODING CHALLLENGE




/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//       // Get answer
//       const answer = Number(
//         prompt(
//           `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//         )
//       );
//       console.log(answer);

//       // Register Answer
//       typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;
//       this.displayResults('string');

//     },
//     displayResults(type = 'array'){
//         if(type === 'array'){
//             console.log(this.answers);
//         }else if(type === "string"){
//             console.log(`poll results are ${this.answers.join(", ")}`)
//         }
//     }
// }

// // poll.registerNewAnswer();

// document.querySelector(".poll").addEventListener("click",poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({answers:[5, 2, 3]},'string');









//////////////////////////////////////// immediately invoked function expression 
////////////////////// simply they are those type of function which invoked one time and then dissapered that means the function id disapeared after invoking


// const runOnce = function(){
//     console.log("This Will never Run Again!");
// }
// runOnce();



/////////////////// iife ==> immediately invoked function expression;
// (function(){
//     console.log("this will never run again!");
// })();

////////////////////// iife in arrow function
// (() => console.log("This Will never Run Again!"))();












////////////////////////////////// closures 
//==>  we can't create any closuers javascript itself creates or invokes it 
//==>  we can't access the closed-variables


// const secureBooking = function () {
//   let passengerCount = 0;

//   return function(){
//     passengerCount ++;
//     console.log(`${passengerCount} passengers`);
//   }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);


////////////////////////////////// more closures examples
////////////////////// EXAMPLE 1
let f;
const g = function(){
  const a  = 23;
  f = function(){
    console.log(a * 2);
  }
}

g();    
f();



////////////////////////////////////////////// re-assigning f
const x = function(){
  const b  = 777;
  f = function(){
    console.log(b * 2);
  }
} 

x();
f();








/////////////////////////// EXAMPLE 2                 time lapse output example
// const boardPassenger = function(n,wait){
//   const perGroup = n/3;
//   setTimeout(function(){
//     console.log(`we are now boarding all ${n} passengers `);
//     console.log(`there are 3 groups , each with ${perGroup} passengers`);
//   },wait = 5000);           ///////////////////////////5s late ayega output

//   console.log(`will start boarding in ${wait} seconds`);
// }


// boardPassenger(180,3)






////////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();



(function(){
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener('click',function(){
    header.style.color = 'black';
    // body.style.backgroundColour = "red";
  })
})();