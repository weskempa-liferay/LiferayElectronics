(function(fragmentElement) {
  const rootElement = fragmentElement || document.querySelector('.stentech-policy-manager');
  if (!rootElement) return;

  const form = rootElement.querySelector('.policy-form');
  const publishBtn = rootElement.querySelector('#publish-policy-btn');
  const saveDraftBtn = rootElement.querySelector('#save-draft-btn');
  const successMessage = rootElement.querySelector('#success-message');
  const documentUploadZone = rootElement.querySelector('#document-upload');
  const documentInput = rootElement.querySelector('#policy-document');
  const fileInfo = rootElement.querySelector('#file-info');
  const removeFileBtn = rootElement.querySelector('.remove-file-btn');
  
  const effectiveDateInput = rootElement.querySelector('#effective-date');
  if (effectiveDateInput) {
    const today = new Date().toISOString().split('T')[0];
    effectiveDateInput.value = today;
  }
  
  documentUploadZone.addEventListener('click', () => {
    documentInput.click();
  });
  
  documentInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      
      documentUploadZone.classList.add('hidden');
      fileInfo.classList.remove('hidden');
      fileInfo.querySelector('.file-name').textContent = file.name;
      fileInfo.querySelector('.file-size').textContent = `${sizeMB} MB`;
    }
  });
  
  if (removeFileBtn) {
    removeFileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      documentInput.value = '';
      documentUploadZone.classList.remove('hidden');
      fileInfo.classList.add('hidden');
    });
  }
  
  function validateForm() {
    const title = rootElement.querySelector('#policy-title').value.trim();
    const category = rootElement.querySelector('#policy-category').value;
    const version = rootElement.querySelector('#policy-version').value.trim();
    const description = rootElement.querySelector('#policy-description').value.trim();
    const effectiveDate = rootElement.querySelector('#effective-date').value;
    const hasDocument = documentInput.files.length > 0;
    
    if (!title || !category || !version || !description || !effectiveDate) {
      alert('Please fill in all required fields');
      return false;
    }
    
    if (!hasDocument) {
      alert('Please upload a policy document');
      return false;
    }
    
    const reviewedLegal = rootElement.querySelector('#reviewed-legal').checked;
    const approvedManagement = rootElement.querySelector('#approved-management').checked;
    
    if (!reviewedLegal || !approvedManagement) {
      const confirm = window.confirm('This policy has not been fully reviewed and approved. Are you sure you want to publish?');
      return confirm;
    }
    
    return true;
  }
  
  publishBtn.addEventListener('click', () => {
    if (validateForm()) {
      successMessage.classList.remove('hidden');
      setTimeout(() => {
        form.reset();
        documentUploadZone.classList.remove('hidden');
        fileInfo.classList.add('hidden');
        successMessage.classList.add('hidden');
        effectiveDateInput.value = new Date().toISOString().split('T')[0];
      }, 3000);
    }
  });
  
  saveDraftBtn.addEventListener('click', () => {
    const title = rootElement.querySelector('#policy-title').value.trim();
    if (!title) {
      alert('Please enter a policy title before saving as draft');
      return;
    }
    alert('Draft saved successfully! You can return to complete it later.');
  });
  
  const editBtns = rootElement.querySelectorAll('.edit-btn');
  const archiveBtns = rootElement.querySelectorAll('.archive-btn');
  
  editBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  
  archiveBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (confirm('Are you sure you want to archive this policy? It will no longer be visible to employees.')) {
        this.closest('tr').remove();
      }
    });
  });
})(typeof fragmentElement !== 'undefined' ? fragmentElement : null);
