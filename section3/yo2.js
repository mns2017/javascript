// FUNDAMENTALS PART 2 BEGIN BROTHER


// STRICT MODE FOR ACTIVATING STRICT MODE IN JAVA-SCRIPT WE USE "use strict";

// "use strict";                 /////// HERE we started the script mode and it will show our mistakes which we make and didnt know



// let has = false;
// const passtest = true;

// if (passtest) hass = true;               // here we converting false into true or we going to set false into true
// if(has) console.log("i can drive");

// const if  = 10;
// const else = "hello"


// NOTE HOW STRICT MODE GONNA WORK WHEN WE MISTYPE OR CREATE AN BUG IT WILL SHOW WHTHER THE BUG OR MISTAKE IS OCCURED FOR EXAMPLE IF YOU FORGET STRICT MODE SO DON'T WORRY YOU HAVE TO GO IN UPPER EXAMPLE AND THERE  YOU HAVE TO CHANGE 'HAS' INTO 'HASS' AND THEN YOU CAN CHECK BACK ON CONSOLE THAT IT IS NOT WORKING AND SHOWING AN ERROR BECAUSE OF MISSTYPING OR BUG













/////////////////
//////////////               FUNCTION AND ITS MAKING
//////////////////////////           AN FUNCTION IS AN PEICE OF CODE WHICH CAN USE AGAIN AND AGAIN


// function lopsd(userin){
//   var i = 0;
//   while(i<=userin){
//     console.log("hello world");
//     i++;
//   }
// }
// var myLod = lopsd(5);
// console.log(myLod);




// function logger() {
    // console.log("hello i'm suraj");
    // return "HELLO WORLD"
// }

// console.log(logger())

// logger();              /////////// HERE YOU CAN SAY THAT WE ARE CALLING THE FUNCTION || INVOKING THE FUNCTION || RUNNING THE FUNCTION




/////////ANOTHER EXAMPLE

// function fruitjuice(a,b){
//   const juice = `juice of ${a} apples & ${b} oranges`
//   return juice
// }
// const Droped = fruitjuice(4,5);
// console.log(Droped)






///////////////////////////////////////
// Function Declarations vs. Expressions

/////////////////////////////// HERE WE DECLARED THE FUJNCTION


// function calcAge(birthYeah){
//   const presentAGe = `YOUR CURRENT AGE IS ${2023 - birthYeah} YEARS`;
//   return presentAGe
// }
// const myaGe = calcAge(2000);
// console.log(myaGe);


///////////////////////// HERE WE EXPRESS THE FUNCTION   :- IN FUNCTION EXPRESSION WE USE OUR DECLARED VARIABLE AS FUNNCTION

// const ageCount = function (presentYear){
//   return  2023-presentYear;
// }
// const age1 = ageCount(2020);
// console.log(age1);







///////////////////////////////////////
// Arrow functions

// var loopfun = userin => {
//   var i = 0 ;
//   while(i<=userin){
//     console.log("hello world");
//     i++;
//   }
// }
// const getit = loopfun(6);
// console.log(getit);




// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);



///////////////////////////////////// MY EXAMPLE
// const ageretirement = (birthyear,FirstName) =>{
//   const age = 2023-birthyear;
//   const retirement = 65-age;
//   return `${FirstName} will retire after ${retirement} years`;
// }
// const myretireMent = ageretirement(2000,"suraj");
// console.log(myretireMent);




//////////////////////////////////////////VIDEO EXAMPLE
// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));




// ////////////////////////////////////// AGAIN MY EXAMPLE
// const logger = () => (
//     console.log("hello i'm suraj")
// )
// logger ();









///////////////////////////////////////
// Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
//   }

//   function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
//   }
  // console.log(fruitProcessor(2, 3));


///////////////////////////////////////////////////// MY EXAMPLE ON FUNTION CALL FUNTCION
// var held = userin => {
//   var i = 0;
//   while(i<=userin){
//     console.log("hello world")
//     i++;
//   }
// }
// const funcall = (userin) =>{
//   return held(userin)
// }
// const gettting = funcall(5);
// console.log(gettting);







///////////////////////////////////////
// Reviewing Functions
//   const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
//   }

//   const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years`);
//       return retirement;
//     } else {
//       console.log(`${firstName} has already retired 🎉`);
//       return -1;
//     }
//   }

//   console.log(yearsUntilRetirement(1991, 'Jonas'));
//   console.log(yearsUntilRetirement(1950, 'Mike'));










///////////////////////////////////////
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/


///////////////////////// ye mera hi h dubara kiya h mene

// const averageFinder = (a,b,c)=>{
//   const average = (a+b+c)/3;
//   return average;
// }
// const averagekoalas = averageFinder(23,34,27);
// const avreragedolphins = averageFinder(85,54,41);
// console.log(averagekoalas);
// console.log(avreragedolphins);
// const winNEr = (e,f) => {
//   if(e<=f/2){
//     console.log(`the winnner is that team whose average is ${f} and it is team dolphins`)
//   }else if(e/2>=f){
//     console.log(`the winnner is team whose average is ${e} and it is team koalas`)
//   }else{
//     console.log("no one wins");
//   }
// }
// const winnerteam = winNEr(averagekoalas,avreragedolphins);







/////////////////////////////////// SHAYAD VIDEO KA H YA HO SKKTA MENE HI KIYA H

// const calcAverage = () => {
//     const avgDolhins = 44 + 23 + 71 / 3;
//     const avgKoalas = 65 + 54 + 49 / 3;
//     console.log(`average of dolphins i s ${avgDolhins} && average of koalas is ${avgKoalas}`);
// }
// calcAverage();
// const checkWinner = (avgDolhins,avgKoalas) => {
//     if(avgDolhins / 2 > avgKoalas){
//         console.log(`winner is 🏆 team dohins`)
//     }else{
//         console.log(`winner is 🏆 team kolas`)
//     }
// }
// checkWinner();




// ye video ka h sayad 

// const calcAverage = (a,b,c) => (a + b + c)/3;
// let avreragedolphins = calcAverage(85,54,41);
// let averagekoalas = calcAverage(23,34,27);
// const checkWinner = (averagekoalas,avreragedolphins) => {
//   if (averagekoalas <= avreragedolphins/2){
//     console.log(`the winner is team Dolphins and its average score is ${avreragedolphins}`);
//   }else{
//     console.log(`the winner is team koalas and its average score is ${averagekoalas}`)
//   }
// }

// checkWinner(averagekoalas,avreragedolphins);













//////////////////////////////////////////////////////
//ARRAY : Array is data structure simply u can say that it is an container in which we can store elements and then fetch it
// const persons = ["suraj", "nagar", "aakash"];
// console.log(persons);
// console.log(persons[0]);
// console.log(persons[1]);
// console.log(persons[2]);
// console.log(persons.length);
// console.log(persons[persons.length-1]);
// persons[2] = "ajeet";                        ////// HERE WE REPLACE AAKASH WITH AJEET
// console.log(persons)





////////////////////////////////////////////// APPLYING LOOP IN ARRAY
// const person = ['Suraj','Altaf','Akash',"Deepak",'Ajeet','Nagar','Kundu','Rana','Vinay'];
// var i = 0;
// while(i<=person.length){
//   console.log(person[i]);
//   i++;
// }



// const ages = [1999,2000,2001,2002]

// const calcAge = (a) =>{
//   return 2023-a;
// }

// const neWage = [calcAge(ages[0]),calcAge(ages[1]),calcAge(ages[2]),calcAge(ages[3])]
// console.log(neWage);

// calcAge(ages);              //////it will return nan

// calcAge(ages[1])



// const Name = "thakur"

// const jonas = [Name,'hello',ages,(calcAge(ages[1])),'world',persons];
// console.log(jonas)





// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);









//////////////////////   BASIC ARRAY METHODS AND OPERATIONS

// PUSH METHOD ADD ELEMENTS AT THE END OF THE ARRAY  

// const persons = ["suraj", "nagar", "aakash"];
// persons.push("ajeet");                            //////// HERE PUSH IS METHOD OR FUNCTION 
// console.log(persons);


//////////// UNSHIFT METHOD USE TO ADD ELEMENTS AT THE BEGINING OF ARRAY
// persons.unshift("hello");
// console.log(persons);










// //////////////  NOW THE METHODS WHICH ARE USED TO REMOVE THE ELEMENTS
////////// POP METHOD REMOVE THE LAST ELEMENT OF THE ARRAY
// persons.pop();                     
///////////////////////////////////////////// HERE POP METHOD ALSO RETURNING SOMETHING ALSO
// const popedelemEnt = persons.pop();
// console.log(popedelemEnt)
// console.log(persons);



// NOW REMOVING ELEMENT FROM THE STARTING POINT OR AT THE BEGINING OF ARRAY
// SHIFT METHOD IS USED FOR THAT OPERATIONS

// const firstPoped = persons.shift();
// console.log(firstPoped);         //// we get suraj in both
// console.log(persons);








//////////////////////////// NOW INDEX OF ARRAY BY INDEX METHOD
// const persons = ["suraj", "nagar", "aakash"];
// console.log(persons.indexOf('suraj')); ////// it willreturn the value of suraj whether it is situated
// console.log(persons.indexOf('nagar')); ////// it willreturn the value of nagar whether it is situated





//////////////////////////////////////////// MODERN METHOD OF INDEXOF AND ITS IS ES6 METHOD AND ITS CALLED INCLUDES
// const persons = ["suraj", "nagar", "aakash"];
// console.log(persons.includes('suraj'));           /////// IT SHOWS THAT IS ELEMENT IS PERSENT OR NOT AND ITS OUT PUT WILL BE IN TRUE OR FALSE
// console.log(persons.includes("rakesh"))          ///// false



// const persons = ["suraj", "nagar", "aakash"];
// if(persons.includes('RAAKESH')){
//   console.log("you have a friend called suraj");
// }else{
//   console.log("you don't have a friend");
// }









///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// video wala example

// const billz = [125, 555, 44];
// const calcTip = bill => bill>=50 && bill<=300 ? bill * 0.15 : bill * 0.20;
// const tip = [calcTip(billz[0]),calcTip(billz[1]),calcTip(billz[2])]
// console.log(tip);
// const total = [tip[0]+billz[0],tip[1]+billz[1],tip[2]+billz[2]]
// console.log(total)













///////////////////////////////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////       OBJECTS INTRODUCTION
///////////////////////////////////  



const persons = {
  firstName  : "suraj",
  sirName: "singh",
  age: 23,
  height : '6ft'
}

// console.log(typeof person)
// console.log(person)


//////////////////////////// NOW SOME METHODS WHICH WE CAN PERFORM ON OBJECTS ARE  DOT VS BRACKET NOTATION BUT DOT ID BEST
// console.log(persons.firstname);
// console.log(persons["firstname"]);

// const namekey = "Name";
// console.log(person["first"+namekey])          //// it doesn't work with dot operator


// const userdata = prompt("what you want to search")      ////////// input le rh user se
// console.log(person[`${userdata}`])























/////////////////////////////////////////////////////////////////////////////
///////////////////////////  LOOPS AND ITS USING ////////////////////////////
/////////////////////////////////////////////////////////////////////////////


////// FOR LOOP

// const funllop = num => {
//   for(var i = 1 ; i<= num;i++ ){
//     console.log(`hello world ${i}`);
//   }
// }

// const heloohbd = funllop(10);
// console.log(heloohbd);



///////// WHILE LOOP

// const funllop = num => {
//   var i = 0;
//   while( i<= num){
//     console.log(`hello world ${i}`);
//     i++;

//   }
// }

// const heloohbd = funllop(10);
// console.log(heloohbd);






//////////////////////////////////// upgraded version of calculator

// const calcTip = function(bill){
//   return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.20;
// }

// const bills = [22,295,176,440,37,105,10,1100,86,52];
// const tips =[];
// const totals = [];

// for(let i = 0;i<bills.length;i++){
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip+bills[i]);
// }
// console.log(bills,tips,totals);

 



