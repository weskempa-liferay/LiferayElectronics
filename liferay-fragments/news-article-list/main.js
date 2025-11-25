(function(fragmentElement) {
  const rootElement = fragmentElement || document.querySelector('.electronic-news-list');
  if (!rootElement) return;

  const filterButtons = rootElement.querySelectorAll('.filter-btn');
  const newsCards = rootElement.querySelectorAll('.news-card');
  const searchInput = rootElement.querySelector('#article-search');
  
  let currentCategory = 'all';
  let currentSearchTerm = '';
  
  function filterArticles() {
    newsCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const title = card.querySelector('.news-title').textContent.toLowerCase();
      const excerpt = card.querySelector('.news-excerpt').textContent.toLowerCase();
      const author = card.querySelector('.news-author').textContent.toLowerCase();
      
      const categoryMatch = currentCategory === 'all' || category === currentCategory;
      const searchMatch = currentSearchTerm === '' || 
                         title.includes(currentSearchTerm) || 
                         excerpt.includes(currentSearchTerm) ||
                         author.includes(currentSearchTerm);
      
      if (categoryMatch && searchMatch) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeIn 0.5s ease';
      } else {
        card.classList.add('hidden');
      }
    });
  }
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      currentSearchTerm = this.value.toLowerCase().trim();
      filterArticles();
    });
  }
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      currentCategory = this.getAttribute('data-category');
      
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      filterArticles();
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
