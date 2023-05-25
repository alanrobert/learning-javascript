import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-450aa-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDB = ref(database, "books")

const booksEl = document.getElementById("books-el")

onValue (booksInDB , function(snapshot) {

    let booksArray = Object.values(snapshot.val())
    clearBooksListEl()
    for (let i = 0; i < booksArray.length; i++) {
        console.log(booksArray[i])
        let currentBook = booksArray[i]
        appendBookToBooksListEl(currentBook)
    }
    console.log(booksArray)
})

function clearBooksListEl() {
    booksEl.innerHTML = ""
}

function appendBookToBooksListEl(bookValue) {
    booksEl.innerHTML += `<li>${bookValue}</li>`
}