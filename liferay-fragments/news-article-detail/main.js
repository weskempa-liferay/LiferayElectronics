(function(fragmentElement) {
  const rootElement = fragmentElement || document.querySelector('.stentech-article-detail');
  if (!rootElement) return;

  const shareButtons = rootElement.querySelectorAll('.share-btn');
  
  shareButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      if (index === 0) {
        const subject = encodeURIComponent(rootElement.querySelector('.article-title').textContent);
        const body = encodeURIComponent('Check out this article: ' + window.location.href);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
      } else if (index === 1) {
        window.print();
      }
    });
  });
  
  const relatedCards = rootElement.querySelectorAll('.related-card');
  relatedCards.forEach(card => {
    card.addEventListener('click', function() {
      console.log('Navigate to related article');
    });
  });
})(typeof fragmentElement !== 'undefined' ? fragmentElement : null);
