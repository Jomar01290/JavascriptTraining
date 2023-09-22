const submitButton = document.querySelector(`#submit`)
const priceInput = document.querySelectorAll(`.price`)
const totalAmount = document.querySelector(`#total`)

var k;

submitButton.addEventListener('click', (e) => {
    let sum = 0
    
    for (let i = 0; i < priceInput.length; i++) {
        sum += Number(priceInput[i].value)
    }

    totalAmount.value = sum + 2;
    totalAmount.value = sum + 1;

})
