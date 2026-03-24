// Step 1: Get all price elements
let prices = document.querySelectorAll(".price");

let total = 0;

// Step 2: Calculate total
prices.forEach((item) => {
  total += Number(item.innerText);
});

// Step 3: Create new row
let tr = document.createElement("tr");

// Step 4: Create new cell
let td = document.createElement("td");

// Make it span 2 columns (optional but good UI)
td.setAttribute("colspan", "2");

// Add total text
td.innerText = total;

// Step 5: Append cell to row
tr.appendChild(td);

// Step 6: Append row to table
let table = document.querySelector("table");
table.appendChild(tr);