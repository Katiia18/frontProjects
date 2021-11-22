let userScore = 0; 
let computerScore = 0; 
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board"); 
const result_p = document.querySelector(".result > p"); 
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// function to get the computer's choice using math.random
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']; 
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices[randomNumber];  
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "User".fontsize(3).sub();
    const smallComputerWord = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${userChoice}${smallUserWord} Beats ${computerChoice}${smallComputerWord} You win ! 🔥🔥` ; 
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('green-glow');
    },1000);
}

function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "User".fontsize(3).sub();
    const smallComputerWord = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${computerChoice}${smallComputerWord} Beats ${userChoice}${smallUserWord} You loose ! 👎👎`;
    document.getElementById(userChoice).classList.add('red-glow'); 
    setTimeout(function (){
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 1000);
}

function draw(userChoice,computerChoice){
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = "It's a draw ! Try again 🤠🤠";   
    document.getElementById(userChoice).classList.add('grey-glow'); 
    setTimeout(function (){
        document.getElementById(userChoice).classList.remove('grey-glow');
    }, 1000);  
     
}

// game function
function game(userChoice){
    const computerChoice = getComputerChoice(); 
    switch(userChoice + computerChoice) {
        case "rockpaper": 
        case "paperrock":           
        case "scissorspaper":
            win(userChoice,computerChoice);
            break;
        case "paperrock":           
        case "rockpaper":            
        case "paperscissors":
            lose(userChoice,computerChoice);
            break;
        case "paperpaper":            
        case "rockrock":       
        case "scissorsscissors":
            draw(userChoice,computerChoice);
            break;
        

    }

    

}


function main(){

    rock_div.addEventListener('click', function(){
        game("rock");
    })
    paper_div.addEventListener('click', function(){
        game("paper"); 
    })
    scissors_div.addEventListener('click', function(){
        game("scissors"); 
    })
}

main(); 
