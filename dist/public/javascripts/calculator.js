'use strict';

function setAdditionListener() {
    var button = document.getElementById('addition-button');
    button.addEventListener('click', fetchAddition);
}

function fetchAddition() {
    var firstValue = document.getElementById('first-value').value;
    var secondValue = document.getElementById('second-value').value;
    var resultLabel = document.getElementById('result');

    var headers = { first_value: firstValue, second_value: secondValue };

    fetch('http://localhost:3000/api/v1/basic_calculator/addition', {
        method: "POST",
        headers: headers
    }).then(function (data) {
        return data.json();
    }).then(function (json) {
        resultLabel.innerText = json.result;
    }).catch(function (error) {
        return console.error(error);
    });
}

setAdditionListener();