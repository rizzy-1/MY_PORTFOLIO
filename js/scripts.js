/*!
* Start Bootstrap - Grayscale v7.0.6 enhancements
*/

// Wait for DOM to load
window.addEventListener('DOMContentLoaded', event => {

    // -------------------------------
    // Navbar shrink on scroll
    // -------------------------------
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) return;
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // -------------------------------
    // Activate Bootstrap scrollspy
    // -------------------------------
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // -------------------------------
    // Collapse responsive navbar when nav link clicked
    // -------------------------------
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // -------------------------------
    // Smooth scrolling for nav links
    // -------------------------------
    document.querySelectorAll('a.nav-link, a.btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // -------------------------------
    // Fade-in animation on scroll
    // -------------------------------
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // -------------------------------
    // Optional: Back to top button
    // -------------------------------
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.id = 'backToTop';
    backToTopBtn.style.cssText = `
        position: fixed; bottom: 40px; right: 40px;
        background-color: #f9c74f; color: #111; border: none;
        border-radius: 50%; width: 50px; height: 50px;
        display: none; cursor: pointer; z-index: 9999;
    `;
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // -------------------------------
    // Optional: Vertical carousel scroll with mouse wheel
    // -------------------------------
    const carousel = document.getElementById('project1Carousel');
    if (carousel) {
        carousel.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
                bootstrap.Carousel.getInstance(carousel).prev();
            } else {
                bootstrap.Carousel.getInstance(carousel).next();
            }
        });
    }

});
