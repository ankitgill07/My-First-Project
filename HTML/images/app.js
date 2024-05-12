let userscore = 0;
let compscore = 0;

const choices  = document.querySelectorAll(".choice");
const msgs = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");



const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random () * 3);
    return options[randIdx];
}

const drowGame = () => {
  
    msgs.innerText = "Game was Draw, Play again."
    msgs.style.background = ("#081b31");
};

const showWinner = (userwin ,userchoice , compchoice) => {
    if (userwin){
   userscore++;
   userscorepara.innerText = userscore;
msgs.style.background = ("green");
        msgs.innerText = `You Win ! Your ${userchoice} beats ${compchoice}`;
        
    }else {
        compscore++;
        compscorepara.innerText = compscore;
        msgs.innerText =  msgs.innerText = `You Lose ! ${compchoice} beats Your ${userchoice}`;
        msgs.style.background = ("red");
     
    };
};



const playgame = (userchoice) => {
  
    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);
    
    if(userchoice === compchoice) {
        drowGame();
      } else{
        let userwin = true;
        if( userchoice === "rock") {
   userwin = compchoice === "paper" ? false : true;
        }else if (userchoice === "paper"){
        userwin =    compchoice === "scissors" ? false : true;
        }else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
      }
    
}


  
choices.forEach ((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
       playgame(userchoice);
    })
})




