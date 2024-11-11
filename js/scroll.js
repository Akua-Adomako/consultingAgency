window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.scroll-animation');
  
  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    
    
    if (position < window.innerHeight && position > 0) {
      element.classList.add('visible');
    }
  });
});
