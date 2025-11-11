const productCards = fragmentElement.querySelectorAll('.product-card');

productCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.borderColor = '#FFCF31';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.borderColor = 'transparent';
  });
});
