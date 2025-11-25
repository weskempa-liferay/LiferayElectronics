const rootElement = fragmentElement || document.querySelector('[data-fragment-namespace="${fragmentEntryLinkNamespace}"]');

if (rootElement) {
  const video = rootElement.closest('.electronic-hero').querySelector('.hero-video');
  
  if (video) {
    video.addEventListener('loadedmetadata', function() {
      this.play().catch(function(error) {
        console.log('Video autoplay prevented:', error);
      });
    });
  }
}
