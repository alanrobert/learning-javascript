
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

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {    // cycles through countries for entire .length of array
    console.log("- " + largeCountries[i]) // '[i]' after variable, selects the for loop.
}


// 4. 

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()


