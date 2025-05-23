# FlickAI Website

This repository contains the code for the FlickAI website, a modern web platform for an AI-powered expense tracking application.

## Structure

The website follows a modular organization:

```
snapspend-web/
├── css/
│   ├── colors.css       # Color variables and theme definitions
│   ├── fixes.css        # Browser-specific fixes
│   ├── mobile.css       # Mobile-specific styles
│   ├── navbar.css       # Navigation bar styles
│   └── styles.css       # Main styles
├── images/
│   ├── [various image files]
├── js/
│   ├── common-footer.js # Shared footer component
│   ├── common-header.js # Shared header component
│   ├── mobile-menu.js   # Mobile hamburger menu functionality
│   └── theme-switcher.js # Dark/light theme switching
├── index.html           # Homepage
├── accessibility.html   # Accessibility statement
├── cookie-policy.html   # Cookie policy
├── gdpr-compliance.html # GDPR compliance information
├── privacy-policy.html  # Privacy policy
└── terms-of-service.html # Terms of service
```

## Key Features

### Responsive Design
- Mobile-friendly layout with hamburger menu for smaller screens
- Consistent experience across all device sizes

### Shared Components
- Common header and footer components for consistent appearance
- Dynamic navigation highlighting for current page/section

### Theme Support
- Light and dark theme support
- Automatic theme detection based on user preference

### Performance
- Minimized code duplication through shared components
- Efficient CSS organization

## Mobile Navigation

The mobile navigation system includes:

1. **Hamburger Menu**: Appears on screens narrower than 768px
2. **Slide-out Navigation**: Side panel for nav links on mobile
3. **Touch-friendly**: Larger tap targets for mobile users
4. **Smooth Transitions**: Animated menu opening/closing

## Development Guidelines

### Adding New Pages

When adding a new page:

1. Include the common CSS files:
   ```html
   <link rel="stylesheet" href="css/colors.css">
   <link rel="stylesheet" href="css/styles.css">
   <link rel="stylesheet" href="css/navbar.css">
   <link rel="stylesheet" href="css/mobile.css">
   ```

2. Add the header placeholder and scripts:
   ```html
   <div id="header-placeholder"></div>
   
   <!-- At the bottom of your page before </body> -->
   <script src="js/theme-switcher.js"></script>
   <script src="js/common-header.js"></script>
   <script src="js/common-footer.js"></script>
   <script src="js/mobile-menu.js"></script>
   ```

### Updating Navigation

To add new links to the navigation, edit the `common-header.js` file and update the navigation links array.

## Maintenance

Last updated: May 23, 2025

---

© 2025 FlickAI
