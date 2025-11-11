const featureImage = fragmentElement.querySelector('.feature-image');

if (featureImage) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {threshold: 0.2});
  
  observer.observe(featureImage);
}