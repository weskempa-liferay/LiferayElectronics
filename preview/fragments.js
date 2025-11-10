document.addEventListener('DOMContentLoaded', function() {
  const productGrid = document.getElementById('product-grid');
  if (productGrid) {
    const cards = productGrid.querySelectorAll('.product-card');
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          setTimeout(function() {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 50);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    cards.forEach(function(card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }

  const statsGrid = document.getElementById('stats-grid');
  if (statsGrid) {
    const statNumbers = statsGrid.querySelectorAll('.stat-number');
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
            const numericValue = parseInt(target);
            
            if (!isNaN(numericValue)) {
              animateValue(stat, 0, numericValue, 2000);
              setTimeout(function() {
                if (numericValue === 21) stat.textContent = '21+';
                if (numericValue === 90) stat.textContent = '90+';
                if (numericValue === 350) stat.textContent = '350+';
                if (numericValue === 3500) stat.textContent = '3500+';
              }, 2000);
            }
          });
        }
      });
    }, observerOptions);
    
    observer.observe(statsGrid);
  }

  const testimonialCarousel = document.getElementById('testimonial-carousel');
  if (testimonialCarousel) {
    const track = testimonialCarousel.querySelector('.testimonial-track');
    const items = testimonialCarousel.querySelectorAll('.testimonial-item');
    const prevBtn = testimonialCarousel.querySelector('.carousel-btn.prev');
    const nextBtn = testimonialCarousel.querySelector('.carousel-btn.next');
    const dotsContainer = testimonialCarousel.querySelector('.carousel-dots');
    
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
    
    testimonialCarousel.addEventListener('mouseenter', function() {
      clearInterval(autoplayInterval);
    });
    
    testimonialCarousel.addEventListener('mouseleave', function() {
      autoplayInterval = setInterval(nextSlide, 7000);
    });
  }

  const ctaSection = document.getElementById('cta-section');
  if (ctaSection) {
    const cards = ctaSection.querySelectorAll('.cta-card');
    
    const observerOptions = {
      threshold: 0.3
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          setTimeout(function() {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 150);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    cards.forEach(function(card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }
});
