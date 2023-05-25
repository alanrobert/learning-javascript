

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-450aa-default-rtdb.europe-west1.firebasedatabase.app/"
}

/*
Challenge:
Call the onValue function with
shoppingListInDB as the first argument and
function(snapshot) {} as the second argument
*/

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemAddedDB = ref(database, "items") 

const userInputEl = document.getElementById("user-input")
const addToCartBtnEl = document.getElementById("add-to-cart")

        // Challenge: Make two let variables:
        // currentItemID and currentItemValue and use currentItem to set both of
        // them equal to the correct values.

let ulEl = document.getElementById("ul-el")

onValue (itemAddedDB, function(snapshot){
    if (snapshot.exists()) {
        let shoppingListArray = Object.entries(snapshot.val())

        clearUlEl()

        for (let i = 0; i < shoppingListArray.length; i++) {
            let currentItem = shoppingListArray[i]

            appendItemToListEl(currentItem)
        }
        } else {
            return ulEl.innerHTML = "no items here... yet"
        }
    
})

function clearUlEl() {
    ulEl.innerHTML = ""
}

function clearInputEl() {
    userInputEl.value = ""
}

function appendItemToListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    let newEl = document.createElement("li")

    newEl.textContent = itemValue
    ulEl.append(newEl)
    newEl.addEventListener("click", function() { 
        let exactLocationOfItemInDB = ref(database, `items/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })

}

addToCartBtnEl.addEventListener("click", function() {
    let inputValue = userInputEl.value
    push(itemAddedDB, inputValue)
    // appendItemToListEl(inputValue)
    clearInputEl()
})