document.addEventListener('DOMContentLoaded', () => {

    // --- Animasi Ketikan Nama ---
    const typedNameElement = document.getElementById('typed-name');
    const subtitleElement = document.querySelector('.subtitle');
    const nameToType = "DAVID SAIFUDIN";
    let charIndex = 0;

    function typeName() {
        if (charIndex < nameToType.length) {
            typedNameElement.textContent += nameToType.charAt(charIndex);
            charIndex++;
            // Atur kecepatan mengetik di sini (dalam milidetik)
            setTimeout(typeName, 150); 
        } else {
            // Setelah selesai mengetik, tampilkan subtitle
            subtitleElement.classList.add('visible');
        }
    }
    // Mulai animasi setelah halaman dimuat
    typeName();


    // --- Efek Header saat Scroll ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // --- Animasi Reveal saat Scroll ---
    const revealElements = document.querySelectorAll('.reveal');
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

    revealElements.forEach(el => {
        observer.observe(el);
    });

});