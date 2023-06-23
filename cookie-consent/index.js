const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const choiceBtns = document.getElementById('modal-choice-btns')

// setTimeout(function() {
//     modal.style.display = 'inline'
// }, 1500)
modal.style.display = 'inline'

modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})

/*   
Challenge: 
1. Take control of the decline btn. (What do you
   need to do to make that possible?)
2. Set up an eventListener that is triggered 
   when a user's cursor hovers over the decline 
   button. (Google the event to listen out for!)
3. For now, just log out "hovered" when that 
   happens. 
*/ 



declineBtn.addEventListener('mouseenter', function() {
    choiceBtns.classList.toggle('reverse')
})

/*   
Challenge: 
1. Take control of the div holding the buttons.
2. In index.css, set up a selector for a new class
   that uses flex-direction to reverse the order 
   of its child elements.
3. Toggle that class on the div holding the buttons 
   when a user's cursor hovers over the decline button.
*/ 

consentForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    const consentFormName = consentFormData.get('nameInput')
    
    modalText.innerHTML = `<div class="modal-inner-loading">
                                <img src="/img/loading.svg" class="loading">
                                <p id="uploadText">
                                    Uploading your data to the dark web...
                                </p>
                            </div>`
    setTimeout(function() {
        document.getElementById('uploadText').textContent = "Making the sale..."
    }, 1500)

/*
    Challenge: 
1. Make the button that closes the modal disabled.
2. Make that button become usable when the final 
   modal message has been displayed to the user.
*/ 

    setTimeout(function() {
        document.getElementById('modal-inner').innerHTML = 
        `<h2>Thanks <span class="modal-display-name">${consentFormName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="img/pirate.gif">
        </div>
        ` 
        modalCloseBtn.disabled = false
    }, 3000)            
})



