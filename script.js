function calculateTotal() {
    let prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach((price) => {
        let value = price.textContent.trim();

        // Extract only last number (handles Cypress typing)
        let num = value.match(/\d+$/); 
        total += Number(num);
    });

    document.getElementById("ans").textContent = total;
}