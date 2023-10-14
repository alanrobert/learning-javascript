#Studied in this module

- ## for of 
Instead of for loops. Made it possible to take control of any item in the array that had been highlighted.

`
function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}
`

- ## import/ export

Import data from external folder

`import { catsData } from '/data.js'`

Export data from document

`export const catsData = [
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "angry.jpeg",
        alt: "A cat looking moody",
    } ]`

- ## radio & checkbox inputs

`
function renderEmotionsRadios(cats){
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}
`

- ## querySelector

Allows you to select elements, like this below that selects the type of radioo that is checked.

`document.querySelector('input[type="radio"]:checked')`

- ## getElementsByClassName & classList.remove

Made it possible to select all items with a class of 'radio' and classList.remove enabled me to remove the class name of 'highlight'

`
function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}
`
