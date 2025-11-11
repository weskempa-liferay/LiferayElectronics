const rootElement = fragmentElement || document.querySelector('[data-fragment-namespace="${fragmentEntryLinkNamespace}"]');

if (rootElement) {
  const mobileMenuToggle = rootElement.querySelector('.mobile-menu-toggle');
  const mobileMenu = rootElement.querySelector('.mobile-menu');
  const header = rootElement;
  let focusableElements = [];
  let firstFocusableElement = null;
  let lastFocusableElement = null;
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenuToggle.setAttribute('aria-controls', 'mobile-menu');
    mobileMenu.setAttribute('id', 'mobile-menu');
    mobileMenu.setAttribute('role', 'dialog');
    mobileMenu.setAttribute('aria-modal', 'true');
    
    function updateFocusableElements() {
      focusableElements = Array.from(mobileMenu.querySelectorAll('a[href], button:not([disabled])'));
      firstFocusableElement = focusableElements[0];
      lastFocusableElement = focusableElements[focusableElements.length - 1];
    }
    
    function toggleMobileMenu(open) {
      const isOpen = open !== undefined ? open : !mobileMenu.classList.contains('active');
      mobileMenuToggle.classList.toggle('active', isOpen);
      mobileMenu.classList.toggle('active', isOpen);
      mobileMenuToggle.setAttribute('aria-expanded', isOpen.toString());
      document.body.style.overflow = isOpen ? 'hidden' : '';
      
      if (isOpen) {
        updateFocusableElements();
        if (firstFocusableElement) {
          setTimeout(function() { firstFocusableElement.focus(); }, 50);
        }
      } else {
        mobileMenuToggle.focus();
      }
    }
    
    function trapFocus(e) {
      if (!mobileMenu.classList.contains('active')) return;
      
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    }
    
    mobileMenuToggle.addEventListener('click', function() {
      toggleMobileMenu();
    });
    
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        toggleMobileMenu(false);
      }
    });
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        toggleMobileMenu(false);
      }
      trapFocus(e);
    });
    
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link, .mobile-nav-cta');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        toggleMobileMenu(false);
      });
    });
  }
  
  const navItems = rootElement.querySelectorAll('.nav-item');
  navItems.forEach(function(item, index) {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');
    
    if (link && dropdown) {
      const dropdownId = 'dropdown-' + index;
      dropdown.setAttribute('id', dropdownId);
      dropdown.setAttribute('role', 'menu');
      link.setAttribute('aria-haspopup', 'true');
      link.setAttribute('aria-expanded', 'false');
      link.setAttribute('aria-controls', dropdownId);
      
      const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(function(dropdownItem) {
        dropdownItem.setAttribute('role', 'menuitem');
      });
      
      function openDropdown() {
        dropdown.classList.add('open');
        link.setAttribute('aria-expanded', 'true');
      }
      
      function closeDropdown() {
        dropdown.classList.remove('open');
        link.setAttribute('aria-expanded', 'false');
      }
      
      link.addEventListener('mouseenter', openDropdown);
      item.addEventListener('mouseleave', closeDropdown);
      
      link.addEventListener('focus', openDropdown);
      
      link.addEventListener('blur', function() {
        setTimeout(function() {
          if (!item.contains(document.activeElement)) {
            closeDropdown();
          }
        }, 100);
      });
      
      link.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (dropdown.classList.contains('open')) {
            closeDropdown();
          } else {
            openDropdown();
            const firstItem = dropdownItems[0];
            if (firstItem) firstItem.focus();
          }
        } else if (e.key === 'Escape') {
          closeDropdown();
          link.focus();
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          openDropdown();
          const firstItem = dropdownItems[0];
          if (firstItem) firstItem.focus();
        }
      });
      
      dropdownItems.forEach(function(dropdownItem, itemIndex) {
        dropdownItem.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') {
            closeDropdown();
            link.focus();
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextItem = dropdownItems[itemIndex + 1];
            if (nextItem) nextItem.focus();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (itemIndex === 0) {
              link.focus();
            } else {
              dropdownItems[itemIndex - 1].focus();
            }
          }
        });
        
        dropdownItem.addEventListener('blur', function(e) {
          setTimeout(function() {
            if (!item.contains(document.activeElement)) {
              closeDropdown();
            }
          }, 100);
        });
      });
    }
  });
  
  if (header && header.classList.contains('sticky')) {
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 51, 102, 0.15)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 51, 102, 0.1)';
      }
      
      lastScroll = currentScroll;
    });
  }
}