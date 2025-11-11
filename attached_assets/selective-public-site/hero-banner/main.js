const agentFinderForm = fragmentElement.querySelector('#agentFinderForm');

if (agentFinderForm) {
  const zipInput = fragmentElement.querySelector('#zipCode');
  const zipError = fragmentElement.querySelector('#zipCodeError');
  
  agentFinderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const zipCode = zipInput.value;
    const productInterest = fragmentElement.querySelector('#productInterest').value;
    
    if (zipCode.length !== 5 || !/^\d{5}$/.test(zipCode)) {
      zipInput.classList.add('invalid');
      zipError.textContent = 'Please enter a valid 5-digit ZIP code';
      zipError.classList.add('active');
      zipInput.focus();
      return;
    }
    
    zipInput.classList.remove('invalid');
    zipError.classList.remove('active');
    zipError.textContent = '';
    
    const params = new URLSearchParams({
      zip: zipCode
    });
    
    if (productInterest) {
      params.append('product', productInterest);
    }
    
    window.location.href = '/find-agent?' + params.toString();
  });
  
  if (zipInput) {
    zipInput.addEventListener('input', function(e) {
      this.value = this.value.replace(/\D/g, '').slice(0, 5);
      
      if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        zipError.classList.remove('active');
        zipError.textContent = '';
      }
    });
  }
}