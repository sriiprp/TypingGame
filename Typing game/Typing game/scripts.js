const wordEl=document.querySelector(".WORD");
const txtEl=document.querySelector(".text");
const scoreEl=document.querySelector(".score");
const timeEl=document.querySelector(".Time");
const endGameEl=document.querySelector(".end-game-container");
const containerEl=document.querySelector(".Container");
const settingsFormEl=document.querySelector(".settingsForm");
const difficultSelect=document.querySelector(".difficulty");

//RANDOM NUMBERS
const words=['diarrhea','conjunctivitis','java','python','love','mononucleosis','cybernetics','algorithm','arrays','argument','autonomous','assignment','planning','scheduling','performing','program','primitive','instance','procedural','functional','scripting','logic','source'];
// init word
let randomWord;
let score=0;
let time = 7;
//init difficult
let difficultLevel='easy';
//generate random words
function getRandomWord(){
    return words[Math.floor(Math.random()*words.length)];
}
function addWordToDom()
{
    randomWord=getRandomWord();
    wordEl.innerHTML=randomWord;
}
addWordToDom();
//update score
function updateScore(){
    score++;
    scoreEl.innerHTML=score;
}
//update the time

function updateTime()
{
    time--;
    timeEl.innerHTML=time+1+" s";
    if(time<0)
    {
        clearInterval(timeInterval);
  gameover();  }
}
//start counting
const timeInterval = setInterval(updateTime,1000);

//typing functionality
txtEl.addEventListener("input",function(e){
    console.log(e.target.value);
    const insertedTxt=e.target.value;
    if(insertedTxt==randomWord)
    {
        addWordToDom();
        updateScore();
        //clear the text
        e.target.value="";
        //add 1 s to the time
        
        time=time+2;
        if(difficultLevel==='easy'){
            time=time+3;
        }
        else if(difficultLevel==='medium'){
            time+=2;
        }
        else if(difficultLevel==='hard')
        {
            time+=1;
        }
        updateTime();
    }
});
//gameover
function gameover()
{
    //hide form
    settingsFormEl.style.display="none";
    containerEl.style.display="none";
    endGameEl.innerHTML=`<p class="over">Game Over</p>
    <p>Your Score : <span class="score">${score}</span></p>
    <button onclick='location.reload()' class="Play-Again-btn">Play again</button>`;


}

//difficult level
difficultSelect.addEventListener('change',function(e){
    console.log(e.target.value);
    difficultLevel=e.target.value;

    console.log(difficultLevel);



});



