'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],


  order : function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  },

  orderDelivery: function({
    starterIndex = 1,mainIndex = 0,time="20:00",address
  }){
    console.log(`order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  }
  ,

  orderPasta : function(ing1,ing2,ing3){
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};












////////////////////////////////////////////////////////////////////////// destructuring the objects
// restaurant.orderDelivery({
//   time:"22:30",
//   address: "Via Del Sole, 21",
//   mainIndex : 2,
//   starterIndex : 2,
// })

// restaurant.orderDelivery({
//   address:"Via Del Sole, 21",
//   starterIndex :1,
// })








// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c= arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z);                 //////////////////    ===============> 2 3 4
// console.log(a,b,c);                //////////////////     ===============> 2 3 4
// console.log(arr);                   /////////////////     ===============> (3) [2, 3, 4]



// const [first , second] = restaurant.categories;
// console.log(first,second)                          /////////////////////////////// object ke array me se 1 or 2 nikala




//////////////////////////// SWITCHING VARIABLES
// let [main , secondary] = restaurant.categories;
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);



// let [main , secondary] = restaurant.categories;
// console.log(main,secondary);



// console.log(restaurant.order(2,2));








///////////////////////////////////////////////////////////////// object destructuring by curely braces


// const {names,openingHours} = restaurant;
// console.log(names);




////////////////////////////////  for api call we use data in object form
// const {names:restaurantName,openingHours:hours} = restaurant
// console.log(restaurantName,hours);
// const {menu=[], starterMenu:starter} = restaurant;
// console.log(menu,starter);




////////// mutating variables 
// let a = 111;
// let b = 999;
// const obj = {a:23,b:27,c:14};
// ({a,b} = obj);                             ///// bracket for removing error ()
// console.log(a,b);




///// DESTRUCTURING NESTED OBJECT
// const {fri:{open:o,close:c}} = openingHours;
// console.log(o,c);




















//////////////////////////////////////////////////////////// SPREAD OPERATOR ...


// const arr = [7,8,9];
// const badNewarr = [1,2,arr[0],arr[1],arr[2]];
// console.log(badNewarr);


// const newArr = [1,2,...arr];               /////////////////////////// HERE WE USE THE SPREAD OPERATOR
// console.log(newArr);

// console.log(...newArr);                 ///////////////////////////// IT WILL RETURN THE INDIVIDUA VALUE OF ARRAY
// console.log(1,2,7,8,9);


// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// console.log(...newMenu);




//////////////////////////////// two main uses of spread operator and two main purpose on  use spread operator
//////////// COPY ARRAY
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

//////////// JOIN 2 ARRAYS
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menu);


////// ITERABLES : arrays,strings,maps,sets . not objects
// const str = 'Suraj';
// const letters = [...str,' ','S.'];
// console.log(letters);
// console.log(...str);
// console.log("Suraj","o")


////////////////////////////////////////////////real world example
// // const ingredients = [prompt("let's make pasta ingredient1?"),prompt("let's make pasta ingredient2?"),prompt("let's make pasta ingredient3?")]
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);





/////////////////////////////// OBJECTS
// const newRestaurant = {
//   foundedIn:1998,...restaurant,
//   founder:'GauriSHankar'
// }
// console.log(newRestaurant);


// const restaurantCopy = {...restaurant};
// restaurantCopy.names = "suraj singh";
// console.log(restaurantCopy.names);
// console.log(restaurant.names)
















//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////  REST PATTERNS AND PARAMETERS   /////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////



// const arr = [1,2,3,...[3,4]];
// const [a,b,...others] = [1,2,3,4,5];
// // console.log(arr);
// console.log(a,b,...others); 



// const dekhte = [1,2,3,4,5];
// const [y,x,...rest] = dekhte;
// console.log(y,x,...rest);









