const blogCards = fragmentElement.querySelectorAll('.blog-card');

blogCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.1});
  
  observer.observe(card);
});