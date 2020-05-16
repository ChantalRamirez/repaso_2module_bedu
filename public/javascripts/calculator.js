function setAdditionListener(){
    const button = document.getElementById('addition-button')
    button.addEventListener('click', fetchAddition)
}
    
function fetchAddition(){
        const firstValue = document.getElementById('first-value').value
        const secondValue = document.getElementById('second-value').value
        const resultLabel = document.getElementById('result')
        
        const headers ={ first_value:firstValue, second_value: secondValue }

        fetch ('http://localhost:3000/api/v1/basic_calculator/addition', {
            method: "POST",
            headers: headers
        })
           .then(data => data.json())
           .then (json => {
            resultLabel.innerText = json.result
           })
            .catch ( error => console.error(error))
           
    }

setAdditionListener()