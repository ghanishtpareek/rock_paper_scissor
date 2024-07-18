function getComputerChoise()
{
    numGenerated = Math.random();
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

function playRound(humanChoise, computerChoise){
    console.log(`computer choice ${computerChoise}, Your choice ${humanChoise}`);

    if(humanChoise === computerChoise){
        console.log("tie");
        turnNumber+=1;
    }
    else if(humanChoise === "rock" && computerChoise === "scissors" || humanChoise === "paper" && computerChoise === "rock" || humanChoise === "scissors" && computerChoise === "paper"){
        console.log("human win");
        humanScore += 1;
        turnNumber += 1;
    }
    else if(humanChoise === "scissors" && computerChoise === "rock" || humanChoise === "rock" && computerChoise === "paper" || humanChoise === "paper" && computerChoise === "scissors"){
        console.log("Computer Win")
        computerScore += 1;
        turnNumber+=1;
    }
}

let humanScore = 0 , computerScore = 0, turnNumber = 0;

function passChoice(){
    console.log(`iteration ${i}`)
    const computerSelection = getComputerChoise();
    const humanSelection = getHumanChoice();
    playRound(humanSelection.toLowerCase(), computerSelection);
}

console.log(`final score human wins ${humanScore} and computer wins ${computerScore}`);

const body = document.body;
const container = document.createElement("div");
container.setAttribute("class","container")
body.appendChild(container);

const rock = document.createElement("button");
rock.classList.add("choiceButton","rock");
rock.textContent = "Rock"
container.appendChild(rock);

const paper = document.createElement("button");
paper.classList.add("choiceButton","paper");
paper.textContent = "Paper"
container.appendChild(paper);

const scissor = document.createElement("button");
scissor.classList.add("choiceButton","scissor")
scissor.textContent = "scissor";
container.appendChild(scissor);



const list = document.createElement("ul")
list.classList.add("resultList");
body.appendChild(list); 

container.addEventListener("click",(e)=>{
    let choice = e.target.className;
    choice = (choice.split(" ")[1]);
    console.log(choice);
    switch(choice){
        case "rock":
            playRound("rock",getComputerChoise());
            break;
        case "paper":
            playRound("paper",getComputerChoise());
            break;
        case "scissor":
            playRound("scissors",getComputerChoise());
            break;
    }
 
    if(turnNumber == 5){
        list.remove();
    }
    else{
        const listItem = document.createElement("li");
        listItem.textContent = `turn ${turnNumber+1} your wins ${humanScore} computer wins ${computerScore}`;
        list.appendChild(listItem);
    }
})