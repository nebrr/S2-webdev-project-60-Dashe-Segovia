
/* Reveal on scroll*/
/* When you scroll down the page, elements with the .reveal class fade in and slide up.
this makes the page feel more interactive (Which is required)*/

/* Get all elements that should fade in on scroll*/
var revealEls = document.querySelectorAll('.reveal');

/* Create an oberver that watches when elements come into view*/
var revealObs = new IntersectionObserver(function(entries) {
  /* Check each element to see if it's visible onscreen*/
    entries.forEach(function(e) {
        /* If the element is now visible*/
        if (e.isIntersecting) {
            /* add the 'visible' class which triggers the fade-in animation*/
            e.target.classList.add('visible');  
            /* stops watching this element since animation is done*/
            revealObs.unobserve(e.target);     
        }
    });
}, { threshold: 0.08 }); /* Start animating when 8% of element is visible*/

/* Start watching all reveal elements*/
revealEls.forEach(function(el) {
    revealObs.observe(el);
});

/* Info Slider (first Slider*) */
/* This carousal has arrow buttons on the sides instead of dots at bottom.*/

/* get the elements for this slider*/
var infoTrack   = document.getElementById("infoTrack");    /* the container that slides*/
var infoPrev    = document.getElementById("infoPrev");     /* left arrow button*/
var infoNext    = document.getElementById("infoNext");    /* Right arrow button*/
var infoDotsBox = document.getElementById("infoDots");     /* Container for the dots*/
/* Only run this code if all carousel elements exist*/
if (infoTrack && infoPrev && infoNext && infoDotsBox) {

  /* Get all the slides and count them*/
    var infoSlides  = document.querySelectorAll(".info-slide");
    var infoTotal   = infoSlides.length;
    var infoCurrent = 0; /* Which slide we're currently on (starts at 0)*/

   /* Create a dot button each slide*/
    for (var i = 0; i < infoTotal; i++) {
        var infoDot = document.createElement("button");/* make a new button */
        infoDot.classList.add("info-dot");/* Give it the info dot class*/
        infoDotsBox.appendChild(infoDot); /* add it to the page*/
    }

  /* Function to switch to a specific slide*/
    function goToInfo(number) {
        /* If slide number is too high, wrap around to the beginning*/
        if (number >= infoTotal) { number = 0; }
        /* if slide number is too low, wrap around to the end*/
        if (number < 0) { number = infoTotal - 1; }
        /* Remember which slide We're on*/
        infoCurrent = number;

        /* Move the slider by sliding it left (negative percentage)*/
        infoTrack.style.transform = "translateX(-" + infoCurrent * 100 + "%)";

        /* Remove the blue highlight from all dots*/
        var allInfoDots = document.querySelectorAll(".info-dot");
        for (var i = 0; i < allInfoDots.length; i++) {
            allInfoDots[i].classList.remove("active");
        }
        /* add blue highlight to the current slide's dot*/
        allInfoDots[infoCurrent].classList.add("active");
    }

    /* makes it clickable*/
    var allInfoDots = document.querySelectorAll(".info-dot");
    for (var i = 0; i < allInfoDots.length; i++) {
        allInfoDots[i].addEventListener("click", function() {
            /* Find which dot was clicked*/
            var clickedIndex = Array.from(allInfoDots).indexOf(this);
            /* Go to that slide*/
            goToInfo(clickedIndex);
        });
    }

    /* Make arrow buttons work*/
    infoNext.addEventListener("click", function() { goToInfo(infoCurrent + 1); });
    infoPrev.addEventListener("click", function() { goToInfo(infoCurrent - 1); });
    /*Show the first slide when the page loads*/
    goToInfo(0);
}

/* Planet Slider (second Slider)*/
/* This slider shows planets */


/* Get the elements for this slider*/
var track   = document.getElementById("sliderTrack"); /* The container that slides*/
var prevBtn = document.getElementById("prevBtn");     /* Left arrow button*/
var nextBtn = document.getElementById("nextBtn");    /* Right Arrow Button*/
var dotsBox = document.getElementById("dots");        /* Container for the dots*/

/* Conly run this code if all slider element exist*/
if (track && prevBtn && nextBtn && dotsBox) {

   /* get all the slides and count them*/
    var slides  = document.querySelectorAll(".slide");
    var total   = slides.length;
    var current = 0; /* Which slide we're currently on*/

    /* Create a dot button for each slide*/
    for (var i = 0; i < total; i++) {
        var dot = document.createElement("button");/* Make a new button*/
        dot.classList.add("dot");/* Give it the dot class*/
        dotsBox.appendChild(dot);/* add it to the page*/
    }

   /* Function to switch to a specific slide*/
    function goToSlide(number) {
       /* If slide number is too high, wrap around to the around to the beginning*/
        if (number >= total) { number = 0; }
         /* If slide number is too low, wrap around to the end*/
        if (number < 0) { number = total - 1; }
       /* Remember which slide we're on*/
        current = number;

      /* Move the slider by sliding it left ( Negative percentage)*/
        track.style.transform = "translateX(-" + current * 100 + "%)";

       /* Remove the blue highlight from all dots*/
        var allDots = document.querySelectorAll(".dot");
        for (var i = 0; i < allDots.length; i++) {
            allDots[i].classList.remove("active");
        }
        /* add blue highlight to the current slide's dot*/
        allDots[current].classList.add("active");
    }

   /* Make the dots clickable*/
    var allDots = document.querySelectorAll(".dot");
    for (var i = 0; i < allDots.length; i++) {
        allDots[i].addEventListener("click", function() {
            /* Find which dot was clicked*/
            var clickedIndex = Array.from(allDots).indexOf(this);
            /* Go to that slide*/
            goToSlide(clickedIndex);
        });
    }
    /* Make arrow buttons work */
    nextBtn.addEventListener("click", function() { goToSlide(current + 1); });/* next slide*/
    prevBtn.addEventListener("click", function() { goToSlide(current - 1); });/* prev slide*/

    /* show the first slide when page loads*/
    goToSlide(0);
}