document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Скрол вниз при натисканні на кнопку (на головній сторінці)
    const scrollBtn = document.getElementById('scrollBtn');
    const targetSection = document.getElementById('more-reviews');

    if (scrollBtn && targetSection) {
        scrollBtn.addEventListener('click', () => {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Анімація появи блоків при скролі (Intersection Observer)
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


    // 3. ЛОГІКА ДЛЯ БУРГЕР-МЕНЮ (ПРАЦЮЄ НА ВСІХ СТОРІНКАХ)
    const mobileToggle = document.getElementById('mobileToggle');
    const navbar = document.querySelector('.navbar');

    if (mobileToggle && navbar) {
        mobileToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }


    // 4. Логіка для каруселі оглядів (гортання кнопками ліворуч/праворуч)
    const reviewsTrack = document.getElementById('reviewsTrack');
    const btnLeft = document.getElementById('scrollLeftBtn');
    const btnRight = document.getElementById('scrollRightBtn');

    if (reviewsTrack && btnLeft && btnRight) {
        btnRight.addEventListener('click', () => {
            const cardWidth = reviewsTrack.querySelector('.full-review-card').offsetWidth + 20; 
            reviewsTrack.scrollLeft += cardWidth;
        });

        btnLeft.addEventListener('click', () => {
            const cardWidth = reviewsTrack.querySelector('.full-review-card').offsetWidth + 20;
            reviewsTrack.scrollLeft -= cardWidth;
        });
    }
});