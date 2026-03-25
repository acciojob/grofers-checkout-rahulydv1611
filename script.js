const priceElements = document.querySelectorAll('.prices');
let total = 0;

// Calculate sum
priceElements.forEach((element) => {
    total += Number(element.innerText);
});

// Select the table
const table = document.querySelector('table');

// Create the new row
const totalRow = document.createElement('tr');

// Create the cell
const totalData = document.createElement('td');

// IMPORTANT: The test looks for this specific attribute
totalData.setAttribute('data-ns-test', 'grandTotal');
totalData.innerText = total;

// Append to table
totalRow.appendChild(totalData);
table.appendChild(totalRow);