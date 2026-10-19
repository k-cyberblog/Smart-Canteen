let total = 0;

function addToCart(name, price, qtyId) {
    let quantity = document.getElementById(qtyId).value;
    let cart = document.getElementById("cart");

    let itemTotal = price * quantity;
    total += itemTotal;

    let item = document.createElement("p");
    item.textContent = name + " x " + quantity + " = ₹" + itemTotal;
    cart.appendChild(item);

    document.getElementById("total").textContent = "Total: ₹" + total;
}