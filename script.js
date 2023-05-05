const toggleKateriButton = document.querySelector('#toggle-kateri');
const kateriCitation = document.querySelector('#kateri');

toggleKateriButton.addEventListener('click', function() {
  if (kateriCitation.style.display === 'none') {
    kateriCitation.style.display = 'block';
    toggleKateriButton.textContent = 'Hide Kateri citation';
  } else {
    kateriCitation.style.display = 'none';
    toggleKateriButton.textContent = 'Show Kateri citation';
  }
});
