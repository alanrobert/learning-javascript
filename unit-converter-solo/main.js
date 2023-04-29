
const convertBtn = document.getElementById("convert-btn")

let metresConvertedEl = document.getElementById("metres")
let feetConvertedEl = document.getElementById("feet")
let litresConvertedEl = document.getElementById("litres")
let gallonsConvertedEl = document.getElementById("gallons")
let kilosConvertedEl = document.getElementById("kilos")
let poundsConvertedEl = document.getElementById("pounds")

const metric = 1
const feetRatio = 3281
const gallonsRatio = 0.264
const poundsRatio = 2.204

convertBtn.addEventListener("click", function() {
    let inputEl = document.getElementById("user-input").value

    let metresResult = inputEl * metric
    let feetResult = inputEl * feetRatio
    let litresResult = inputEl * metric
    let gallonsResult = inputEl * gallonsRatio
    let kilosResult = inputEl * metric
    let poundsResult = inputEl * poundsRatio

    

    metresConvertedEl.innerHTML = `${inputEl} Metres = ${ Math.round((metresResult + Number.EPSILON) * 100) / 100 }`
    feetConvertedEl.innerHTML = `${inputEl} Feet = ${ Math.round((feetResult + Number.EPSILON) * 100) / 100}`
    litresConvertedEl.innerHTML = `${inputEl} Litres = ${ Math.round((litresResult + Number.EPSILON) * 100) / 100}`
    gallonsConvertedEl.innerHTML = `${inputEl} Gallons = ${ Math.round((gallonsResult + Number.EPSILON) * 100) / 100}`
    kilosConvertedEl.innerHTML = `${inputEl} Kilos = ${ Math.round((kilosResult + Number.EPSILON) * 100) / 100}`
    poundsConvertedEl.innerHTML = `${inputEl} Pounds = ${ Math.round((poundsResult + Number.EPSILON) * 100) / 100}`
})