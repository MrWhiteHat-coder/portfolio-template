# Portfolio Website Template

A modern, responsive portfolio website template designed for web developers, designers, and creatives. This template is built with HTML5, CSS3, and vanilla JavaScript, and can be easily adapted for sale on the Wix platform or used as a standalone website.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Modern and clean aesthetic
- Smooth animations and transitions
- Contact form with basic validation
- Social media integration
- Easy to customize
- Wix-ready (can be imported via HTML iFrame or adapted for Velo)

## File Structure

```
portfolio-template/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Customization Guide

### 1. Basic Information
- Edit `index.html` to change:
  - Your name in the header (`<h1>Your Name</h1>`)
  - Your tagline (`<p>Web Developer & Designer</p>`)
  - About section content
  - Portfolio items (images, titles, descriptions)
  - Contact form action (if connecting to a backend)

### 2. Styling
- Modify `style.css` to change colors, fonts, spacing, etc.
- Primary color scheme can be changed by modifying the CSS variables (if added) or the hex values:
  - Primary blue: `#3498db`
  - Dark blue: `#2980b9`
  - Purple gradient: `#6a11cb` to `#2575fc`
  - Dark text: `#2c3e50`
  - Light text: `#7f8c8d`

### 3. Images
- Replace placeholder images (`https://via.placeholder.com/...`) with your own work
- Recommended image sizes:
  - About section: 300x400px
  - Portfolio items: 400x300px (maintain aspect ratio)

### 4. Social Media Links
- Update the social media links in the footer (`<a href="#">` tags) with your actual profiles

### 5. Contact Form
- The current form uses a simple JavaScript alert for demonstration
- For Wix integration, you may want to connect to Wix Forms or use Velo for backend functionality

## Using on Wix Platform

Wix offers several ways to incorporate custom code:

### Option 1: HTML iFrame (Simplest)
1. In Wix Editor, add an "Embed" element
2. Choose "HTML iFrame"
3. Paste the entire `index.html` content OR host the files externally and link via iframe src
4. Note: Wix may have restrictions on certain scripts and external resources

### Option 2: Wix Velo (Recommended for full integration)
1. Enable Velo in your Wix site (Dev Mode)
2. Create a new page or section
3. Use Velo components to recreate the sections:
   - Use strips, containers, and columns for layout
   - Add text, image, and button elements
   - Use Velo for animations and interactions
   - Create a custom form using Wix Forms or Velo HTTP functions

### Option 3: Wix Code Components
- Break the template into reusable components
- Use Wix's built-in design elements where possible
- Add custom CSS via the site theme or individual element styling

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits
- Icons: Font Awesome (https://fontawesome.com)
- Placeholder images: via.placeholder.com

## License
This template is provided as-is for educational and commercial use. You are welcome to sell this template on Wix or other platforms, or use it for your personal projects.

## Support
For questions or issues, please open an issue in this repository.