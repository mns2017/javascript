// 'use strict';


// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// for(let i = 0; i < btnsOpenModal.length; i++){
//     btnsOpenModal[i].addEventListener("click",function(){
//         modal.classList.remove("hidden");                        ////////////////////////// we use classlist properties in which itself have many  methods or propertise by which acn manipulate the css of html
//         overlay.classList.remove("hidden");                      ////////////////////////// here we use the overlay function or method to make blurry effect when we click on button the side window will open with blur effect
//         // modal.style.display = "block";                              /////////////////////////// here we can also use it but in upper we learn about classlist properties to manipulate the class of html
//     });
// }




// /////////////////////////////////////////////////// to close the modal window 
// // btnCloseModal.addEventListener("click",function(){
// //     modal.classList.add('hidden');
// //     overlay.classList.add("hidden");
// // })



// //////////////////////////////////////////////////// to close model window by click anywhere
// // overlay.addEventListener("click",function(){
// //     modal.classList.add('hidden');
// //     overlay.classList.add("hidden");
// // })




// //  but we seeem that we use the same code two times and we need two optimize them

// const closeModel = function(){
//     modal.classList.add('hidden');
//     overlay.classList.add("hidden");
// }




// //////////////////////////////////////////// now optimize code will be

// btnCloseModal.addEventListener('click',closeModel);

// overlay.addEventListener("click",closeModel);





// //////////////////////////// closing the modal window by esc button
// document.addEventListener('keydown',function(e){
//     // console.log(e.key);
//     if(e.key === "Escape"){
//         if(!modal.classList.contains('hidden')){
//             closeModel();
//         }
//     }
// })



































// ////////////////////////////////////////////////////////////////////////////////// Again optimized by me agr ye smjh me na aye tho upr wala smjhna or ye aajayega


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//////////////////////////////////////////// function for opening the modal window 
const OpenModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
////////////////////////////////// function for making close effect for modal window
const closeModel = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
//////////////////////////////////// for opening modal window
for(let i = 0 ; i < btnsOpenModal.length ; i++){
    btnsOpenModal[i].addEventListener('click',OpenModal);
};
///////////////////////// for closing the modal window
btnCloseModal.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);
////////////////////////// closing the modal window by esc button
// document.addEventListener('keydown',function(e){
//     console.log(e.key);
//     if(e.key === "Escape"){
//         if(!modal.classList.contains('hidden')){
//             closeModel();
//         }
//     }
// })

///////////////////////////////// function to open the modal window by pressing the enter key
document.addEventListener('keyup',function(e){
    console.log(e.key);
    if(e.key === ' '){
        if(modal.classList.contains("hidden")){
            OpenModal();
        }
    }
});




document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === "f"){
        if(!modal.classList.contains("hidden")){
            closeModel();
        }
    }
})