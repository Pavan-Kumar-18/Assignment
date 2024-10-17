
const productRadios = document.querySelectorAll('input[name="product"]');
const totalAmountElement = document.getElementById('total-amount');
const addToCartButton = document.getElementById('add-to-cart-button');

let selectedPrice = 0;

productRadios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        selectedPrice = parseInt(event.target.value);
        totalAmountElement.textContent = selectedPrice;
    });
});


addToCartButton.addEventListener('click', () => {
    if (selectedPrice > 0) {
        alert(`Product added to cart. Total amount is $${selectedPrice}.`);
    } else {
        alert("Please select a product first!");
    }
});
