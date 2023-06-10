import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue, push, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://wearethechampions-177d4-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemAddedToDB = ref(database, "endorsements")

const userInputEl = document.getElementById("input-el")
const publishBtnEl = document.getElementById("publish-el")
const endorsementsListEl = document.getElementById("ul-el")

onValue (itemAddedToDB, function(snapshot) {
    if (snapshot.exists()) {
        let endorsementsArray = Object.entries(snapshot.val())

        clearEndorsementsList()

        for (let i = 0; i < endorsementsArray.length; i++) {
            let currentItem = endorsementsArray[i]

            appendItemToListEl(currentItem)
        }
    } else {
        return endorsementsListEl.innerHTML = "no items here yet..."
    }
    
})

function clearEndorsementsList() {
    endorsementsListEl.innerHTML = ""
}

function clearUserInput() {
    userInputEl.value = ""
}

function appendItemToListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    let newEl = document.createElement("li")

    newEl.textContent = itemValue
    endorsementsListEl.append(newEl)
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `endorsements/${itemID}`)

        remove(exactLocationOfItemInDB)
    })
}   

publishBtnEl.addEventListener("click", function() {
    let inputValue = userInputEl.value
    push(itemAddedToDB, inputValue)
    clearUserInput()
})

