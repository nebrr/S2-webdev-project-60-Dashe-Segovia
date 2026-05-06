  const cursor     = document.getElementById('cursor');
        const cursorRing = document.getElementById('cursorRing');
        let mx = 0, my = 0, rx = 0, ry = 0;

        document.addEventListener('mousemove', e => {
            mx = e.clientX; my = e.clientY;
            cursor.style.left = mx + 'px';
            cursor.style.top  = my + 'px';
        });

        (function animRing() {
            rx += (mx - rx) * 0.11;
            ry += (my - ry) * 0.11;
            cursorRing.style.left = rx + 'px';
            cursorRing.style.top  = ry + 'px';
            requestAnimationFrame(animRing);
        })();

        
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width      = '14px';
                cursor.style.height     = '14px';
                cursor.style.background = '#4da6ff';
                cursorRing.style.width  = '54px';
                cursorRing.style.height = '54px';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width      = '8px';
                cursor.style.height     = '8px';
                cursor.style.background = '#fff';
                cursorRing.style.width  = '36px';
                cursorRing.style.height = '36px';
            });
        });

       
        const revealEls = document.querySelectorAll('.reveal');
        const revealObs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    revealObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.08 });
        revealEls.forEach(el => revealObs.observe(el));