document.addEventListener('DOMContentLoaded', () => {

    // Countdown Timer
    const countdownTimer = document.querySelector('.countdown-timer');
    const countdownDate = new Date('2025-07-05T10:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            countdownTimer.innerHTML = '00:00:00';
        }

        setTimeout(updateCountdown, 1000);
    }

    updateCountdown();

    // Glide.js
    const glideElement = document.querySelector('.glide');

    if (!glideElement){
        return;
    }

    let glideInstance = null;

    const glideConfig = {
        type: 'carousel',
        startAt: 0,
        perView: 7,
        autoplay: 2000,
        gap: 18,
        peek: 10,
        breakpoints: {
            1388: { perView: 5 },
            1024: { perView: 4 },
            768:  { perView: 3 },
            480:  { perView: 2 },
        }
    };

    const manageGlide = () => {
        // clean state
        if (glideInstance) {
            glideInstance.destroy();
            glideInstance = null;
        }

        // Only re-mount at 1904px
        if (window.innerWidth <= 1904) {
            glideInstance = new Glide(glideElement, glideConfig);
            glideInstance.mount();
            glideElement.classList.remove('glide--disabled');
        } else {
            glideElement.classList.add('glide--disabled');
        }
    };

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(manageGlide, 100);
    });

    // Check inital page load for glide
    manageGlide();
});