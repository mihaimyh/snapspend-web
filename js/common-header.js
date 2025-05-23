// Common header for FlickAI website
document.addEventListener('DOMContentLoaded', function() {
    // Handle both index.html and other pages that use a placeholder
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const headerPlaceholder = document.querySelector('#header-placeholder');
    
    // If this is not the index page and no placeholder exists, do nothing
    if (!isIndexPage && !headerPlaceholder) return;
    
    // If this is the index page, we'll modify the existing header
    if (isIndexPage) {
        // For index.html, we just need to ensure the links are set up correctly
        setupIndexPageNav();
        return;
    }
    
    // For non-index pages with a placeholder, create the header
    const header = document.createElement('header');
    header.setAttribute('role', 'banner');
    
    // Add header content - use section hash links for index.html page
    header.innerHTML = `
        <div class="container">
            <nav class="navbar" aria-label="Primary Navigation">
                <a href="index.html" class="logo" aria-label="FlickAI Home">
                    <img src="images/flickai-logo.jpeg" alt="FlickAI Logo" style="height: 40px; margin-right: 10px; vertical-align: middle;">
                    <span>FlickAI</span>
                </a>
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-link" aria-label="Home page">Home</a></li>
                    <li><a href="index.html#features" class="nav-link" aria-label="Features section">Features</a></li>
                    <li><a href="index.html#about" class="nav-link" aria-label="About section">About</a></li>
                    <li><a href="index.html#contact" class="nav-link" aria-label="Contact section">Contact</a></li>
                    <li><a href="privacy-policy.html" aria-label="Privacy Policy">Privacy</a></li>
                </ul>
            </nav>
        </div>
    `;
    
    // Replace the placeholder with the header
    headerPlaceholder.replaceWith(header);
    
    // Set the active nav item based on current page
    setActiveNavItem();
});

// Function specifically for index.html navigation setup
function setupIndexPageNav() {
    // Update the navbar links to make sure they work with sections
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Set up smooth scrolling for navigation links on index page
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Only handle links to sections on this page (#something)
        if (href.startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Update active class on nav links
                    document.querySelectorAll('.nav-links a').forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    
                    this.classList.add('active');
                }
            });
        }
    });
    
    // Set up scroll tracking for section highlighting
    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                
                if (window.pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                
                if (href && href.substring(1) === current) {
                    link.classList.add('active');
                }
            });
            
            // Special case for Home when at very top
            if (window.pageYOffset < sections[0].offsetTop - 60) {
                navLinks.forEach(link => link.classList.remove('active'));
                const homeLink = document.querySelector('.nav-links a[href="#home"]');
                if (homeLink) homeLink.classList.add('active');
            }
        });
    }
}

// Function to set the active navigation item based on current page
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        // Get the href attribute
        const href = link.getAttribute('href');
        
        // For non-index pages
        if (href === currentPage || (href.includes(currentPage) && !href.includes('#'))) {
            link.classList.add('active');
        }
        
        // Special case for home page link
        if (currentPage === 'index.html' && href === 'index.html') {
            link.classList.add('active');
        }
    });
}
