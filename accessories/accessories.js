document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.addCart');
  const bagIcon = document.getElementById('bagIcon');

  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const productCard = button.closest('.card');
      const productName = productCard.querySelector('.head-2').textContent;
      const productImage = productCard.querySelector('.productImage').src;
      const productPrice = productCard.querySelector('.rate').textContent;

      const item = {
        name: productName,
        image: productImage,
        price: productPrice
      };

      cartItems.push(item);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      alert(`${productName} added to bag!`);
    });
  });

  bagIcon.addEventListener('click', () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = 'bag.html';
  });
});
