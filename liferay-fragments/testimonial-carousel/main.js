const rootElement = fragmentElement || document.querySelector('[data-fragment-namespace="${fragmentEntryLinkNamespace}"]');

if (rootElement) {
  const track = rootElement.querySelector('.testimonial-track');
  const items = rootElement.querySelectorAll('.testimonial-item');
  const prevBtn = rootElement.querySelector('.carousel-btn.prev');
  const nextBtn = rootElement.querySelector('.carousel-btn.next');
  const dotsContainer = rootElement.querySelector('.carousel-dots');
  
  let currentIndex = 0;
  const totalItems = items.length;
  
  items.forEach(function(_, index) {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
    dot.addEventListener('click', function() {
      goToSlide(index);
    });
    dotsContainer.appendChild(dot);
  });
  
  const dots = dotsContainer.querySelectorAll('.carousel-dot');
  
  function updateCarousel() {
    track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    
    dots.forEach(function(dot, index) {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  
  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }
  
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  
  let autoplayInterval = setInterval(nextSlide, 7000);
  
  rootElement.addEventListener('mouseenter', function() {
    clearInterval(autoplayInterval);
  });
  
  rootElement.addEventListener('mouseleave', function() {
    autoplayInterval = setInterval(nextSlide, 7000);
  });
}
