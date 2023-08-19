// VALUES AND VARIABLES


// let Name = " suraj";
// console.log(typeof(Name));
// console.log(Name);



// Assignment First
// let country = "India";
// let contient = "Asia";
// let population = 150;
// console.log(country);
// console.log(contient);
// console.log(population);


// Assignment Two :

// let isIsland = false;
// let langauge ;


// console.log(typeof isIsland );
// console.log(typeof country );
// console.log(typeof contient );
// console.log(typeof population );
// console.log(typeof langauge );








// DATA TYPES



// let javscriptfun = true;



// console.log(typeof true);
// console.log(typeof javscriptfun);
// console.log(typeof 2);
// console.log(typeof "jonas");
// console.log(typeof "yes");

// let Num = 34;
// console.log( typeof Num);


// javscriptfun = "yes";
// console.log(typeof javscriptfun)















// let const and var THAT IS THREE DIFERRENT WAY TO DECLARE AN VARIABLE
// var age = 30;
// console.log(age + " old age");     // OUTPUT WILL BE:- 30 old age
// age = 31;
// console.log(age + " new age");     // OUTPUT WILL BE:_ 31 new age

// let agis = 30;
// console.log(agis + " old age");     // OUTPUT WILL BE:- 30 old age
// agis = 31;
// console.log(agis + " new age");     // OUTPUT WILL BE:_ 31 new age

// const age = 30;
// console.log(age + " old age");     // OUTPUT WILL BE:- 30 old age
// age = 31;
// console.log(age + " new age");     // OUTPUT WILL BE:- ERROR BEACUSE CONSTANT DOSEN'T CHANGE OR VARY



// var HELO;                            // WE CAN UDEFINED VAR AND LET BUT CAN NOT DO SAME WITH CONST
// console.log(HELO)
















// OPERATORS AN OPERATOR ALLOW TO TRANSFORM THE VALUE AND COMBINE THE MULTIPLE VALUES AND REALLY DO ALL KINDS OF WORK WITH VALUES SUCH AS - + = / %,ETC 

// var Aplio = 2036-2030;
// console.log(Aplio);                            // OUTPUT WILL BE 6


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas);
// console.log(ageSarah);
// console.log((ageSarah + ageJonas)/2);


// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// let x = 10 + 5;
// x += 10;                         // x = 15 and x += 10 => 15 + 10 => 25
// x-=10;                           // x = 25 and x -=10 => 25-10 => 15
// x *= 4;                          // x = 15 and x*=4 => 15*4 => 60
// x --;                           // one decrement => 59
// x ++;                            // one increment  => 60
// y=60;
// z = 30 ;
// console.log(x);
// console.log(x>y);              // false both are equal
// console.log(x<y);              // false both are equal
// console.log(x<=y);              // true less than or equal h idhr mtlb less than ni h tho equal tho h 
// console.log(x>=y);              // true less than or equal h idhr mtlb less than ni h tho equal tho h 
// console.log(x/2>=z);              //true



// let m = "6";
// let n = 6 ;
// console.log(m == n);                   //true ayega kyuki bss output same h lekin dtat type
// console.log(m===n);                     // false because data is same but data type is not same
// console.log(typeof m);                  // DATA type would be string
// console.log(typeof n);                  // data type would be number





















////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/



// const MarksWieght = 78 ;
// const MarksHeight =  1.69 ;

// const JohnWieght = 92;
// const JohnHeight = 1.95;


// const BmiMarks = MarksWieght / MarksHeight ** 2;
// const BmiJohn = JohnWieght / JohnHeight ** 2;

// var markHigherBMI = BmiJohn < BmiMarks;
// console.log(BmiJohn,BmiMarks,markHigherBMI);











// STRINGS
// const firstname = "suraj";
// const job = " developer";
// const birthyear = "2000";
// const year = "2023";
// const suraj  = " I'm " + firstname + ",a" + job + " born in " + birthyear;
// const surajsingh  = " I'm " + firstname + ",a" + job + " & i'm  " + (year-birthyear) + " year old.";
// console.log(suraj);
// console.log(surajsingh);









// IF ELSE CONDITION


// age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

//  const age = 18;

//  if (age>=21){
//     console.log("Suraj is an bad boy " ,{age})
//  }else{
//     console.log(` suraj is awseome and its age is ${age}`)
//  }




// PROMPT FUNCTION S USE TO TAKE INPUT BY USERS

// const year = +prompt("enter your birth year");
// if(year<=2000){
//     console.log(`the person is from 20th century as it birth year is ${year}`)
// }else{
//     console.log(`the person is from 21th century as it birth year is ${year}`)
// }




////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/


// const MarksWieght = 78 ;
// const MarksHeight =  1.69 ;

// const JohnWieght = 92;
// const JohnHeight = 1.95;


// const BmiMarks = MarksWieght / MarksHeight ** 2;
// const BmiJohn = JohnWieght / JohnHeight ** 2;

// if(BmiJohn>BmiMarks){
//     console.log(`John's BMI (${BmiJohn}) is higher than Mark's BMI (${BmiMarks})`)
// }else{
//     console.log(`Mark's BMI (${BmiMarks}) is higher than John's BMI (${BmiJohn})`)
// }







// TYPE CONVERISON AND COERCION


// TYPE CONVERSION
// const inputyear = '1991';
// console.log(inputyear + Number(18));

// console.log(Number(18));                        // IT WILL GIVES 18 
// console.log(Number('jonas'));                    // IT WILL GIVES NAN THAT  IS NOT A NUMBER


// TYPE COERCION

// console.log("i am " + 23 + " year old" );              // HERE + OPREATOR TRIGGRED A NUMBER AND CONVERTED IT INTO STRING




//  FALSY AND TRUTH VALUES
//  THERE ARE ONLY FIVE FALSY VALUE THAT ARE : 0 , "EMPTY STRING" , UNDEFINED , NULL, NaN


// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean({}));




// const money = 0;
// if(money){
//     console.log("don't spend it all");
// }else{
//     console.log(" you should get a job");
// }


// let height ;
// if(height){
//     console.log("yay height is defined");
// }else{
//     console.log("height is not defined")
// }





// AND OR OPERATORS


// const drivingLIcense = true;
// const goodVision  = true;
// if(drivingLIcense && goodVision){
//     console.log(`you can drive`);
// }else{
//     console.log("you can't drive");
// }



// const drivingLIcense = false;
// const goodVision  = true;
// if(drivingLIcense | goodVision){
//     console.log(`you can drive`);
// }else{
//     console.log("you can't drive");
// }






////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/


// const Dolphins = 109 + 95 + 123;
// const Koalas = 109 + 95 + 123;
// const averdolphins = Dolphins/3;
// const averkoalas = Koalas/3;
// if (averdolphins>averkoalas && averdolphins >= 100){
//     console.log(`the 🏆 winner is DOLPHINS and its Average score is ${averdolphins}`);
// }else if( averdolphins === averkoalas && averdolphins>=100 && averkoalas >= 100){
//     console.log(`th 🏆 winner is both because score of both is ${averdolphins}`);
// }else{
//     console.log(`the 🏆 winner is KOALAS and its Average score is ${averkoalas}`);
// }











// SWITCH CASESS

// const day = +prompt("enter a day from as acording to 1 to 7 ")

// switch(day){
//     case 1: console.log("monday");
//     break;
//     case 2: console.log("tuesday");
//     break;
//     case 3: console.log("wednessday");
//     break;
//     case 4: console.log("thrusday");
//     break;
//     case 5: console.log("friday");
//     break;
//     case 6: console.log("saturday");
//     break;
//     case 7: console.log("sunday");
//     break;
//     default: console.log("in valid day");
    
// }












/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/


// const bill = 300;
// let tip ;
// if(bill >= 50 && bill<= 300){
//     tip = bill * 0.15;
//     console.log(tip);
// }else{
//     tip = bill * 0.20;
//     console.log(tip);
// }

// const bill = 300;

// let tip = bill>=50 && bill <= 300 ? bill*0.15 : bill * 0.20;
// console.log(tip);







// THE END OF SECTION 1 AND SECTION TWO




