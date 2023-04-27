// #1
// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = false

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game`)
} else {
    console.log(`The winner is ${opponent} ! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes


//#2
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function courses(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
courses(myCourses )

cars = ["BMW", "Ford", "Mini"]

function logItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
logItems(cars)


//#3
// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

const fruit = ["apples", "pears", "bananas"]
const storedFruit = JSON.parse(localStorage.getItem("fruit"))

function fruitSave() {
    localStorage.setItem("fruit", JSON.stringify(fruit) )    
}

fruitSave()

console.log(localStorage.getItem("fruit", JSON.stringify(fruit)))


//#4
let data = [
    {
        player: "Jane",
        score: 52 // how could I select this on it's own in [0]?
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)


const janesScoreBtn = document.getElementById("janes-score")
janesScoreBtn.addEventListener("click", function() {
    console.log(data[0].score) // dot notation specifies part of array
})


//#5 ...NEEDS WORK... COME BACK TO THIS!
// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

function generateSentence(desc, arr) {
    let baseSentence = `The ${arr.length} ${desc} ,`
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            baseSentence += arr[i] 
            } else {
                baseSentence += arr[i] + " , "
            }
    }
    return baseSentence
}

const sentence = generateSentence("best pets are,", ["Lilly", "osrafuf", "Tim", "Holly"])
console.log(sentence)



//#6 



























