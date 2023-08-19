// 'use strict';
// ///////////////////////////////// create object with constructor function  with instance properties

// const person = function(name, birthyear){
//     this.name = name;
//     this.birthyear = birthyear;

//     /////////////// we should never do this 
//     // this.calcAge = function(){
//     //     console.log(2023-birthyear);
//     // }
// };

// const p1  = new person('suraj',2000);
// console.log(p1); 

// const p2 = new person('nagar',2001);
// const p3 = new person('akash',2001);
// console.log(p1,p2,p3);

// console.log(p1 instanceof person);               ////// it willl throw true

// const p = 'jay';
// console.log(p instanceof person);                 /////////////// it will throw false beacuse it beacomes by declaration not by consturctor function



// //////////////////////// PROTOTYPE
// console.log(person.prototype)
// person.prototype.calAge = function(){
//     console.log(2023-this.birthyear);
// };                                                            ///////////////// it will shows calcAge function and method

 
// p1.calAge();                                          ////////////////// 23
// p2.calAge();
// p3.calAge();

// //////////////////////////// lets find the perototype of p1
// console.log(p1.__proto__);                 //////////////////////  {calAge: ƒ, constructor: ƒ}
// console.log(p1.__proto__ === person.prototype);                 //////////////////////   true


// console.log(p.__proto__);                 //////////////////////   String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}


// // console.log(person.prototype.isPrototypeOf(p1));
// // console.log(person.prototype.isPrototypeOf(p2));
// // console.log(person.prototype.isPrototypeOf(p3));
// // console.log(person.prototype.isPrototypeOf(person));


// ////////////////// prototype of linked object
// person.prototype.species = 'homo sapines';
// console.log(p1.species,p2.species);               ///////////////// homo sapines homo sapines
// console.log(p1.hasOwnProperty('name'));            ////////////////////  true
// console.log(p1.hasOwnProperty('species'));          /////////////////// false 









/////////////////// try

// const car  = function(type,speed){
//     this.type = type;
//     this.speed = speed;
// }
// car.prototype.calcAcc = function(){
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }
// car.prototype.calcbrake = function(){
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// const bmw = new car('BMW',120);
// console.log(bmw);

// bmw.calcAcc();
// bmw.calcAcc();
// bmw.calcAcc();

// bmw.calcbrake();
// bmw.calcbrake();
// bmw.calcbrake();


// navigator.geolocation.getCurrentPosition(function(position){
//     console.log(position)
// })



////////////////////////////// CLASS EXPRESSION 
// const personcalss = class{

// }



/////////////////////////// class declaration 
// class personclass{
//     constructor(firstname, birthyear){
//         this.firstname = firstname;
//         this.birthyear = birthyear;
//     }
//     //// we can add or write method here 
//     calcAge(){
//         console.log(`your age is ${2023-this.birthyear}`)
//     }
// }

// /////////////// we can also add prototype method manually 
// personclass.prototype.greet = function(){
//     console.log(`hey ${this.firstname}!`);
// }

// const person1 = new personclass("suraj",2000)
// person1.calcAge();
// console.log(person1);
// console.log(person1.__proto__ === personclass.prototype);                /////////// true
// person1.greet();













/////////////////////////////////////////// SETTERS AND SETTERS IN OOP 
/////////// THEY ARE MAINLY AN FUNCTION FOR SET AND GET THE VALUES

// const account1 = {
//     name : 'Suraj Singh',
//     movements : [200,530,120,300],


//     //////////////////////////////// to get value
//     get latest(){
//         return this.movements.slice(-1).pop();
//     },

//     ////////////////////////// to set value
//     set enwmov(mov){
//         return this.movements.push(mov);
//     }
// }
// console.log(account1.latest);
// account1.enwmov = 354;
// console.log(account1.movements);


////////////////// using it in our upper class
// class personclass{
//     constructor(fullname,birthyear){
//         this.fullname = fullname;
//         this.birthyear = birthyear;
//     }

//     get Age(){
//         return 2023- this.birthyear;
//     }

//     set fullname(name){
//         if(name.includes(' ')) this.__fullname = name;
//         else alert(`${name} is not fullname`)
//     }

//     static hey(){
//         console.log('hey there 👋');
//     console.log(this)
//     }
// }

// const person1 = new personclass('suraj singh',2000);
// console.log(person1);
// // console.log(person1.Age);
// // console.log(person1.fullname);



// ///////////////////////////////// static method without prototype
// // personclass.hey = function(){
// //     console.log('hey there 👋');
// //     console.log(this)
// // }
// personclass.hey();

// ///////////// but we can't do like this
// // person1.hey();        ///////////////// it will throw error because here hey function is not the prototype function










/////////////////////////////////////////////////////// OBJECT.CREATE

// const personProto = {
//     calAge(){
//         console.log(2023-this.birthyear);
//     },

//     init(name,birthyear){
//         this.name = name;
//         this.birthyear = birthyear;
//     }
// };


// const linked = Object.create(personProto);
// console.log(linked);
// linked.name = 'Suraj Singh';
// linked.birthyear = 2000;
// console.log(linked);
// linked.calAge();


// const perosn1 = Object.create(personProto);
// perosn1.init('suraj Singh',2000);
// console.log(perosn1);
// perosn1.calAge();























/////////////////////////////////// INHERITANCE BETWEEN CLASSES AND CONSTRUCTOR

// const perSon = function(name,birthyear){
//     this.name = name;
//     this.birthyear = birthyear;
// }

// perSon.prototype.clcAge = function(){
//     console.log(2023-this.birthyear);
// }


// const student = function(name,birthyear,course){
//     // this.name = name;
//     // this.birthyear = birthyear;
//     perSon.call(this,name,birthyear)              ///////////////////// we normally call the function of perSon with this 
//     this.course = course;
// }

// student.prototype.introduce = function(){
//     console.log(`hy my name is ${this.name}`);
// }


// ///////////////// linking the prototypes
// student.prototype = Object.create(perSon.prototype);
// console.log(student.prototype);

// const s1 =  new student('suraj singh',2000,'computer science');
// console.log(s1);
// // s1.introduce();
// s1.clcAge();










///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();


///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();


///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  // BUG in video:
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);
  
  // FIX:
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();


///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/






/////////////////////////////////////////////// inheritance  of classes with Es6 clasess or lecture

// class PersonCl {
//     constructor(fullName, birthYear) {
//       this.fullName = fullName;
//       this.birthYear = birthYear;
//     }
  
//     // Instance methods
//     calcAge() {
//       console.log(2037 - this.birthYear);
//     }
  
//     greet() {
//       console.log(`Hey ${this.fullName}`);
//     }
  
//     get age() {
//       return 2037 - this.birthYear;
//     }
  
//     set fullName(name) {
//       if (name.includes(' ')) this._fullName = name;
//       else alert(`${name} is not a full name!`);
//     }
  
//     get fullName() {
//       return this._fullName;
//     }
  
//     // Static method
//     static hey() {
//       console.log('Hey there 👋');
//     }
// }

// class StudentCl extends PersonCl {
//     constructor(fullname,birthYear,course){
//         super(fullname,birthYear);
//         this.course = course;
//     }
//     introduce(){
//         console.log(`my name is ${this.fullName} and i study ${this.course}`);
//     }
// }

// // StudentCl.prototype = Object.create(PersonCl.prototype);

// const person1 = new StudentCl('suraj singh',2000,'btech');
// console.log(person1);
// person1.introduce();
// console.log(person1.fullName);
// person1.calcAge();





// Inheritance Between "Classes": Object.create

// const PersonProto = {
//     calcAge() {
//       console.log(2023 - this.birthYear);
//     },
  
//     init(firstName, birthYear) {
//       this.firstName = firstName;
//       this.birthYear = birthYear;
//     },
// };
  
// const steven = Object.create(PersonProto);
  
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// };
  
// StudentProto.introduce = function () {
//     // BUG in video:
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
    
//     // FIX:
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
  
// const jay = Object.create(StudentProto);
// jay.init('Suraj Singh', 2000, 'Computer Science');
// jay.introduce();
// jay.calcAge();






// /////////////// another class example
// class Account {
//     constructor(owner,currency,pin){
//         this.owner = owner;
//         this.currency = currency;
//         this.pin = pin;
//         this.movements = [];
//         this.locale = navigator.language;                    /// ye language ko guess kr rh h 
         
//         console.log(`Thanks for opening an account, ${owner}`);
//     }

//     deposit(val){
//         this.movements.push(val);
//     }

//     withdraw(val){
//         this.deposit(-val);
//     }
// }

// const acc1 = new Account('suraj singh','EUR',1111);
// // acc1.movements.push(250);
// // acc1.movements.push(-100);
// acc1.deposit(250);
// acc1.withdraw(100);

// console.log(acc1);













///////////////////////////////////// ENCAPSULATION AND DATA PRIVACY