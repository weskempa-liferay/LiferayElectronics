const claimsBtns = fragmentElement.querySelectorAll('.claims-btn');

claimsBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});
