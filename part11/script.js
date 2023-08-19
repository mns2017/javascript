'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
// Data
const account1 = {
  owner: 'Suraj Singh',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Mohit Nagar',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Akash Singh',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Owais Altamash',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//////////////////////////////////////////////////////////////
// let arr = ['a','b','c','d','e'];

//// slice method
// console.log(arr.slice(2));       ////////////////////// output = c , d , e 
// console.log(arr.slice(1));      //////////////////////  output = b , c , d , e
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,-2));

//// splice method
// console.log(arr.splice(1))           ////////////////////////////////    (4) ['b', 'c', 'd', 'e']
// console.log(arr);                   ////////////////////////////////     ['a']
// arr.splice(1,2);
// console.log(arr);


/////////////////////// REVERSE METHOD 
// arr = ['a','b','c','d','e'];
// const arr2 = ['j','i', 'h','g','f'];
// console.log(arr2.reverse());
// console.log(arr2);

////////////////////////////////// CONCAT METHOD; COMBINING THE TWO DIFFERENT ARRAY
// const letters = arr.concat(arr2);
// console.log(letters);

//////////////////////////////////////////////////////////////////////////////////// 
////////////////////////     THE NEW ARRAY METHOD (AT)   ///////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// const arr = [23,11,64];
// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr[arr.length-1]);                      /////////////////////// important h dekhna


///////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////    loooping with for each method    ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements){
//     if(movement>0){
//         console.log(`you deposited ${movement}`);
//     }else{
//         console.log(`you withdraw ${Math.abs(movement)}`);
//     }
// };


/////////////////////foreeach method
// movements.forEach(function(movement){
//     if(movement>0){
//         console.log(`you deposited ${movement}`);
//     }else{
//         console.log(`you withdraw ${Math.abs(movement)}`);
//     }
// })


// movements.forEach(function(mov,i,arr){
//     if(mov>0){
//         console.log(`movement ${i+1} : you depsoited ${mov}`);
//     }else{
//         console.log(`movement ${i+1} : you withdrew ${Math.abs(mov)} `);
//     }
// })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////         FOR EACH WITH MAPS AND SET        ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value,key,map){                                        ////////////////////////////  USD:United States dollar
//     console.log(`${key}:${value}`);                                                ////////////////////////////  EUR:Euro
// })                                                                                 ///////////////////////////   GBP:Pound sterling



////////////// USING WITH SET
// const currenciesset =  new Set(
//   ['USD','GDP','USD','EUR']
// );
// console.log(currenciesset);
// currenciesset.forEach(function(value,map,key){
//   console.log(`${key} : ${value}`);
// })









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////    CODING CHALLENGE     ////////////////////////////////////////////////
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function(dogsJulia,dogsKate){
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0,1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);



//   dogs.forEach(function(dog,i){
//     if(dog>=3){
//       console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`)
//     }else{
//       console.log(`Dog number ${i+1} is still a puppy 🐶`)
//     }
//   })
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);






//////////////////////////////////////////////////////// DATA TRANSFOMRATION MAP , FILTER , REDUCE
/////////////// MAP METHOD 
//// IT GIVES BRAND NEW ARRAY 

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurTousd = 1.1;
// const movementsUsd = movements.map(function(move){
//   return move * eurTousd;
//   // return 23 ;                                         //////////////////////////////  [23, 23, 23, 23, 23, 23, 23, 23]
// });

// console.log(movements);
// console.log(movementsUsd);



// const movementsUsdfor = [];
// for(const mov of movements) movementsUsdfor.push(mov * eurTousd);
// console.log(movementsUsdfor);

// const arr = ['2','3','4','5'];
// const va = 2;
// const hogya = arr.map(function(heloo){
//   return heloo * va ;
// })
// console.log(arr);
// console.log(hogya);


// /////////// call back function by arrow function
// // const arrfun = arr.map(bolo => {return bolo * va});
// // console.log(arrfun);


// const movementdes = movements.map((mov,i,arr)=>{
//   if(mov>0){
//     return `movement ${i+1} : you depsoited ${mov}`;
//   }else{
//     return `movement ${i+1} : you withdrew ${Math.abs(mov)} `;
//     }
// });

// console.log(movementdes);





////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////    COMPUTING USERNAME   /////////////////////////////

// const user = 'Suraj Singh';

// const createUsernames = function(accs){
//   accs.forEach(function(acc){
//     accs.username =  acc.owner.toLowerCase().split(' ').map(name=>{
//       return name[0];
//     }).join('');
//   })
// };
// createUsernames(accounts);
// console.log(accounts);










///////////////////////////////////////// MERA BNAYA HUA 
// const names = "Suraj Singh";
// const userNam = (nam) => nam.toLowerCase().split(" ").map(name => name[0]).join('');
// console.log(userNam(names));






//////////////////////////////////////////////////////////////////////////
////////////////////////   THE FILTER METHOD   //////////////////////////


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function(mov){
//   return mov >0 ;
// });
// console.log(movements);
// console.log(deposits);


// const dekhteh = movements.filter(function(getall){
//   return getall <0;
// })
// console.log(dekhteh);


// const depositsForPositive = [];
// const depositsForNegative = [];
// for(const mov of movements) if (mov>0) depositsForPositive.push(mov) 
// console.log(`this all are positive ${depositsForPositive}`)


////////////////////////////////// small challenge
// const withdrawals = movements.filter(function(mov){
//   return mov < 0;
// })
// console.log(withdrawals);



// const withdrawals2 = []
// for(const hob of movements){ 
//   if(hob<0){
//     withdrawals2.push(hob);
//   };
// }
// console.log(withdrawals2); 













//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////               Reduce Method 
///////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// /// acc 'accumulator' is like snowball
// const balance = movements.reduce(function(acc,cur,i,arr){             //////////////////////////// acc ko age hi rkhna h 
//   console.log(`Iteration ${i} : ${acc}`)
//   return acc + cur;
// }, 0);                                                             ////////////////////////// acc ki initial or starrting value h 0 or hum kuch bhi rkh skte h
// console.log(balance);



///////  doing same thing usingh for loop 

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);               /// same result as we done in upper by reduce method


// /////////////////////// converting into arrow function
// const checkbalance =  movements.reduce((acc,curr,i,arr)=>{return acc + curr},0)
// console.log(checkbalance);


///////////////////////////// ---------------------->  ANOTHER USE OF REDUCE MTEHOD
////////////////------------------------------>  MAXIMUM VALUE BUT FIRST YOU HAVE UNCOMIT THE LET AND MOVEMENTS

// const max = movements.reduce((acc,mov)=>{
//   if(acc>mov){
//     return acc;
//   }else{
//     return mov;
//   }
// },movements[0]);
// console.log(max);










//////////////////////////coding for application
// const calcDisplayBalance = function(movements){
//   const balance = movements.reduce((acc,mov)=> acc + mov ,0)
//   labelBalance.textContent = `${balance} EUR`;
// }
// calcDisplayBalance(account1.movements);















///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function(ages){
//   const humanAges = ages.map(age => age <= 2 ? 2*age : 16 + age*4)
//   console.log(humanAges);
//   const aduls = humanAges.filter( age => age >=18)
//   console.log(aduls);

//   const average = aduls.reduce((acc,age)=>acc+age,0) / aduls.length ;
//   return average;
// }
// calcAverageHumanAge(data1);

// const avg1 = calcAverageHumanAge(data1);
// const avg2 = calcAverageHumanAge(data2);
// console.log(avg1,avg2)


///////////////////////////////////////////////// self made
// const calcAverageH












///////////////////////////////////////////////// THE MAGIC OF CHAINING METHOD;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurtousd = 1.1;
// // /// pipeline
// const totalDeposit = movements.filter(mov => mov >0).map(mov => mov*eurtousd).reduce((acc,mov) => acc+mov,0)
// console.log(totalDeposit);





//////////////////////////////////////////// aplication coding
// const calcDisplaySummary = function(movements){
//   const incomes = movements.filter(mov => mov<0).reduce((acc,mov)=>acc+mov,0);
//   labelSumIn.textContent = `${incomes}💶`
// }
// calcDisplaySummary(account1.movements);













//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////              THE FINF METHOD

//////////////////// simillar like filter but return first of type 

// const account = accounts.find(acc=> acc.owner === "Suraj Singh");
// console.log(account);

// // another example
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstwithdra = movements.find(mov => mov<0);
// console.log(firstwithdra);


// const obj = [account1, account2, account3, account4];
// const hello = obj.find(acc=>acc.owner === 'Suraj Singh');
// console.log(hello);














/////////////////////////////////////////////////////////////////////////////
////////////////////// login function
// let currentAccount;
// btnLogin.addEventListener('click',function(e){
//   e.preventDefault();
//   console.log("login")

  // currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
//   console.log(currentAccount);
// })











///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////     TRANSFER FUNCTION


// btnTransfer.addEventListener('click',function(e){
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receveracc = accounts.find(acc => acc.username === inputTransferTo.value);
//   if (amount > 0 && currentAccount.balance >= amount && receveracc?.username !== currentAccount.username ){
//     // console.log('transfer valid')
//     currentAccount.movements.push(-amount);
//     receveracc.movements.push(amount);
//   }
// })




















///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////                           FINDEX METHOD
////////////////// close cousin of find method that is findex method
// btnClose.addEventListener('click',function(e){
//   e.preventDefault();

// })

























////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////       SOME AND EVERY METHOD             /////////////////////////////

////////////////////////////////////////// WE USE IT AS CONDITION BUT SAME AS INCLUDE METHOD
//////////// include 
// console.log(account1.movements);
// const includer = account1.movements.includes(-130); 

// /////////////////// some method 
// const dekho = account1.movements.some(acc=> acc>0);
// console.log(dekho);


// /////////////// every method  its checks all and every conditions
// const everdekho = account1.movements.every(acc=> acc>0);
// console.log(everdekho);

// const everdekho1 = account4.movements.every(acc=> acc>0);
// console.log(everdekho1);























//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////     FLAT AND FLAT MAP METHOD        ////////////////////////////////////

// const arr = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr.flat());      /////////// out put be [1, 2, 3, 4, 5, 6, 7, 8, 9]


// const arr2 = [[[1,2],3],[[4],5,6],[[7,8,9]]];
// console.log(arr2.flat(2));    /////////////// out put be  [1, 2, 3, 4, 5, 6, 7, 8, 9]   here in flat(2) we state the array contains two array in it



///////////////////// NOW FLAT MAP METHOD 
// const mapdekho = accounts.map(acc => acc.movements);
// console.log(mapdekho);                 /////////////////// output be [Array(8), Array(8), Array(8), Array(5)]

// const maptoflat = mapdekho.flat();
// console.log(maptoflat);                /////////////////    output be [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]


// const sumofall = maptoflat.reduce((acc,mov) => acc+mov,0);
// console.log(sumofall);                 //////////////////////    output be  17840



// ///////////////////////// let reduce it in oneline
// const reduceall = accounts.map(acc=> acc.movements).flat().reduce((acc,mov)=> acc+mov,0);
// console.log(reduceall);               ////////////////////        output be  17840



//////////////////////////////////// ORIGINAL FLAT MAP METHOD
// const flat_map = accounts.flatMap(acc=> acc.movements);
// console.log(flat_map);                ////////////////////           [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
















////////////////////////////////////////////////// SORTING WITH ARRAYS
///////////////////////////////////////////     WE USE SORT METHOD FOR SORTING THE ARRAY


////////strings ke saath sorting in according to alphabet
// const owners = ['Suraj','Akash','Owais','Nagar','Deepak'];
// console.log(owners.sort());           //////////////////////////////// ['Akash', 'Deepak', 'Nagar', 'Owais', 'Suraj']
// console.log(owners);           /// we get updated array

/////////////////// number ke sath sorting according to number        
// const numist = [1,10,3,5,8,3,2,6,9,7,4];
// // console.log(numist.sort());             ////////////////////////////// [1, 10, 2, 3, 3, 4, 5, 6, 7, 8, 9]
// const pursort = numist.sort((a,b)=> {
//   if(a>b) return 1;
//   if(a<b) return -1;
// })
// console.log(pursort);


// ////////////////// asscendin order me
// const ascend = numist.sort((a,b)=> a-b);
// console.log(ascend);

// ////////////////////// descending order me
// const descend = numist.sort((a,b)=> b-a);
// console.log(descend);













/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////         MORE WAYS TO CREATE ARRAY       /////////////////////////////

/////////////////////// CRETING BY NORMAL  && fill method
// const x = [1,2,3,4,5,6,7];
// console.group(x);

// const newone = new Array(7);
// console.log(newone);               //// array contains 7 empty elements

// // const fillx = newone.fill(1);
// // console.log(fillx);                ///// seven times 1

// const fillx1 = newone.fill(1,3,5);
// console.log(fillx1);   //////////// index 0-2 will empty then 3 and 4 will be 1 and then rest 5-6 will again empty

// fillx1.fill(23,2,6);
// console.log(fillx1);




/////// from method
// const y = Array.from({length:7},()=>1);
// console.log(y);                                     /// seven times 1

// const z = Array.from({length:7},(curr,i)=>i+1);
// console.log(z);