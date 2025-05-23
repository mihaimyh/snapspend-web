// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu button
    const createHamburgerMenu = () => {
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger-menu';
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        return hamburger;
    };

    // Create overlay element
    const createOverlay = () => {
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        return overlay;
    };

    // Function to toggle menu state
    const toggleMenu = (hamburger, navLinks, overlay) => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        
        // Disable body scroll when menu is open
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    };

    // Add hamburger menu to mobile devices only
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    
    if (isMobile) {
        const header = document.querySelector('header[role="banner"]');
        const navLinks = document.querySelector('.nav-links');
        
        if (header && navLinks) {
            const hamburger = createHamburgerMenu();
            const overlay = createOverlay();
            
            // Append hamburger button to header
            header.querySelector('.container').appendChild(hamburger);
            
            // Append overlay to body
            document.body.appendChild(overlay);
            
            // Toggle menu on hamburger click
            hamburger.addEventListener('click', () => {
                toggleMenu(hamburger, navLinks, overlay);
            });
            
            // Close menu when clicking on overlay
            overlay.addEventListener('click', () => {
                toggleMenu(hamburger, navLinks, overlay);
            });
            
            // Close menu when clicking a nav link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    toggleMenu(hamburger, navLinks, overlay);
                });
            });
            
            // Close menu on window resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 767 && navLinks.classList.contains('active')) {
                    toggleMenu(hamburger, navLinks, overlay);
                }
            });
        }
    }
});
