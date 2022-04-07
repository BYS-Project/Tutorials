/*
    == -> Checks if the value is the same, even though the two variables are different data-types:
    F.e. 100 == "100" will return true

    === -> Is more strict, checks even if the data-types are the same
    F.e. 100 === "100" will return false
*/

let cardsElement = document.getElementById("cards")
let sumElement = document.getElementById("sum")

let card1 = 4
let card2 = 5
let sum = card1 + card2

let won = false
let isAlive = true
let message = ""

function startGame() {
    if(sum < 21){
        console.log("Do you want to draw another card?")
        message = "Do you want to draw another card?"
    }else if(sum === 21){
        console.log("BlackJack!")
        message = "BloackJack!"
        won = true
    }else{
        console.log("You lost")
        message = "You lost"
        isAlive = false
    }
    
    cardsElement.textContent = "Cards: " +  card1 + " - " + card2
    sumElement.textContent = "Sum: " + " " + sum
}
