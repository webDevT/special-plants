# Special Plants Project Requirements

## Project Overview
- **Project Name:** Special Plants
- **Type:** Rare Plants E-commerce Website
- **Language:** Ukrainian
- **Technologies:** HTML, CSS, JavaScript, Gulp
- **Status:** In Development

## Project Structure

### Directory Structure
```
specialplants/
├── src/                    # Source files for development
│   ├── css/               # CSS files
│   │   ├── main.css       # Main styles (826 lines)
│   │   ├── responsive.css # Responsive styles (387 lines)
│   │   ├── flickity.css   # Carousel styles
│   │   └── flickity-fade.css # Fade effects
│   ├── js/                # JavaScript files
│   │   ├── main.js        # Main functionality
│   │   ├── jquery-3.7.1.min.js # jQuery library
│   │   ├── flickity.pkgd.js # Carousel library
│   │   └── flickity-fade.js # Fade effects
│   ├── images/            # Images and media
│   │   ├── icons/         # SVG icons (15 files)
│   │   ├── header-slides/ # Hero slider images
│   │   ├── logo.svg       # Site logo
│   │   ├── girl.svg       # Decorative graphics
│   │   └── *.webp, *.png  # Product and content images
│   ├── fonts/             # Font files (empty)
│   ├── partials/          # HTML partials
│   │   ├── header.html    # Site header (55 lines)
│   │   └── footer.html    # Site footer (119 lines)
│   └── index.html         # Main page (250 lines)
├── docs/                  # Built files (auto-generated)
│   ├── css/              # Compiled CSS with source maps
│   ├── js/               # Processed JavaScript
│   ├── images/           # Optimized images
│   └── index.html        # Built HTML
├── gulpfile.js           # Gulp configuration
├── package.json          # Project dependencies
└── README.md            # Documentation
```

## Build System

### Available Commands
- `npm run build` - Production build (clean, no source maps)
- `npm run build:dev` - Development build (with source maps, minified)
- `npm run dev` - Development mode with auto-reload
- `npm run clean` - Clean docs folder

### Build Features
- **Production:** Clean build without .map files
- **Development:** Source maps and minification
- **jQuery:** Always minified
- **Other JS:** Readable in production, minified in development
- **CSS:** Readable in production, minified in development
- **Images:** Automatic optimization with imagemin
- **HTML:** File includes processing with gulp-file-include

## HTML Includes System

### Usage
```html
@@include('partials/header.html')
<!-- Your content -->
@@include('partials/footer.html')
```

### Partial Files
- `src/partials/header.html` - Site header with navigation
- `src/partials/footer.html` - Site footer with contact info

## Website Pages

### Current Pages
1. **Homepage** (`index.html`) - Landing page with hero slider, nursery section, bio section, items section

### Planned Pages
- Catalog (`catalog.html`) - Plant catalog with filters
- About (`about.html`) - Company information
- Contact - Contact information and form
- Product Details - Individual product pages
- Shopping Cart - E-commerce functionality
- User Account - Personal dashboard

## Styling System

### CSS Architecture
- **REM System:** 1rem = 1px at 1440px resolution
- **Class Naming:** lowercase with hyphens (kebab-case)
- **Modifiers:** Start with hyphen (e.g., `button -v1 -small`)
- **Spacing:** 15rem intervals (15, 30, 45, 60, 90, 120, 240)
- **CSS Structure:** Organized blocks with comments
- **Leaf Cutouts:** CSS implementation instead of images

### CSS Files
- `main.css` (826 lines) - Core styles, grid system, components
- `responsive.css` (387 lines) - Breakpoints and responsive design
- `flickity.css` - Carousel library styles
- `flickity-fade.css` - Fade transition effects

### CSS Organization
```css
/*---------------------*/
/*--- H E A D E R ---*/
/*---------------------*/
```

### Grid System
- **Container:** Max-width 1200rem, centered
- **Row:** Flexbox with wrap
- **Columns:** Bootstrap-like system
  - `col-lg-8` - 66.67% width
  - `col-lg-7` - 58.33% width
  - `col-lg-6` - 50% width
  - `col-lg-5` - 41.67% width
  - `col-lg-4` - 33.33% width
  - `col-lg-3` - 25% width

### Leaf Cutout System
- **Base Class:** `.leaf-cutout`
- **Size Variants:** `-hero`, `-square`, `-banner`, `-card`, `-thumb`, `-icon`
- **Direction Modifiers:** `-left`, `-right`
- **Border Variants:** `-white-border` for dark backgrounds
- **CSS Variables:** Organized by variant groups

## JavaScript Functionality

### Current Features
- **Hero Slider:** Flickity carousel with fade effects
- **Mobile Menu:** Responsive navigation
- **Search Functionality:** Site search implementation
- **Form Validation:** Contact form handling
- **Interactive Elements:** Hover effects, animations

### JavaScript Files
- `main.js` - Core functionality and interactions
- `jquery-3.7.1.min.js` - jQuery library (minified)
- `flickity.pkgd.js` - Carousel library
- `flickity-fade.js` - Fade transition effects

## Images and Media

### Current Assets
- **SVG Icons:** 15 icons in `/images/icons/`
- **Hero Images:** 3 slider images in `/images/header-slides/`
- **Product Images:** WebP and PNG formats
- **Decorative Graphics:** SVG illustrations

### Optimization
- **Automatic Optimization:** Gulp imagemin
- **Responsive Images:** Multiple formats (WebP, PNG)
- **Lazy Loading:** Planned for large images
- **File Naming:** lowercase with hyphens (kebab-case)

## Responsive Design

### Breakpoint System
- **Base Resolution:** 1440px (1rem = 1px)
- **Full Width:** Up to 1920rem, then centering
- **REM Scaling:** For different resolutions
- **Breakpoints:** Defined in responsive.css

### Approach
- **REM System:** Scaling through rem size changes
- **Breakpoints:** Helper classes and breakpoints in responsive.css
- **Specific Rules:** At bottom of responsive.css
- **Intervals:** 15rem intervals for sizes

## Current Development Status

### Completed Features ✅
1. **Gulp Build System** - Complete with all tasks
2. **HTML Structure** - Header, footer, main page
3. **CSS Architecture** - REM system, grid, components
4. **Leaf Cutout System** - CSS-based decorative elements
5. **Responsive Design** - Mobile-first approach
6. **Hero Slider** - Flickity implementation
7. **Grid System** - Bootstrap-like columns
8. **Form Elements** - Input styling and validation
9. **Button System** - Multiple variants (-v1, -v2, -v3)
10. **Image Optimization** - WebP and PNG support

### In Progress 🔄
1. **JavaScript Functionality** - Interactive features
2. **Content Sections** - Bio section, items section
3. **Hover Effects** - Card interactions
4. **Form Validation** - Contact form handling

### Planned Features ⏳
1. **Additional Pages** - Catalog, about, contact
2. **E-commerce Features** - Shopping cart, checkout
3. **User Authentication** - Login, registration
4. **SEO Optimization** - Meta tags, structured data
5. **Performance Optimization** - Lazy loading, caching

## Quality Control

### Checklist
- [x] All pages open correctly
- [x] Responsive design on all devices
- [x] Build system working properly
- [x] CSS organization and structure
- [x] JavaScript functionality
- [ ] Page load speed < 3 seconds
- [ ] HTML and CSS validation
- [ ] Cross-browser compatibility
- [ ] SEO optimization
- [ ] Accessibility for users with disabilities

## Technical Specifications

### Browser Support
- **Modern Browsers:** Chrome, Firefox, Safari, Edge
- **Mobile Browsers:** iOS Safari, Chrome Mobile
- **Responsive:** Mobile-first design approach

### Performance Targets
- **Load Time:** < 3 seconds
- **Lighthouse Score:** > 90
- **Image Optimization:** WebP format priority
- **CSS/JS:** Minified in production

## Development Workflow

### Process
1. **Requirements Analysis** - Client needs and specifications
2. **Planning** - Technical architecture and timeline
3. **Development** - Feature implementation
4. **Testing** - Cross-device and browser testing
5. **Optimization** - Performance and SEO
6. **Deployment** - Production launch

### Code Standards
- **HTML:** Semantic markup, accessibility
- **CSS:** BEM-like methodology, organized structure
- **JavaScript:** ES6+, modular approach
- **Images:** Optimized formats, proper sizing

---

**Created:** January 14, 2025  
**Last Updated:** January 14, 2025  
**Status:** In Development  
**Version:** 1.0.0