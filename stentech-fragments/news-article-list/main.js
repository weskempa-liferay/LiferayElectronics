(function(fragmentElement) {
  const rootElement = fragmentElement || document.querySelector('.stentech-news-list');
  if (!rootElement) return;

  const filterButtons = rootElement.querySelectorAll('.filter-btn');
  const newsCards = rootElement.querySelectorAll('.news-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      newsCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeIn 0.5s ease';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
})(typeof fragmentElement !== 'undefined' ? fragmentElement : null);
