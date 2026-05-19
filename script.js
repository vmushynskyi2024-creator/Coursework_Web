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
document.addEventListener('DOMContentLoaded', () => {
    // Ефект появи для елементів
    const faders = document.querySelectorAll('.fade-in');
    faders.forEach(fader => {
        fader.style.opacity = '1';
    });

    createHeader();
});

function createHeader() {
    const container = document.getElementById('header-container');
    if (!container) return;

    // Створюємо основну шапку
    const header = document.createElement('header');
    header.className = 'main-header';

    // Ліва частина: Навігація
    const nav = document.createElement('nav');
    nav.className = 'desktop-menu';
    const link1 = document.createElement('a');
    link1.href = '#';
    link1.textContent = 'НОВИНИ';
    const link2 = document.createElement('a');
    link2.href = 'reviews.html';
    link2.textContent = 'ОГЛЯДИ';
    nav.appendChild(link1);
    nav.appendChild(link2);

    // Центральна частина: Логотип
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    logoDiv.textContent = 'PLAY & FUN';

    // Права частина: Пошук та Увійти
    const actions = document.createElement('div');
    actions.className = 'header-actions';
    const searchIcon = document.createElement('span');
    searchIcon.className = 'search-icon';
    searchIcon.textContent = '🔍'; 
    const loginBtn = document.createElement('button');
    loginBtn.className = 'btn-outline';
    loginBtn.textContent = 'Увійти';
    actions.appendChild(searchIcon);
    actions.appendChild(loginBtn);

    // Стрілка для мобільного меню
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    const chevron = document.createElement('span');
    chevron.className = 'chevron';
    mobileMenuToggle.appendChild(chevron);

    // Створюємо саме мобільне меню
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    const mLink1 = link1.cloneNode(true);
    const mLink2 = link2.cloneNode(true);
    mobileMenu.appendChild(mLink1);
    mobileMenu.appendChild(mLink2);

    // Додаємо елементи до шапки
    header.appendChild(nav);
    header.appendChild(logoDiv);
    header.appendChild(actions);
    header.appendChild(mobileMenuToggle); // Додаємо перемикач
    
    // Додаємо шапку та меню до контейнера
    container.appendChild(header);
    container.appendChild(mobileMenu);

    // Логіка перемикання меню
    mobileMenuToggle.addEventListener('click', () => {
        header.classList.toggle('mobile-menu-active');
        mobileMenu.classList.toggle('active');
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const navbar = document.querySelector('.navbar');

    if (mobileToggle && navbar) {
        mobileToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
});