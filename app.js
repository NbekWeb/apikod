document.querySelectorAll('.goBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.open('https://example.com', '_blank');
    });
  });
  