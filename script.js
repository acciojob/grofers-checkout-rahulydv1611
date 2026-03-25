// Step 1: Select all prices
let prices = document.querySelectorAll(".prices");

// Step 2: Calculate total
let total = 0;

prices.forEach((price) => {
    total += Number(price.textContent);
});

// Step 3: Create new row
let table = document.querySelector("table");
let newRow = document.createElement("tr");
let newCell = document.createElement("td");

// Step 4: Set content
newCell.textContent = total;

// Make it span across both columns
newCell.colSpan = 2;

// Step 5: Append row to table
newRow.appendChild(newCell);
table.appendChild(newRow);