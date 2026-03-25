// 1. Select all elements that contain the prices
const priceElements = document.querySelectorAll('.price');

let total = 0;

// 2. Iterate through the elements, convert text to numbers, and sum them up
priceElements.forEach((element) => {
    // We use parseFloat or Number to ensure the string is treated as a digit
    total += parseFloat(element.innerText);
});

// 3. Select the table to append the new row
const table = document.querySelector('table');

// 4. Create a new table row (tr) and a table data cell (td)
const totalRow = document.createElement('tr');
const totalData = document.createElement('td');

// 5. Set the content and attributes
// Giving it a data-ns-test attribute is often required by automated tests
totalData.setAttribute('data-ns-test', 'grandTotal'); 
totalData.innerText = total;

// Optional: Make the total span across both columns for better UI
totalData.setAttribute('colspan', '2');

// 6. Append the cell to the row, and the row to the table
totalRow.appendChild(totalData);
table.appendChild(totalRow);