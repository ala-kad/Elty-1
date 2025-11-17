// Get references to checkboxes
let allPagesCheckbox = document.getElementById('check-1');
let pageCheckboxes = document.querySelectorAll('input[id^="page"]');

// Handle "All pages" checkbox change
allPagesCheckbox.addEventListener('change', () => {
  pageCheckboxes.forEach(checkbox => {
    checkbox.checked = allPagesCheckbox.checked;
  });
});

// Handle individual page checkbox changes
pageCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    // Check if all pages are checked
    let allChecked = Array.from(pageCheckboxes).every(cb => cb.checked);
    // Update "All pages" checkbox accordingly
    if (allChecked) {
      allPagesCheckbox.checked = true;
    } else {
      // If any page is unchecked (either all unchecked or partially checked), uncheck "All pages"
      allPagesCheckbox.checked = false;
    }
  });
}); 