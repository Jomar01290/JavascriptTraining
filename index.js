const submitButton = document.querySelector(`#submit`)
const priceInput = document.querySelectorAll(`.price`)
const totalAmount = document.querySelector(`#total`)



submitButton.addEventListener('click', (e) => {
    let sum = 0
    
    for (let i = 0; i < priceInput.length; i++) {
        sum += Number(priceInput[i].value)
    }

    totalAmount.value = sum + 3;


})
