let boxes=document.querySelectorAll(".btn");
let reset=document.querySelector(".btnn");

let turn0=true;
let count=0;

let W_p=[
    [0,1,2],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [6,7,8],
    [3,4,5],
    [0,3,6],
    [2,5,8]
];

check_win=()=>{
  for(let pattern of W_p){
    let pos_1=boxes[pattern[0]].innerText;
    let pos_2=boxes[pattern[1]].innerText;
    let pos_3=boxes[pattern[2]].innerText;

    if(pos_1!="" && pos_2!="" && pos_3!=""){
        if(pos_1==pos_2 && pos_2==pos_3){
            alert("Winner is : "+ pos_1);
            return true;
        }
    }
  }
  return false;
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            turn0=false;
            box.innerText="O";
        }
        else{
            turn0=true;
            box.innerText="X";
        }
        box.disabled=true;
        count++;

        let winner=check_win();

        if(!winner && count==9){
             alert("DRAW !!");
        }
    });
});

reset.addEventListener("click",()=>{
    turn0=true;
    count=0;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
});
