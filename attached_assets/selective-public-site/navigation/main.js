const mobileMenuToggle = fragmentElement.querySelector('#mobileMenuToggle');
const navMenu = fragmentElement.querySelector('#navMenu');

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener('click', function() {
    const isExpanded = navMenu.classList.contains('active');
    navMenu.classList.toggle('active');
    
    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    
    const lines = mobileMenuToggle.querySelectorAll('.hamburger-line');
    if (navMenu.classList.contains('active')) {
      lines[0].style.transform = 'rotate(45deg) translateY(9px)';
      lines[1].style.opacity = '0';
      lines[2].style.transform = 'rotate(-45deg) translateY(-9px)';
    } else {
      lines[0].style.transform = '';
      lines[1].style.opacity = '';
      lines[2].style.transform = '';
    }
  });
  
  document.addEventListener('click', function(e) {
    if (!fragmentElement.contains(e.target)) {
      navMenu.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      const lines = mobileMenuToggle.querySelectorAll('.hamburger-line');
      lines[0].style.transform = '';
      lines[1].style.opacity = '';
      lines[2].style.transform = '';
    }
  });
}