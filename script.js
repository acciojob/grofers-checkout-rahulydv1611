let button = document.querySelector("button");

button.addEventListener("click", () => {
    let prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach((price) => {
        let value = price.textContent.trim();

        // Take only last number (handles Cypress typing issue)
        let num = value.match(/\d+$/);

        total += Number(num);
    });

    document.getElementById("ans").textContent = total;
});