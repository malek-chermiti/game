function getComputerChoice() {
    const k = Math.random() * 3;
    let ch;
    if (k < 1) {
        ch = "rock";
    } else if (k < 2) {
        ch = "paper";
    } else {
        ch = "scissors";
    }
    return ch;
}

let computerChoice=""
let humanChoice = ""


function playRound() {
    if (humanChoice === computerChoice) {
        return "kifkif!";
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) 
        return "rbe7t";
     else {
        return "khsert";
    }
}
 

function game() {
    let result
    let humanScore = 0;
    let computerScore = 0;
    const aff=document.querySelector("#affich_res")
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
    button.addEventListener("click", (b) => {
    humanChoice = b.target.textContent
    console.log("l'user a choisi : "+humanChoice) /*recuperation de*/
    computerChoice = getComputerChoice()
    console.log("le computer a choisi : "+computerChoice)/*  resultats taa tor7 bark*/
    result=playRound()
    console.log(result) //lanci tor7
    score(result)
    if (humanScore<5 && computerScore <5)
   { let ch="l'user a choisi :"+humanChoice + "<br> le computer a choisi : " + computerChoice +  "<br> le score de computer : "+ computerScore +  "<br> votre score : " + humanScore +  "<br> le resultat de round : "+ result
    aff.innerHTML=ch} 
    if(humanScore == 5 || computerScore == 5) {
            
            computerScore=0
            humanScore=0
            
        }
  });//oskot le nji nlefik
});
    function score(result){
        console.log(aff)

        if (result === "rbe7t" && humanScore<5) {
            humanScore++;
            console.log("humanScore  "+humanScore)
        } 
        if (result === "khsert" && computerScore <5) {// lewh andonaleha acces lweh naamil alehom access aaasln!!
            computerScore++;
            console.log("computerScore  "+computerScore)
        }  
        if(humanScore==5)  

           {
            aff.innerHTML=""
            console.log( " RESET   rbe7t mdmellle !!!!")
            aff.innerHTML=" RESET rbe7t mdmellle !!!!"
            }
        if(computerScore==5){
            aff.innerHTML=""
            console.log("RESET  reb7 lpc !!")  
            aff.innerHTML="RESET  rbe7 pc!!"
        }
       
        
    } 
}
game()

