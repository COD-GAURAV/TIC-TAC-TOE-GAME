  let winner = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ];

    let boxes = document.querySelectorAll(".box");
    let reset = document.querySelector("#reset")
    let p = document.getElementById("p")
    let TurnO = true;
    let startGame = true

    let move = 0

   reset.addEventListener("click",function(e){
    enableBox()
    startGame = true
   })

   if(startGame){
     boxes.forEach((box) => {
      box.addEventListener("click", (e) => {
        if (TurnO) {
          box.innerHTML = "O";
          TurnO = false;
        } else {
          box.innerHTML = "X";
          TurnO = true;
        }
        box.disabled = true
        winners()
        // fixed()
      });
    });
   }

   

    boxes.forEach((val)=>{
      val.addEventListener("click",function(){
        move++
        console.log(move)
        if(move === 9){
          move = 0
          p.innerHTML = "DRAW ENTER NEW GAME"
          reset.innerHTML = "NEW GAME"
        }
        else if(startGame === false){
          move = 0
        }
      })
    })

    function fixed() {
      for (let box of boxes) {
        box.disabled = true;
      }
    }

   

    function showWinner(winner){
     p.innerHTML =  `Congratulation ${winner} is the winner`.toUpperCase()
     reset.innerHTML = "NEW GAME"
     for(let value of boxes){
      value.disabled = true
      startGame = false
     }
    }

    function enableBox(){
        for(let box of boxes){
             box.disabled = false
             box.innerHTML = ""
             p.innerHTML = ""
             reset.innerHTML = "RESET"
        }
    }


    function winners(){
      
        for(let pattern of winner){
            let posVal1 = boxes[pattern[0]].innerText
            let posVal2 = boxes[pattern[1]].innerText
            let posVal3 = boxes[pattern[2]].innerText
            if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
                if(posVal1 === posVal2 && posVal2 === posVal3){
                    showWinner(posVal1)
                }
            }
        }
    }

    console.log(startGame)

