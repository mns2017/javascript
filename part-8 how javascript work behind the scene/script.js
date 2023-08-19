// 'use strict';




////////////////////////////////scoping

// ///////////// global 
// const Golbelvar = "hello world";



// /////////////////// function scope

// function logger(){
//     const Examp = "helloworld2";
//     console.log(Golbelvar,Examp);
// }
// // console.log(Examp);                       ////////////// it willon accessible in function only
// logger();



// ////////////////////////////////// block scope

// function blockExamp(){
//     if(Golbelvar){
//         const blockVAr = "block example";
//         console.log(blockVAr,Golbelvar);
//     }
//     // console.log(blockVAr);                       //////////////// we can access blockVAr here because its from another block
// }

// blockExamp();

















// function calcAge(birthyear){
//     const age = 2023 - birthyear;
//     function printAge(){
//         const ouPut = `${firstname}, you are ${age}, born in ${birthyear}`;
//         console.log(ouPut);
        
//         if(birthyear >= 1981 && birthyear <= 1996){
//             const str = `oh, and you're a millenial, ${firstname}`;
//             console.log(str);
//         }
//     }
//     printAge();
//     return age;
// }
// const firstname = 'suraj';
// calcAge(2000);


// // console.log(age);  /////////////////////////////////////////////////////////////// it will throw error because of scooping




///////////////////////////////////////////////////////// var envivronment




// console.log(me);                     /// undefined                ///////////////////////////////////////////////////////////////
// console.log(job);                 /// can't access                  ///////////////////////////// it also throw error bhai
// console.log(year);               /// cant't access                  ////////////////////////////////////////////////////////////////



// var me = 'suraj';
// let job = 'fullstack developer';
// const year = 2000;


////////////////////// NOW DOING WITH FUNCTION
// console.log(addDecl(2,3));       //////EXECUTES


// console.log(addexpr(3,4));         //////////////////// throw error


// function addDecl(a,b){
//     return a + b;
// }

// const addexpr = function(a,b){
//     return a + b;
// }
// console.log(addexpr(3,4));              //////////// here worked



// console.log(addArrow(2,4));             /////////////////////// ERROR
// const addArrow = (a,b) => a+b;
// console.log(addArrow(2,4));

