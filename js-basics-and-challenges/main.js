

// let myAge = 30

// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)



// let bonusPoints = 50

// bonusPoints = bonusPoints + 50 

// bonusPoints = bonusPoints - 75

// bonusPoints = bonusPoints + 45 

// console.log(bonusPoints)

 

// let lap1 = 32
// let lap2 = 33
// let lap3 = 36

// function spontaneousBoner() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// spontaneousBoner()



// let lapsCompleted = 0

// function lapCounter() {
//    lapsCompleted = lapsCompleted + 1
// }

// lapCounter()

// console.log(lapsCompleted)


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() { 
   count += 1
   countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0 
    count = 0
}



// let username = "Alan" 
// let notifications = "you have tree new notifications" 

// let messageToUser = username + ", " + notifications + "!"

// console.log(messageToUser)



let welcomeEl = document.getElementById("welcome-el")

let username = "Alan"
let greeting = "Welcome back, " 

welcomeEl.innerText = greeting + username





welcomeEl.innerText = welcomeEl.innerText + " 👋"

welcomeEl.innerText += " 👋"



// Js challenges

// 1

let firstName = "Alan"
let lastName = "Young"

let fullName = firstName + " " + lastName

console.log(fullName)


// 2

// let userName = "Linda"
// let greeting = "Hi there"

// function hiLinda() {
//     console.log(greeting + ", " + userName + "!")
// }

// hiLinda()

// 3

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
    myPoints += 3
    console.log(myPoints)
}

add3Points()
add3Points()
add3Points()

function remove1Point() {
    myPoints -= 1
    console.log(myPoints)
}

remove1Point()
remove1Point()


// Call the functions to that the line below logs out 10
// console.log(myPoints)

// 4 

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let error = document.getElementById("error")

function errorMessage() {
    error.textContent = "Something went wrong, please try again"
}



// 5

let num1 = 8
let num2 = 2

let sum = 0

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
    sum = num1 + num2
    sumEl.textContent = "Sum: " + sum
}

function subtract() {
    sum = num1 - num2
    sumEl.textContent = "Sum: " + sum
}

function divide() {
    sum = num1 / num2
    sumEl.textContent = "Sum: " + sum
}

function multiply() {
    sum = num1 * num2
    sumEl.textContent = "Sum: " + sum
}



// 6

let homeEl = document.getElementById("home-num-el")
let guestEl = document.getElementById("guest-num-el")

let homeScore = 0
let guestScore = 0
let newScore = 0

function newGame() {
    homeEl.textContent = newScore
    guestEl.textContent = newScore
    homeScore = 0
    guestScore = 0
}

function homePlus1() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function homePlus2() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function homePlus3() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function guestPlus1() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function guestPlus2() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function guestPlus3() {
    guestScore += 3
    guestEl.textContent = guestScore
}


