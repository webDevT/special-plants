# Special Plants - Gulp Build System

This project uses Gulp for automating the build process of the Special Plants website - a rare plants e-commerce platform.

## Project Overview

Special Plants is a modern, responsive website for selling rare and exotic plants. Built with HTML, CSS, JavaScript, and powered by a custom Gulp build system.

## Project Structure

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
│   │   └── *.webp, *.png  # Product and content images
│   ├── fonts/             # Font files
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
├── PROJECT_REQUIREMENTS.md # Detailed project requirements
└── README.md            # This file
```

## Installation

1. Ensure you have Node.js installed (version 14 or newer)
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Build Commands

- **Production build (clean, no source maps):**
  ```bash
  npm run build
  ```

- **Development build (with source maps and minification):**
  ```bash
  npm run build:dev
  ```

- **Development mode with auto-reload:**
  ```bash
  npm run dev
  ```

- **Clean docs folder:**
  ```bash
  npm run clean
  ```

### What the Build Process Does

1. **HTML Files** - Processes with includes support (header, footer)
2. **CSS Files** - Adds autoprefixes (minification only in development mode)
3. **JavaScript Files** - Copies separately (minification only in development mode)
4. **Images** - Optimizes for web (JPEG, PNG, GIF, SVG, WebP)
5. **Fonts** - Copies without changes

### HTML Includes System

The project supports HTML includes for development convenience:

- **Header** - `@@include('partials/header.html')`
- **Footer** - `@@include('partials/footer.html')`

Example usage in HTML files:
```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>My Page</title>
</head>
<body>
    @@include('partials/header.html')
    
    <main>
        <!-- Page content -->
    </main>
    
    @@include('partials/footer.html')
</body>
</html>
```

### Source Maps and Minification

- **Production build** (`npm run build`) - Creates clean build without source maps or minification
- **Development build** (`npm run build:dev`) - Creates source maps and minifies files
- **Development mode** (`npm run dev`) - Automatically creates source maps and minifies on changes

### Development Mode

The `npm run dev` command launches:
- Automatic build on file changes
- Local server on port 3000
- Automatic browser refresh on changes
- BrowserSync for synchronized testing

## Features

### Current Implementation
- **Responsive Design** - Mobile-first approach with REM scaling
- **Grid System** - Bootstrap-like column system (col-lg-8, col-lg-6, etc.)
- **Leaf Cutout Components** - CSS-based decorative elements
- **Hero Slider** - Flickity carousel with fade effects
- **Interactive Elements** - Hover effects, form validation
- **Modern CSS** - CSS custom properties, flexbox, grid

### CSS Architecture
- **REM System** - 1rem = 1px at 1440px resolution
- **Component-Based** - Organized CSS blocks
- **Responsive** - Breakpoint system in responsive.css
- **Variables** - CSS custom properties for consistency

### JavaScript Features
- **Carousel** - Flickity implementation
- **Mobile Menu** - Responsive navigation
- **Search** - Site search functionality
- **Forms** - Validation and interaction

## Configuration

All settings are located in `gulpfile.js`. You can:

- Change file paths
- Add new processing tasks
- Configure minification
- Add new plugins
- Modify build behavior

## Gulp Plugins

The project uses the following plugins:
- `gulp-clean-css` - CSS minification
- `gulp-uglify` - JavaScript minification
- `gulp-concat` - File concatenation
- `gulp-autoprefixer` - CSS autoprefixes
- `gulp-imagemin` - Image optimization
- `gulp-sourcemaps` - Source map generation
- `gulp-file-include` - HTML includes
- `browser-sync` - Local server and browser sync
- `del` - File deletion
- `cross-env` - Cross-platform environment variables

## Browser Support

- **Modern Browsers** - Chrome, Firefox, Safari, Edge
- **Mobile Browsers** - iOS Safari, Chrome Mobile
- **Responsive** - Mobile-first design approach

## Performance

- **Image Optimization** - Automatic WebP and PNG optimization
- **CSS/JS Minification** - In development mode
- **Source Maps** - For debugging in development
- **Lazy Loading** - Planned for large images

## Development Workflow

1. **Setup** - Run `npm install`
2. **Development** - Run `npm run dev`
3. **Build** - Run `npm run build` for production
4. **Test** - Check `docs/` folder for built files

## File Structure Details

### CSS Files
- `main.css` - Core styles, components, grid system
- `responsive.css` - Breakpoints and responsive rules
- `flickity.css` - Carousel library styles
- `flickity-fade.css` - Fade transition effects

### JavaScript Files
- `main.js` - Core functionality and interactions
- `jquery-3.7.1.min.js` - jQuery library (minified)
- `flickity.pkgd.js` - Carousel library
- `flickity-fade.js` - Fade effects

### Images
- **Icons** - 15 SVG icons in `/images/icons/`
- **Hero Images** - 3 slider images in `/images/header-slides/`
- **Product Images** - WebP and PNG formats
- **Graphics** - SVG illustrations and logos

## Troubleshooting

If you encounter issues, check:

1. **Dependencies** - Ensure all dependencies are installed (`npm install`)
2. **File Paths** - Verify paths in `gulpfile.js` are correct
3. **Permissions** - Ensure write permissions to project folder
4. **Node Version** - Use Node.js version 14 or newer
5. **Port Availability** - Ensure port 3000 is available for development server

## Contributing

1. Follow the existing code structure
2. Use the established naming conventions
3. Test on multiple devices and browsers
4. Ensure responsive design works correctly
5. Optimize images and assets

## License

This project is proprietary software. All rights reserved.

---

**Created:** January 14, 2025  
**Last Updated:** January 14, 2025  
**Version:** 1.0.0  
**Status:** In Development