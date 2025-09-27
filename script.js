// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Fade-in sections/cards when they come into view
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
},{threshold:0.1});

document.querySelectorAll('.section, .card').forEach(el=>{
  el.style.opacity = 0;
  el.style.transform = 'translateY(10px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});

// Add the "in" class animation target
const style = document.createElement('style');
style.textContent = `.in{opacity:1 !important; transform:translateY(0) !important}`;
document.head.appendChild(style);
