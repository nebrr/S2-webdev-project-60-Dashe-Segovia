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


var track   = document.getElementById("sliderTrack");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var dotsBox = document.getElementById("dots");


if (track && prevBtn && nextBtn && dotsBox) {

    var slides  = document.querySelectorAll(".slide");
