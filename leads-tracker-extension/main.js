
// let = "can be re-assigned"
// const = "short for constant", "can't be re-assigned"
// if possible, use const. If not, use let.

let inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems  += `
            <li>
                <a target=_'blank' href=${myLeads[i]}>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    console.log(listItems)
    ulEl.innerHTML = listItems
}








 