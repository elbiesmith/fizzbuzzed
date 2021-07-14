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
    }
}

function generateFizzBuzzArray(fizz, buzz) {

    for (let i = 1; i < 101; i++) {
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
    //acces table body
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