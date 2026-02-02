let users = 0;
let coms = 0;
let choices = document.querySelectorAll(".choice");
let reset = document.querySelector("#reset");
let userscore = document.querySelector("#play");
let comscore = document.querySelector("#com");
let p = document.createElement("p");

let computerChoice = () => {
    let comchoice = ["rock","paper","scissors"];
    let comc = Math.floor(Math.random() * 3);
    return comchoice[comc];
}

let userChoice = () =>{
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            let user = choice.getAttribute("id");
            let com = computerChoice();
            playGame(user,com);
        });
        reset.addEventListener("click",()=>{
            users = 0;
            coms = 0;
            userscore.innerText = users;
            comscore.innerText = coms;
            p.remove();
        });
    });
}


let playGame = (user, com) => {
    if (user === com) {
        p.style.fontSize = '3rem';
        p.style.marginBottom = '1rem';
        p.innerText = "Match is Draw";
        reset.before(p);
    } else if (
        (user === "rock" && com === "scissors") ||
        (user === "paper" && com === "rock") ||
        (user === "scissors" && com === "paper")
    ) {
        users++;
        userscore.innerText = users;
        p.style.fontSize = '3rem';
        p.style.marginBottom = '1rem';
        p.innerText = "You Win";
        reset.before(p);
    } else {
        coms++;
        comscore.innerText = coms;
        p.style.fontSize = '3rem';
        p.style.marginBottom = '1rem';
        p.innerText = "Computer Win";
        reset.before(p);
    }
};


userChoice();