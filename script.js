document.addEventListener('DOMContentLoaded', () => {
    
    // Скрол вниз при натисканні на кнопку
    const scrollBtn = document.getElementById('scrollBtn');
    const targetSection = document.getElementById('more-reviews');

    if(scrollBtn && targetSection) {
        scrollBtn.addEventListener('click', () => {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Анімація появи блоків (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToFade = document.querySelectorAll('.fade-in');
    elementsToFade.forEach(el => observer.observe(el));
});

// Слайдер для "Останні огляди"
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('latestCarouselTrack');
    const btnLeft = document.getElementById('zoneLeft');
    const btnRight = document.getElementById('zoneRight');
    
    if (track && btnLeft && btnRight) {
        const cards = document.querySelectorAll('.latest-carousel-track .latest-review-card');
        let index = 0;

        const slideCarousel = () => {
            const width = track.clientWidth;
            track.style.transform = `translateX(-${index * width}px)`;
        };

        btnRight.addEventListener('click', () => {
            if (index < cards.length - 1) {
                index++;
            } else {
                index = 0;
            }
            slideCarousel();
        });

        btnLeft.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = cards.length - 1;
            }
            slideCarousel();
        });

        window.addEventListener('resize', slideCarousel);
    }
});