const rootElement = fragmentElement || document.querySelector('[data-fragment-namespace="${fragmentEntryLinkNamespace}"]');

if (rootElement) {
  const currentYear = new Date().getFullYear();
  const copyrightElement = rootElement.querySelector('.copyright');
  
  if (copyrightElement) {
    const copyrightText = copyrightElement.textContent;
    if (copyrightText.includes('2025')) {
      copyrightElement.textContent = copyrightText.replace('2025', currentYear.toString());
    }
  }
}
