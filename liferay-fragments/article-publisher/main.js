(function(fragmentElement) {
  const rootElement = fragmentElement || document.querySelector('.stentech-article-publisher');
  if (!rootElement) return;

  const form = rootElement.querySelector('.article-form');
  const publishBtn = rootElement.querySelector('#publish-btn');
  const saveDraftBtn = rootElement.querySelector('#save-draft-btn');
  const successMessage = rootElement.querySelector('#success-message');
  const imageUploadZone = rootElement.querySelector('#image-upload');
  const imageInput = rootElement.querySelector('#featured-image');
  
  const publishDateInput = rootElement.querySelector('#publish-date');
  if (publishDateInput) {
    const today = new Date().toISOString().split('T')[0];
    publishDateInput.value = today;
  }
  
  imageUploadZone.addEventListener('click', () => {
    imageInput.click();
  });
  
  imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      imageUploadZone.querySelector('p').textContent = `Selected: ${file.name}`;
      imageUploadZone.style.borderColor = '#0066cc';
      imageUploadZone.style.background = '#f8fbff';
    }
  });
  
  const toolbarBtns = rootElement.querySelectorAll('.toolbar-btn');
  const contentEditor = rootElement.querySelector('#article-content');
  
  toolbarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-action');
      const start = contentEditor.selectionStart;
      const end = contentEditor.selectionEnd;
      const selectedText = contentEditor.value.substring(start, end);
      
      let replacement = '';
      switch(action) {
        case 'bold':
          replacement = `**${selectedText}**`;
          break;
        case 'italic':
          replacement = `*${selectedText}*`;
          break;
        case 'heading':
          replacement = `\n\n## ${selectedText}\n\n`;
          break;
        case 'list':
          replacement = `\n- ${selectedText}`;
          break;
        case 'link':
          replacement = `[${selectedText}](url)`;
          break;
      }
      
      if (replacement) {
        contentEditor.value = 
          contentEditor.value.substring(0, start) + 
          replacement + 
          contentEditor.value.substring(end);
        contentEditor.focus();
      }
    });
  });
  
  function validateForm() {
    const title = rootElement.querySelector('#article-title').value.trim();
    const category = rootElement.querySelector('#article-category').value;
    const date = rootElement.querySelector('#publish-date').value;
    const excerpt = rootElement.querySelector('#article-excerpt').value.trim();
    const content = rootElement.querySelector('#article-content').value.trim();
    
    if (!title || !category || !date || !excerpt || !content) {
      alert('Please fill in all required fields');
      return false;
    }
    return true;
  }
  
  publishBtn.addEventListener('click', () => {
    if (validateForm()) {
      successMessage.classList.remove('hidden');
      setTimeout(() => {
        form.reset();
        successMessage.classList.add('hidden');
        publishDateInput.value = new Date().toISOString().split('T')[0];
        imageUploadZone.querySelector('p').textContent = 'Click to upload or drag and drop';
        imageUploadZone.style.borderColor = '';
        imageUploadZone.style.background = '';
      }, 3000);
    }
  });
  
  saveDraftBtn.addEventListener('click', () => {
    const title = rootElement.querySelector('#article-title').value.trim();
    if (!title) {
      alert('Please enter an article title before saving as draft');
      return;
    }
    alert('Draft saved successfully! You can return to edit it later.');
  });
  
  const editBtns = rootElement.querySelectorAll('.edit-btn');
  const deleteBtns = rootElement.querySelectorAll('.delete-btn');
  
  editBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (confirm('Are you sure you want to delete this draft?')) {
        this.closest('.draft-item').remove();
      }
    });
  });
})(typeof fragmentElement !== 'undefined' ? fragmentElement : null);
