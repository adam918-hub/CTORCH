// لفتح النافذة المنبثقة
function openCart() {
    document.getElementById("cart-modal").style.display = "block";
}

// لإغلاق النافذة المنبثقة
function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

// إغلاق النافذة عند النقر في أي مكان خارجها
window.onclick = function(event) {
    if (event.target === document.getElementById("cart-modal")) {
        closeCart();
    }
}
// وظيفة لإظهار رسالة عند شراء منتج
function buyProduct(productName) {
    alert(`You have selected: ${productName}`);
}

// إضافة وظيفة للمنتجات
document.querySelectorAll('.product-card button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.textContent;
        buyProduct(productName);
    });
});
