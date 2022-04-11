/*
    == -> Checks if the value is the same, even though the two variables are different data-types:
    F.e. 100 == "100" will return true

    === -> Is more strict, checks even if the data-types are the same
    F.e. 100 === "100" will return false
*/

let cardsElement = document.getElementById("cards")
// If it is an id "#" otherwise if it is a class ".". Linke in CSS
let sumElement = document.querySelector("#sum")

// array.push -> insert an element into the array in the last index of the array
// array.pop -> deletes the last element of an array
let cards = []

let won = false
let isAlive = false
let message = ""

let player = {
    name: "Player_Name",
    chips: 145
}

function startGame(){
    isAlive = true
    won = false

    cards = []
    newCard(false)
    newCard(false)
    
    renderGame()
}

function renderGame() {
    if(getSum() < 21){
        console.log("Do you want to draw another card?")
        message = "Do you want to draw another card?"
    }else if(getSum() === 21){
        console.log("BlackJack!")
        message = "BloackJack!"
        won = true
    }else{
        console.log("You lost")
        message = "You lost"
        isAlive = false
    }
    
    cardsElement.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsElement.textContent += cards[i]
        if(i != cards.length - 1){
            cardsElement.textContent += ", "
        }
    }
    sumElement.textContent = "Sum: " + " " + getSum()

    document.getElementById("playerElement").textContent = player.name + ": $" + player.chips 
}

function newCard(process){
    if(isAlive && !won){
        let newCard = Math.floor(Math.random() * 13) + 1;
        console.log("New card: " + newCard)
        let value = 0;
        if(newCard === 1){
            value = 11
        }else if(newCard > 10){
            value = 10
        }
        else{
            value = newCard
        }
        cards.push(value)
        if(process){
            renderGame()
        }
    }
}

function getSum(){
    let sum = 0
    for(let i = 0; i < cards.length; i++){
        sum += cards[i]
    }
    return sum
}
