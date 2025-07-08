function getHumanChoice() {
    const k = Number(prompt("paper => number > 0\nrock => number < 0\nscissors => number == 0"));
    let ch;
    if (k > 0) {
        ch = "paper";
    } else if (k < 0) {
        ch = "rock";
    } else {
        ch = "scissors";
    }
    return ch;
}

function getComputerChoice() {
    const k= (Math.random());
    let ch;
    if (k > 0) {
        ch = "paper";
    } else if (k < 0) {
        ch = "rock";
    } else {
        ch = "scissors";
    }
    return ch;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "kifkif!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "rbe7t";
    } else {
        return "khsert";
    }
}

function game() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const human = getHumanChoice();
        const computer = getComputerChoice()
        const result = playRound(human, computer);
        console.log(result);

        if (result === "rbe7t") {
            humanScore++;
        } else if (result === "khsert") {
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        console.log("maalim sahbi");
    } else if (computerScore > humanScore) {
        console.log("ya nari alik sahbi!")
    } else {
        console.log("hakon 9ad9ad!");
    }
}

