let fbData = [];

function getNumbers() {
    let fizzValue = parseInt(document.getElementById("fizzValue").value) || 3;
    let buzzValue = parseInt(document.getElementById('buzzValue').value) || 5;
    let errorState = false;
    let errorMsg = "";
    fbData = [];

    // Verify that we have numbers
    if (isNaN(fizzValue) || isNaN(buzzValue)) {
        errorState = true;
        errorMsg += 'Please use a number.<hr />'
    }

    if (errorState) {
        Swal.fire({
            title: 'Something went wrong',
            html: `${errorMsg}`,
            confirmButtonText: 'OK'
        })
    } else {
        generateFizzBuzzArray(fizzValue, buzzValue);
        displayData(fbData);
        document.getElementById('customRangeEnd').value = ''
        document.getElementById('customRangeStart').value = ''
        document.getElementById('')
    }
}

function generateFizzBuzzArray(fizz, buzz) {
    let startNumber = parseInt(document.getElementById('customRangeStart').value) || 1;
    let endNumber = parseInt(document.getElementById('customRangeEnd').value) || 100;

    //error handling for bigger starting number
    if (startNumber > endNumber) {
        let tempNumber = startNumber;
        startNumber = endNumber;
        endNumber = tempNumber;
    }

    for (let i = startNumber; i < endNumber + 1; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            fbData.push('FizzBuzz')
        } else if (i % fizz == 0) {
            fbData.push('Fizz')
        } else if (i % buzz == 0) {
            fbData.push('Buzz')
        } else {
            fbData.push(i)
        }
    }
}



function displayData(fizzBuzzData) {
    
    if (fizzBuzzData.length % 5 == 0) {
        divisibleBy5(fizzBuzzData);
    } else if (fizzBuzzData.length % 4 == 0) {
        divisibleBy4(fizzBuzzData);
    } else if (fizzBuzzData.length % 3 == 0) {
        divisibleBy3(fizzBuzzData);
    } else if (fizzBuzzData.length % 2 == 0) {
        divisibleBy2(fizzBuzzData);
    } else {
        return;
    }

}


function divisibleBy5(fizzBuzzData) {
    let tableBody = document.getElementById("tableBody");
    let templateRow = document.getElementById("fbTemplate");

    tableBody.innerHTML = "";

    for (let i = 0; i < fizzBuzzData.length; i += 5) {
        const tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fizzBuzzData[i]);
        rowCols[0].textContent = fizzBuzzData[i];

        rowCols[1].classList.add(fizzBuzzData[i + 1]);
        rowCols[1].textContent = fizzBuzzData[i + 1];

        rowCols[2].classList.add(fizzBuzzData[i + 2]);
        rowCols[2].textContent = fizzBuzzData[i + 2];

        rowCols[3].classList.add(fizzBuzzData[i + 3]);
        rowCols[3].textContent = fizzBuzzData[i + 3];

        rowCols[4].classList.add(fizzBuzzData[i + 4]);
        rowCols[4].textContent = fizzBuzzData[i + 4];

        tableBody.appendChild(tableRow);

    }
}

function divisibleBy4(fizzBuzzData) {
        let tableBody = document.getElementById("tableBody");
        let templateRow = document.getElementById("fbTemplate4");

        tableBody.innerHTML = "";

    for (let i = 0; i < fizzBuzzData.length; i += 4) {
        const tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fizzBuzzData[i]);
        rowCols[0].textContent = fizzBuzzData[i];

        rowCols[1].classList.add(fizzBuzzData[i + 1]);
        rowCols[1].textContent = fizzBuzzData[i + 1];

        rowCols[2].classList.add(fizzBuzzData[i + 2]);
        rowCols[2].textContent = fizzBuzzData[i + 2];

        rowCols[3].classList.add(fizzBuzzData[i + 3]);
        rowCols[3].textContent = fizzBuzzData[i + 3];

        tableBody.appendChild(tableRow);

    }
}

function divisibleBy3(fizzBuzzData) {
        let tableBody = document.getElementById("tableBody");
        let templateRow = document.getElementById("fbTemplate3");

        tableBody.innerHTML = "";

    for (let i = 0; i < fizzBuzzData.length; i += 3) {
        const tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fizzBuzzData[i]);
        rowCols[0].textContent = fizzBuzzData[i];

        rowCols[1].classList.add(fizzBuzzData[i + 1]);
        rowCols[1].textContent = fizzBuzzData[i + 1];

        rowCols[2].classList.add(fizzBuzzData[i + 2]);
        rowCols[2].textContent = fizzBuzzData[i + 2];


        tableBody.appendChild(tableRow);

    }
}

function divisibleBy2(fizzBuzzData) {
        let tableBody = document.getElementById("tableBody2");
        let templateRow = document.getElementById("fbTemplate");

        tableBody.innerHTML = "";

    for (let i = 0; i < fizzBuzzData.length; i += 2) {
        const tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fizzBuzzData[i]);
        rowCols[0].textContent = fizzBuzzData[i];

        rowCols[1].classList.add(fizzBuzzData[i + 1]);
        rowCols[1].textContent = fizzBuzzData[i + 1];



        tableBody.appendChild(tableRow);

    }
}