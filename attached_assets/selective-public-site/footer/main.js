const currentYear = new Date().getFullYear();
const copyrightText = fragmentElement.querySelector('.footer-legal p');

if (copyrightText) {
  copyrightText.textContent = `© ${currentYear} Selective Insurance. All rights reserved.`;
}

const socialIcons = fragmentElement.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
  icon.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#') {
      e.preventDefault();
    }
  });
});
