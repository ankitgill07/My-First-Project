

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgame = document.querySelector("#new-btn");
let msgcontiner = document.querySelector(".msg-continer");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turnO = true;
    enableboxes ();
  msgcontiner.classList.add("hide")
};





boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
          
        if (turnO) {
           box.innerText = "o";
            box.style.color = "black"
            turnO = false;
        } else{
             box.innerText = "x";
             box.style.color = "#b0413e"
            turnO = true;
        }
        box.disabled = true;
        checkwinner  ();
    });
});


const disableboxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
  msg.innerText = `Congratulation, winner is ${winner}`;
msgcontiner.classList.remove("hide");
disableboxes ();
};





const checkwinner = () =>{
    for (let Pattern of winPatterns) {
        let pos1val = boxes [Pattern [0]].innerText;
        let pos2val = boxes [Pattern [1]].innerText;
        let pos3val = boxes [Pattern [2]].innerText;
        


        if (pos1val !="" && pos2val !="" && pos3val !="" )
       if (pos1val === pos2val && pos2val === pos3val){

        showWinner(pos1val);

       }
     
    }
}

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);