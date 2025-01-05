let userScore=document.querySelector("#player-score");

let compScore=document.querySelector("#comp-score");

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const options=["rock", "scissors", "paper"];


const randomChoice=()=>{
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

const updateScore= (playerwin,userChoice,compChoice)=>{
     let userScoreVal=Number(userScore.innerText);
     let compScoreVal=Number(compScore.innerText);

     if(playerwin){
        userScoreVal+=1;
        userScore.innerText=userScoreVal;
        msg.innerText=`You Win. Comp chose ${compChoice}`;
        msg.style.backgroundColor="green";
     }
     else{
        compScoreVal+=1;
        compScore.innerText=compScoreVal;
        msg.innerText=`You Lose. Comp chose ${compChoice}`;
        msg.style.backgroundColor="#f55858";
     }
}


const playGame= (userChoice,compChoice)=>{
    let playerwin=true;
    if(userChoice===compChoice){
        msg.innerText=`Game Tied. Both choose ${userChoice}`;
        return ;
    }
    if(userChoice==="rock"){
        playerwin= (compChoice==='paper')? false: true;
    }
    else if(userChoice==="paper"){
        playerwin=(compChoice=='rock')? true: false;
    }
    else if(userChoice==='scissors'){
        playerwin=(compChoice=='rock')?false:true;
    }

    updateScore(playerwin,userChoice,compChoice);
    
}

choices.forEach( (choice)=>{
    choice.addEventListener("click", ()=>{
        msg.style.backgroundColor="black";
        const userChoice=choice.getAttribute("id");
        const compChoice=randomChoice();
        console.log(userChoice,compChoice);
        playGame(userChoice,compChoice);
    })
})