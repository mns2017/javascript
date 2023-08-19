// "use strict";

// class components h idhr .classname ke saath use kra yaha query selector ek method h jissse fetch kr rhe h html ki body content 


// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🎉CORRECT NUMBER";



// ////////////////////////////////// here we provide our winning umber which is an secret number
// document.querySelector(".number").textContent = 13;


// ////////////////////////////////// here we targeted the core number 
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 45;
// console.log(document.querySelector('.guess').value);


const hello = document.querySelector('.message1');





/////////////// some handling events and eventlistener  such as mouse moving , clicking anything else

 const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
 }


////////////////////////////////////////////// we make here random winning number 
let Secretnumber = Math.trunc(Math.random()*20) + 1;
// document.querySelector('.number').textContent = Secretnumber; 

//////////////////////////////////// working on normal score deduction
let score = 20;
let highscore = 0;




document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage("😒no number selected!");
    }
    else if (guess === Secretnumber ){
        displayMessage("🎉CORRECT NUMBER");
        document.querySelector('.number').textContent = Secretnumber;    //////////////////////////////////// we stored the winning number  visible to user

////////////////////////////////////////////here we manipulate some csss of html page
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').style.fontSize = '9rem';

        if(score>highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
        
    }
    else if ( guess !== Secretnumber){
        if (score>1){
            document.querySelector(".message").textContent = guess>Secretnumber? "🤔 GUESSING IS HIGH" : "🥲 GUESSING IS LOW" ;
            score--;
            document.querySelector('.score').textContent = score;
        }
        else if(score === 1){
            document.querySelector('.message1').style.opacity = '1';
            document.querySelector('.message1').textContent = 'you have only 1 move left'
        }
        else{
            document.querySelector(".message").textContent = "😿 YOU LOSS THE GAME";
            document.querySelector('.score').textContent = 0;
            document.querySelector("body").style.backgroundColor = "#e31414"
        }
    }

})




////////////////////////////////////////////////////////////// refreshing the whole thing

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    Secretnumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector(".message").textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.fontSize = '6rem';
})