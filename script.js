// 1. Select all elements with class "prices"
const priceElements = document.querySelectorAll('.prices');

let total = 0;

// 2. Sum the values
priceElements.forEach((element) => {
    total += Number(element.innerText);
});

// 3. Get the table reference
const table = document.querySelector('table');

// 4. Create a new row and a single cell
const totalRow = document.createElement('tr');
const totalData = document.createElement('td');

// 5. Apply the required test attribute and the sum
totalData.setAttribute('data-ns-test', 'grandTotal');
totalData.innerText = total;

// 6. Append to the table
totalRow.appendChild(totalData);
table.appendChild(totalRow);