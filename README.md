# StenTech Liferay DXP Fragment Collection

A comprehensive collection of custom Liferay DXP fragments designed for the StenTech public website. This fragment collection provides modern, industrial-styled UI components that showcase StenTech's manufacturing excellence, innovation, and customer commitment.

## Overview

StenTech is a leading manufacturer specializing in:
- SMT stencils
- Precision machining
- Custom components and parts
- Tooling and fixtures

This fragment collection brings their brand to life with professional, responsive, and animated UI components ready for import into Liferay DXP.

## Fragment Collection Contents

### 1. **Hero with Video Background**
- Full-screen hero section with video background support
- Overlay with gradient for text readability
- Configurable headline, subheadline, and CTA button
- Responsive design with mobile optimization
- **Location:** `stentech-fragments/hero-video/`

### 2. **Product Grid with Icons**
- Animated grid showcasing product/service categories
- Custom SVG icons for each category
- Hover effects with color transitions
- Scroll-triggered fade-in animations
- Fully responsive grid layout
- **Location:** `stentech-fragments/product-grid/`

### 3. **Statistics Counter**
- Animated number counters that trigger on scroll
- Highlights key business metrics (locations, team size, customers)
- Gradient background with glassmorphism effect
- Configurable statistics with labels and descriptions
- **Location:** `stentech-fragments/statistics-counter/`

### 4. **Feature Section with Image**
- Flexible content section with image and text
- Configurable image position (left or right)
- Scroll animations for engaging reveal
- Perfect for showcasing capabilities and benefits
- **Location:** `stentech-fragments/feature-section/`

### 5. **Testimonial Carousel**
- Auto-rotating customer testimonial carousel
- Manual navigation with previous/next buttons
- Dot indicators for slide position
- Pause on hover for user control
- Real customer quotes from StenTech partners
- **Location:** `stentech-fragments/testimonial-carousel/`

### 6. **Call-to-Action Section**
- Dual CTA cards for different user journeys
- Gradient background matching brand colors
- Glassmorphism design with hover effects
- Configurable buttons and labels
- **Location:** `stentech-fragments/cta-section/`

### 7. **Header Navigation**
- Professional sticky navigation with StenTech branding
- Dropdown menus for Products and Services
- Full keyboard accessibility (Enter/Space/Arrow/Escape keys)
- Responsive mobile menu with hamburger toggle
- Complete focus trapping and ARIA attributes
- Configurable logo, CTA button, and sticky behavior
- **Location:** `stentech-fragments/header-navigation/`

### 8. **Footer**
- Comprehensive footer with company info and links
- Multi-column responsive layout
- Social media links with icons
- Auto-updating copyright year
- Configurable company description and contact details
- **Location:** `stentech-fragments/footer/`

## Liferay DXP Structure

Each fragment follows the standard Liferay DXP fragment structure:

```
fragment-name/
├── fragment.json          # Fragment metadata
├── configuration.json     # Editable configuration fields
├── index.html            # Fragment HTML markup
├── styles.css            # Fragment-specific styling
└── main.js               # Fragment JavaScript/interactions
```

### Fragment Configuration

All fragments use **Liferay FreeMarker template syntax** for dynamic content:
- **Configuration values:** `${configuration.fieldName!'Default Value'}` syntax
- **Editable text regions:** `data-lfr-editable-id` and `data-lfr-editable-type` attributes for inline editing
- **Conditional rendering:** `[#if configuration.condition]...[/#if]` for dynamic behavior

Configuration files allow content editors to customize:
- Text content (headlines, descriptions, labels)
- URLs and links
- Image sources
- Layout options (e.g., image position, sticky header)
- Display preferences
- Testimonials and statistics

This makes the fragments fully configuration-driven and reusable without code changes.

## Brand Colors & Design System

The fragments use StenTech's brand colors:

- **Primary Blue:** `#003366` (Dark) to `#0066cc` (Medium)
- **Accent Orange:** `#ff6b35` to `#ff8c42`
- **Background Gray:** `#f8f9fa`
- **Text Colors:** `#003366` (Headings), `#555` (Body)

### Typography
- Modern sans-serif font stack
- Responsive font sizing using `clamp()`
- Clear hierarchy with consistent weight/spacing

### Animations
- Scroll-triggered entrance animations
- Smooth hover transitions
- Counter animations for statistics
- Carousel auto-play with pause on interaction

## Preview

A preview page is included to demonstrate all fragments in action:

1. **Run the preview server:**
   ```bash
   python3 server.py
   ```

2. **View in browser:**
   - Open your browser to the preview URL
   - Scroll through to see all fragment demonstrations
   - Test responsive behavior by resizing the window

The preview page (`preview/index.html`) showcases:
- Each fragment with realistic content
- All interactive features working
- Responsive layouts at different screen sizes
- Animation and transition effects

## Importing to Liferay DXP

### Step 1: Prepare the Collection
1. Zip the entire `stentech-fragments` folder
2. Ensure the `collection.json` file is at the root of the collection

### Step 2: Import in Liferay
1. Navigate to **Site Builder** → **Page Fragments**
2. Click **Import**
3. Upload the zipped fragment collection
4. Confirm the import

### Step 3: Use Fragments
1. Edit any page in your site
2. Open the fragments panel
3. Find **StenTech Fragments** collection
4. Drag and drop fragments onto your page
5. Configure each fragment using the configuration panel

## Customization

### Editing Fragment Content
Each fragment has a `configuration.json` file defining editable fields. In Liferay:
1. Add the fragment to a page
2. Click on the fragment
3. Open the configuration panel (gear icon)
4. Edit text, URLs, images, and settings
5. Changes are saved automatically

### Styling Customization
To modify fragment styles:
1. Edit the fragment's `styles.css` file
2. Maintain the existing CSS class structure
3. Test responsiveness at different breakpoints
4. Re-import the collection to Liferay

### JavaScript Customization
Fragment JavaScript uses vanilla JS for maximum compatibility:
- No external dependencies required
- Uses Liferay's fragment namespace system
- Intersection Observer API for scroll animations
- Event listeners with proper cleanup

## Browser Support

These fragments support:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Features

✅ **Fully Responsive** - Mobile-first design approach
✅ **Accessible** - Semantic HTML with ARIA labels where needed
✅ **Performant** - Optimized animations and lazy loading
✅ **Configurable** - Easy customization through Liferay UI
✅ **Professional** - Industrial aesthetic matching StenTech brand
✅ **No Dependencies** - Pure HTML, CSS, and vanilla JavaScript

## File Structure

```
stentech-fragments/
├── collection.json
├── hero-video/
│   ├── fragment.json
│   ├── configuration.json
│   ├── index.html
│   ├── styles.css
│   └── main.js
├── product-grid/
│   ├── fragment.json
│   ├── configuration.json
│   ├── index.html
│   ├── styles.css
│   └── main.js
├── statistics-counter/
│   ├── fragment.json
│   ├── configuration.json
│   ├── index.html
│   ├── styles.css
│   └── main.js
├── feature-section/
│   ├── fragment.json
│   ├── configuration.json
│   ├── index.html
│   ├── styles.css
│   └── main.js
├── testimonial-carousel/
│   ├── fragment.json
│   ├── index.html
│   ├── styles.css
│   └── main.js
└── cta-section/
    ├── fragment.json
    ├── configuration.json
    ├── index.html
    ├── styles.css
    └── main.js

preview/
├── index.html        # Preview demonstration page
├── fragments.css     # Combined CSS for preview
└── fragments.js      # Combined JS for preview
```

## Support & Documentation

For more information about Liferay Fragments:
- [Liferay Fragment Documentation](https://learn.liferay.com/w/dxp/site-building/creating-pages/page-fragments-and-widgets)
- [Fragment Configuration Reference](https://learn.liferay.com/w/dxp/site-building/developer-guide/reference/fragments/fragment-configuration-types-reference)

## License

This fragment collection is custom-built for StenTech's Liferay DXP platform.

---

**Built for Manufacturing Excellence** | StenTech Fragment Collection
