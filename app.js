let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector("#msg");

let turnO = true; 

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame= () =>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add('hide');
}

boxes.forEach((box) => {
     box.addEventListener("click", () => {
       
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        chekwinner();
     });
});

        const disabledboxes = () => {
            for( let box of boxes){
                box.disabled = true;
            }
        }

        const enableboxes = () => {
            for( let box of boxes){
                box.disabled = false
                box.innerText = "";
        }

    }

    const showWinner = (winner) => {
        msg.innerText=`congratulation, winner is ${winner}..!!!`;
        msgcontainer.classList.remove("hide");
        disabledboxes();
    }

const chekwinner = () => {
    for(let pattern of winpatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText )
        
    let posi1val = boxes[pattern[0]].innerText;
    let posi2val= boxes[pattern[1]].innerText;
    let posi3val=boxes[pattern[2]].innerText    
       

        if(posi1val !="" && posi2val !="" && posi3val != ""){
            if(posi1val === posi2val && posi2val ===posi3val) {
              
                showWinner(posi1val);
            }
        }
   }
}
newgamebtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)

// time 28:18 

