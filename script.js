document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const conteudoSection = document.querySelector('#conteudo');

    if (ctaButton && conteudoSection) {
        ctaButton.addEventListener('click', (event) => {
            event.preventDefault();
            conteudoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    const fadeTargets = document.querySelectorAll('.fade-target');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeTargets.forEach(target => {
        observer.observe(target);
    });
});
