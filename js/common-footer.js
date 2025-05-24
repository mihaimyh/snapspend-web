// Common footer for FlickAI website
// Common footer for FlickAI website
document.addEventListener('DOMContentLoaded', function() {
    // Create footer elements
    const footer = document.createElement('footer');

    // Add footer content
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-links">
                <a href="terms-of-service.html">Terms of Service</a>
                <a href="privacy-policy.html">Privacy Policy</a>
                <a href="cookie-policy.html">Cookie Policy</a>
            </div>
            <p>&copy; 2025 FlickAI. All rights reserved.</p>
        </div>
    `;

    // Find the page container
    const pageContainer = document.querySelector('.page-container');

    if (pageContainer) {
        // If pageContainer exists, append the footer after it
        pageContainer.parentNode.insertBefore(footer, pageContainer.nextSibling);
    } else {
        // Otherwise append to body
        document.body.appendChild(footer);
    }

    // Add footer styles from the index page if they don't exist
    if (!document.querySelector('#footer-styles')) {
        const footerStyles = document.createElement('style');
        footerStyles.id = 'footer-styles';
        footerStyles.textContent = `
            footer {
                background-color: var(--background-dark);
                color: var(--text-light);
                text-align: center;
                padding: 40px 20px;
                margin-top: 0;
            }
            .footer-content {
                max-width: 1100px;
                margin: 0 auto; /* Center the content */
            }
            .footer-links {
                margin-bottom: 20px;
            }
            .footer-links a {
                color: var(--text-light);
                text-decoration: none;
                margin: 0 10px;
                transition: color 0.3s ease;
            }
            .footer-links a:hover {
                color: var(--primary); /* Use primary color for hover */
                text-decoration: underline;
            }
            footer p {
                font-size: 0.9rem;
                color: var(--text-light);
            }
            footer a {
                color: var(--text-light);
                text-decoration: none;
            }
            footer a:hover {
                text-decoration: underline;
                color: var(--primary); /* Use primary color for hover */
            }
        `;
        document.head.appendChild(footerStyles);
    }
});
