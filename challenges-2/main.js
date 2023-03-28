
// 1. Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Alan",
    age: 30,
    country: "England"
}

console.log(person)

function logData() {
    let personInfo = person.name + " is " + person.age + " years old and lives in " + person.country

    console.log(personInfo)
}

logData()


// 2.

let age = 67

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

function discountCounter() {
    if (age < 6) {
        return "free" 
    } else if (age > 6 && age < 18) {
        return "student discount"
    } else if (age > 17 && age < 27) {
        return "student discount"
    } else if (age > 26 && age < 67) {
        return "full price"
    } else {
        return "senior citizen discount"
    }
}
console.log(discountCounter())

// 3.

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

// console.log("The 5 largest countries in the world:")
// for (let i = 0; i < largeCountries.length; i++) {    // cycles through countries for entire .length of array
//     console.log("- " + largeCountries[i]) // '[i]' after variable, selects the for loop.
// }


// 4. 

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

let largeCountries = ["Tuvalu","India","USA","Indonesia", "Monaco"] // Array

let shifted = largeCountries.shift() // Removes first item
let popped = largeCountries.pop() // Removes end item
let unShift = largeCountries.unshift("China") // Adds to beginning 
let pushed = largeCountries.push("Pakistan") // Adds to end
console.log(largeCountries) // Calls array

// console.log(pushed) // Calls item number

// console.log(unShift) // Calls item number

// 5.

let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱") 
} else {
    console.log("Your Safe")
}


// 6.

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array




function getHand() {
    let totalHands = hands.length
    let randIndex = Math.floor(Math.random() * totalHands)
    let randHand = hands[randIndex]
    console.log(randHand)
}
getHand()


// 7.

// When will I stop creating the most ellaborate way to a problem possible, to find it's only a couple of steps instead of a million? Ha

let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let randomIndexOne = Math.floor(Math.random() * fighters.length) 
    let randomIndexTwo = Math.floor(Math.random() * fighters.length) 
    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
}) 



// 8.

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function orderFruit() {
    for( let i = 0; i < fruit.length; i++ ) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        } 
    }
}

orderFruit()


// 9. Random password generator (solo-challenge)









