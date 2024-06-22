function getComputerChoise()
{
    numGenerated = Math.random();
    console.log("number generated",numGenerated);
    if(numGenerated > 0 && numGenerated<0.33){
       return "rock"
    }
    else if(numGenerated > 0.33 && numGenerated < 0.66){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("enter your choice","rock");
    choice = choice || "null";
    if(choice == "null"){
        alert("default choice rock");
        return "rock";
    }
    return choice;
    }

function playRound(humanChoise, computerChoise){
    console.log(`computer choice ${computerChoise}, human choice ${humanChoise}`);

    if(humanChoise === computerChoise){
        console.log("tie");
    }
    else if(humanChoise === "rock" && computerChoise === "scissors" || humanChoise === "paper" && computerChoise === "rock" || humanChoise === "scissors" && computerChoise === "paper"){
        console.log("human win");
        humanScore += 1;
    }
    else if(humanChoise === "scissors" && computerChoise === "rock" || humanChoise === "rock" && computerChoise === "paper" || humanChoise === "paper" && computerChoise === "scissors"){
        console.log("Computer Win")
        computerScore += 1;
    }
}

let humanScore = 0 , computerScore = 0;

for(let i = 0; i < 5; i++){
    console.log(`iteration ${i}`)
    const computerSelection = getComputerChoise();
    const humanSelection = getHumanChoice();
    playRound(humanSelection.toLowerCase(), computerSelection);
}