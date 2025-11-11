# StenTech Liferay DXP Fragment Collection

## Project Overview
This project contains a complete collection of custom Liferay DXP fragments designed for the StenTech public website. StenTech is a manufacturing company specializing in SMT stencils, precision machining, and custom components.

**Project Type:** Liferay DXP Fragment Collection  
**Technology Stack:** HTML, CSS, JavaScript (Vanilla), Liferay DXP  
**Created:** November 10, 2025

## Purpose
Create professional, reusable UI fragments for StenTech's public website and intranet:

**Public Website:**
- Manufacturing excellence and innovation
- Industry leadership with 21+ locations across North America
- Customer commitment with 3500+ satisfied clients
- Technical expertise with 90+ CAD designers and 350+ team members

**Intranet (Logged-in Experiences):**
- Jennifer (HR Manager) - Publishes news articles and company policies
- Marcos (Operations Supervisor) - Accesses news articles and policy documents

## Project Structure

### Fragment Collection (`stentech-fragments/`)
Contains 13 production-ready Liferay fragments:

**Public Website Fragments (8):**
1. **Hero with Video Background** - Full-screen hero section with video support
2. **Product Grid with Icons** - Animated grid for product/service categories
3. **Statistics Counter** - Scroll-triggered animated counters for key metrics
4. **Feature Section** - Flexible image/text content sections
5. **Testimonial Carousel** - Auto-rotating customer testimonials
6. **CTA Section** - Dual call-to-action cards for user conversion
7. **Header Navigation** - Sticky header with dropdown menus and mobile support
8. **Footer** - Comprehensive footer with company info and social links

**Intranet Fragments (5):**
9. **News Article List** - Browse published news articles with category filtering (for Marcos/readers)
10. **News Article Detail** - Full article view with rich content and sharing options
11. **Article Publisher** - Create and publish news articles with rich text editor (for Jennifer/HR)
12. **Policy Document Viewer** - Browse company policies with search and categorization (for all employees)
13. **Policy Manager** - Upload and manage policy documents with version tracking (for Jennifer/HR)

### Preview System (`preview/`)
- `index.html` - Live preview of public website fragments
- `intranet.html` - Live preview of intranet fragments for HR/Operations
- Combined CSS and JavaScript for demonstration
- Served via Python HTTP server on port 5000

## Brand Guidelines
**Colors:**
- Primary Blue: #003366 to #0066cc
- Accent Orange: #ff6b35 to #ff8c42
- Background: #f8f9fa
- Text: #003366 (headings), #555 (body)

**Design Principles:**
- Professional industrial aesthetic
- Mobile-first responsive design
- Smooth animations and transitions
- Accessibility with semantic HTML

## Technical Details

### Liferay Fragment Structure
Each fragment follows standard Liferay DXP conventions:
- `fragment.json` - Fragment metadata
- `configuration.json` - Editable configuration fields with structured fieldsets
- `index.html` - Fragment markup with FreeMarker template syntax
- `styles.css` - Scoped CSS styling
- `main.js` - Vanilla JavaScript for interactions

### Key Implementation Notes
- **FreeMarker Syntax:** All dynamic values use `${configuration.fieldName!'Default Value'}` syntax for configuration-driven content
- **Editable Regions:** Text areas use `data-lfr-editable-id` and `data-lfr-editable-type` attributes for inline editing in Liferay Page Editor
- **JavaScript Pattern:** Uses `const rootElement = fragmentElement || document.querySelector(...)` to properly handle Liferay's fragmentElement parameter
- **No Dependencies:** Pure HTML/CSS/JS for maximum compatibility
- **Configuration-Driven:** All fragments fully editable through Liferay configuration panels
- **Responsive:** Mobile-first design with clamp() for fluid typography
- **Animations:** Intersection Observer API for scroll-triggered effects

## Development Workflow

### Preview Server
```bash
python3 server.py
```
- Serves on port 5000 with webview output
- No-cache headers for development
- Demonstrates all fragments with realistic content

### File Organization
```
stentech-fragments/          # Main fragment collection
├── collection.json          # Collection metadata
├── hero-video/             # Individual fragments
├── product-grid/
├── statistics-counter/
├── feature-section/
├── testimonial-carousel/
└── cta-section/

preview/                     # Preview system
├── index.html              # Demo page
├── fragments.css           # Combined styles
└── fragments.js            # Combined scripts

server.py                    # Python HTTP server
README.md                    # Full documentation
```

## Deployment to Liferay

1. **Package:** Zip the `stentech-fragments/` folder
2. **Import:** Site Builder → Page Fragments → Import
3. **Use:** Drag fragments onto pages from the StenTech Fragments collection
4. **Configure:** Edit content through the fragment configuration panel

## Recent Changes

### November 11, 2025
- ✅ **NEW: Intranet fragments created** - 5 fragments for logged-in HR and Operations experiences
- ✅ **News Article List** - Filterable news feed with category badges
- ✅ **News Article Detail** - Full article view with sharing and related articles
- ✅ **Article Publisher** - Rich text editor form for Jennifer to create articles
- ✅ **Policy Document Viewer** - Searchable policy library with version tracking
- ✅ **Policy Manager** - Policy upload and management tool for Jennifer
- ✅ **CRITICAL UPDATE:** Converted all public fragments to use proper Liferay FreeMarker syntax
- ✅ All dynamic values now use `${configuration.*}` with default values
- ✅ Added editable regions with `data-lfr-editable-*` attributes for inline text editing
- ✅ Updated all configuration.json files to align with HTML templates
- ✅ Testimonial carousel now configuration-driven with 3 testimonials

### November 10, 2025
- ✅ Created complete fragment collection with 8 fragments
- ✅ Added Header Navigation fragment with comprehensive keyboard accessibility
- ✅ Added Footer fragment with company info and social links
- ✅ Implemented full ARIA support (aria-expanded, aria-haspopup, aria-controls, aria-modal)
- ✅ Added keyboard navigation for dropdowns (Enter/Space/Arrow/Escape keys)
- ✅ Implemented focus trapping for mobile menu with Tab key cycling
- ✅ All fragments production-ready with proper Liferay syntax

## Quality Assurance

**Architect Review Status:** ✅ PASSED (Production-Ready)
- All fragments follow Liferay best practices
- JavaScript properly uses Liferay's fragmentElement parameter
- No security issues detected
- Configuration files properly structured
- Responsive design verified
- Animation and interaction behaviors validated

## Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Features
✅ Fully responsive mobile-first design  
✅ Accessible semantic HTML with ARIA labels  
✅ Performance-optimized animations  
✅ Configurable through Liferay UI  
✅ Professional industrial aesthetic  
✅ Zero external dependencies  

## User Preferences
- No specific user preferences documented yet

## Next Steps (Future Enhancements)
1. Add interactive navigation fragment with mega-menu
2. Create advanced filterable product showcase
3. Implement location map fragment with facility markers
4. Add blog/resources listing fragments
5. Create validated form fragments for quotes/contact

## Support & Resources
- [Liferay Fragment Documentation](https://learn.liferay.com/w/dxp/site-building/creating-pages/page-fragments-and-widgets)
- [Fragment Configuration Reference](https://learn.liferay.com/w/dxp/site-building/developer-guide/reference/fragments/fragment-configuration-types-reference)

---

**Status:** Production-Ready | **Last Updated:** November 10, 2025
