// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

// let firstCard = 1
// let secondCard = 2

// let cardSum = firstCard + secondCard 

// console.log(cardSum)



// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 21

// // if less than 21 -> "You can not enter the club!"
// // else            -> "Welcome!"

// if (age > 20) {
//     console.log("Welcome") 
// } else {
//     console.log("Not tonight pal")
// }


// // Check if the person is elegible for a birthday card from the King! (100)

// let age = 99

// // if less than 100    -> "Not elegible"
// // else if exactly 100 -> "Here is your birthday card from the King!"
// // else                -> "Not elegible, you have already gotten one"

// if (age < 100) {
//     console.log("Hold on a few more years for your card, you can do it!")
// } else if (age === 100) {
//     console.log("Bingo! I'm the King, here's your card mate")
// } else {
//     console.log("Nice try Aretha, you had yours years ago!")
// }





let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    name: "Player 1",
    chips: "£" + 100
}

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": " + (player.chips)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10 
    } else if (randomNumber === 1) {
        return 11 
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}



function renderGame() {
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message 
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card 
        cards.push(card)
        renderGame()    
   } 
}


 
// ______________

// let diceRollEl = document.getElementById("diceRoll-el")
// let randomNumber = getRandomCard()

// function rollDice() {
//     return diceRollEl.textContent = randomNumber
    
// }


// ______________




// let featuredPosts = [
//     "Make the following appear in the console:",
//     "Frontend developer at Xeneta",
//     "People counter for Norstat",
//     "CEO at Scrimba"
// ]

// console.log(featuredPosts[3])

// console.log(featuredPosts[2])




// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 11;  count += 1 )  {
    
//     console.log(count)

// }


// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }

// ______________

// let cards = [7, 3, 9]

// // Create a for loop that logs out all the cards in the array
// // Use cards.length to specify how long the loop should run

// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i])
// }

// ___________________

// let sentence = ["Hello", "my", "name", "is", "Alan"] 
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i ++) {
//     greetingEl.textContent += sentence[i] + " "
// }

// ____________________

let player1Time = 102
let player2Time = 105

let totalTime = totalRaceTime()

function fastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player1Time > player2Time) {
        return player2Time 
    } else {
        return player1Time
    }
}

function totalRaceTime() {
    return player1Time + player2Time
}

fastestRaceTime()

totalRaceTime()

console.log(fastestRaceTime())
console.log(totalRaceTime())







