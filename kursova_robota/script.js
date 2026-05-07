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