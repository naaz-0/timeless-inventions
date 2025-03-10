let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    updateCart();
    
    // Scroll to cart after adding an item
    document.getElementById("cart").scrollIntoView({ behavior: "smooth" });
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    cartCount.textContent = cart.length;
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - R${item.price}`;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeFromCart(index);
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });

    totalElement.textContent = totalPrice;

    // Highlight checkout button when items are added
    if (cart.length > 0) {
        checkoutBtn.style.background = "gold";
    } else {
        checkoutBtn.style.background = "grey";
    }
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    totalPrice = 0;
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items before checking out.");
        return;
    }

    let orderDetails = "Your Order:\n";
    cart.forEach(item => {
        orderDetails += `- ${item.product} (R${item.price})\n`;
    });

    orderDetails += `\nTotal: R${totalPrice}\n\n📞 Contact us at: 066 271 3160\n📧 inventionstimeless858@gmail.com`;

    alert(`✅ Thank you for your purchase! \n\n${orderDetails}`);
    clearCart();
}
