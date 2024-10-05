document.addEventListener('mousemove', (e) => {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
      const speed = star.style.getPropertyValue('--i');
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      star.style.transform = `translate(${x}px, ${y}px)`;
  });
});
