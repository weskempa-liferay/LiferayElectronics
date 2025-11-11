const clientSearchForm = fragmentElement.querySelector('#clientSearchForm');
const clientSearchInput = fragmentElement.querySelector('#clientSearch');

if (clientSearchForm) {
  clientSearchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const searchQuery = clientSearchInput.value.trim();
    
    if (searchQuery) {
      window.location.href = '/agent/search?q=' + encodeURIComponent(searchQuery);
    }
  });
}

const suggestionTags = fragmentElement.querySelectorAll('.suggestion-tag');
suggestionTags.forEach(tag => {
  tag.addEventListener('click', function() {
    const searchText = this.textContent;
    clientSearchInput.value = searchText;
    clientSearchInput.focus();
  });
});

const actionButtons = fragmentElement.querySelectorAll('.action-btn');
actionButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    this.style.transform = 'scale(0.95) translateY(-2px)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});

const statCards = fragmentElement.querySelectorAll('.stat-card');
statCards.forEach(card => {
  card.addEventListener('click', function() {
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
  });
});
