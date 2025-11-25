(function(fragmentElement) {
  const rootElement = fragmentElement || document.querySelector('.electronic-policy-viewer');
  if (!rootElement) return;

  const searchInput = rootElement.querySelector('#policy-search');
  const policyItems = rootElement.querySelectorAll('.policy-item');
  const viewButtons = rootElement.querySelectorAll('.view-btn');
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      
      policyItems.forEach(item => {
        const policyName = item.getAttribute('data-policy-name').toLowerCase();
        const title = item.querySelector('.policy-title').textContent.toLowerCase();
        const description = item.querySelector('.policy-description').textContent.toLowerCase();
        
        if (policyName.includes(searchTerm) || 
            title.includes(searchTerm) || 
            description.includes(searchTerm)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  }
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      const policyTitle = this.closest('.policy-item').querySelector('.policy-title').textContent;
      console.log('View policy:', policyTitle);
    });
  });
})(typeof fragmentElement !== 'undefined' ? fragmentElement : null);
