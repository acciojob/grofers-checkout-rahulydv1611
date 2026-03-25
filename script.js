// Step 1: Get all price elements
let prices = document.querySelectorAll(".prices");

// Step 2: Calculate total
let total = 0;

prices.forEach((price) => {
    total += Number(price.textContent);
});

// Step 3: Create new row and cell
let table = document.querySelector("table");

let newRow = document.createElement("tr");
let newCell = document.createElement("td");

// Step 4: Set text and span across 2 columns
newCell.textContent = "Total: " + total;
newCell.colSpan = 2;

// Step 5: Append cell to row and row to table
newRow.appendChild(newCell);
table.appendChild(newRow);