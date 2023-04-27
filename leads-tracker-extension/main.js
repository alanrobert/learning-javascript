
// let = "can be re-assigned"
// const = "short for constant", "can't be re-assigned"
// if possible, use const. If not, use let.

// truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalise emptiness
// undefined -> how Javascript signilises emptiness
// NaN

let myLeads = []
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const storedNames = JSON.parse(localStorage.getItem("myLeads"))

if (storedNames) {
    myLeads = storedNames
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems  += `
            <li>
                <a target=_'blank' href=${leads[i]}>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url) // .url accesses url
    localStorage.setItem("tabs", JSON.stringify(tabs))
    render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})













 