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
    var total   = slides.length;
    var current = 0;

   
    for (var i = 0; i < total; i++) {
        var dot = document.createElement("button");
        dot.classList.add("dot");
        dotsBox.appendChild(dot);
    }

    function goToSlide(number) {
        if (number >= total) { number = 0; }
        if (number < 0)      { number = total - 1; }

        current = number;
        track.style.transform = "translateX(-" + current * 100 + "%)";

        var allDots = document.querySelectorAll(".dot");
        for (var i = 0; i < allDots.length; i++) {
            allDots[i].classList.remove("active");
        }
        allDots[current].classList.add("active");
    }

   
    var allDots = document.querySelectorAll(".dot");
    for (var i = 0; i < allDots.length; i++) {
        allDots[i].addEventListener("click", function() {
            var clickedIndex = Array.from(allDots).indexOf(this);
            goToSlide(clickedIndex);
        });
    }

   
    nextBtn.addEventListener("click", function() { goToSlide(current + 1); });
    prevBtn.addEventListener("click", function() { goToSlide(current - 1); });

   
    goToSlide(0);
}