const rootElement = fragmentElement || document.querySelector('[data-fragment-namespace="${fragmentEntryLinkNamespace}"]');

if (rootElement) {
  const statNumbers = rootElement.querySelectorAll('.stat-number');
  let animated = false;
  
  function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(function() {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 16);
  }
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(function(stat) {
          const target = stat.getAttribute('data-target');
          const numericValue = parseInt(target.replace(/\D/g, ''));
          
          if (!isNaN(numericValue)) {
            animateValue(stat, 0, numericValue, 2000);
            setTimeout(function() {
              stat.textContent = target;
            }, 2000);
          }
        });
      }
    });
  }, observerOptions);
  
  observer.observe(rootElement);
}
