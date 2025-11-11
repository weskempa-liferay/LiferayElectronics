const starsContainer = fragmentElement.querySelector('.stars');

if (starsContainer) {
  const rating = parseFloat(starsContainer.getAttribute('data-rating')) || 4.5;
  const stars = starsContainer.querySelectorAll('.star');
  
  stars.forEach((star, index) => {
    if (index < Math.floor(rating)) {
      star.style.color = '#FFCF31';
    } else if (index < rating) {
      star.style.background = 'linear-gradient(90deg, #FFCF31 50%, #ddd 50%)';
      star.style.webkitBackgroundClip = 'text';
      star.style.webkitTextFillColor = 'transparent';
    } else {
      star.style.color = '#ddd';
    }
  });
}
