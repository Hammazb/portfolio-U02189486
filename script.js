// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Section/card reveal on scroll
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, {threshold:0.1});
  document.querySelectorAll('.section, .card').forEach(el=>observer.observe(el));
} else {
  document.querySelectorAll('.section, .card').forEach(el=>el.classList.add('in'));
}
