const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObs.unobserve(e.target); 
        }
    });
}, { threshold: 0.08 });

revealEls.forEach(function(el) {
    revealObs.observe(el);
});