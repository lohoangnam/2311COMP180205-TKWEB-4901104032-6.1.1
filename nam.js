var buyButtons = document.querySelectorAll('.buy-now');

buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Sản phẩm đã được thêm vào giỏ hàng.');
    });
});