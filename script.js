'use strict';

const again=document.querySelector("#again");
const check=document.querySelector('#check');
const score=document.querySelector('#score');
const highScore=document.querySelector('#high-score');
const highOrLow=document.querySelector('#HorL');
const number=document.querySelector('#number');
const correctGuess=document.querySelector("#h11");
let randomNumber=Math.floor(Math.random()*50)+1;

let userScore=50,maxScore=0;
let countGuess=1;
console.log(randomNumber);
function result()
{
    let userGuess=Number(number.value);
    console.log(userGuess);
    if(userScore===50)
        {
            highOrLow.textContent="Start Guessing...."
        }
    if(userScore===0) setGameOver();
    if(userGuess===randomNumber)
        {
            maxScore=Math.max(maxScore,userScore);
            highOrLow.textContent="Congratulation. Your Guess is Correct!!";
            score.textContent=`Score : ${userScore}`;
            highScore.textContent=`Highest Score : ${maxScore}`;
            correctGuess.textContent=userGuess;
            document.querySelector('.main').style.backgroundColor='green';
           setGameOver();
        }
    else if(userGuess>randomNumber)
        {
            highOrLow.textContent="Guess too high!!";
            userScore--;
        }   
    else{
            highOrLow.textContent="Guess too Low!!";
            userScore--;
        } 
    number.value='';
    score.textContent=`Score : ${userScore}`;
}

check.addEventListener('click',result);

function setGameOver()
{
    number.disabled=true;
    check.disabled=true;
}

again.addEventListener('click',()=>{
    userScore=50;
    randomNumber=Math.floor(Math.random()*50)+1;
    highOrLow.textContent="Start Guessing...."
    score.textContent=`Score : ${userScore}`;
    correctGuess.textContent='?';
    document.querySelector('.main').style.backgroundColor='black';

    number.disabled=false;
    check.disabled=false;
})