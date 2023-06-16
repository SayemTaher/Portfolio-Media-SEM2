
let isAlive = true;
let message = " ";
let hasBlackJack = false;
let sum = 0;
let cards = [];

let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");

let playerName = " Sayem";
let playerCredit = 45;
let playerDetails = {
    name: "Sayem ",
    credit: 45
}
let playerInfo = document.getElementById("playerName");
playerInfo.textContent = playerDetails.name + ": £ " + playerDetails.credit;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 10) {
        return 10;
    }
    else if (randomNumber === 1) {
        return 11;
    }
    else
        return randomNumber;
}

function renderGame() {
    cardEl.textContent = "Cards: " + cards;
    sumEl.textContent = "Sum: " + sum;
    
    if (sum <= 20) {
        message = " Do You want to draw a new card ?";

    }
    else if (sum === 21) {
        message = " Wohoo ! You got the black jack";
        hasBlackJack = true;
        
        
    }
    else {
        message = " You have lost the Game";
        isAlive = false;
        
        

    }
    messageEl.textContent = message;

}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        cards.push(newCard);
        sum += newCard;
        renderGame();
    }
    
    
}
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
}

