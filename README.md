# Webpack Bootstrap Vue Template

A modern, responsive website template built with Webpack 5, Vue.js 3, Bootstrap 5, and jQuery. This template provides a solid foundation for building modern web applications with component-based architecture and a clean development workflow.

## 🚀 Features

- **Webpack 5** - Modern bundling and development server
- **Vue.js 3** - Progressive JavaScript framework with Single File Components
- **Bootstrap 5** - Responsive CSS framework
- **jQuery** - JavaScript library for DOM manipulation
- **Hot Reload** - Development server with live reloading
- **Asset Optimization** - Automatic CSS and JS bundling
- **CSS Extraction** - Mini CSS Extract Plugin for optimized CSS output
- **Vue SFC Support** - Vue Single File Component compilation
- **Image Handling** - Copy plugin for static assets
- **Source Maps** - Better debugging experience

## 📁 Project Structure

```
sitetemplate/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── img/
│   │   │   └── logo.jpg
│   │   └── js/
│   │       └── index.js
│   ├── components/     # Vue components (optional)
│   │   └── *.vue
│   └── App.vue
│   └── index.html
├── dist/           # Built files (generated)
│   ├── css/        # Extracted CSS files
│   ├── js/         # JavaScript bundles
│   └── images/     # Static images
├── webpack.config.js
├── package.json
└── README.md
```

## 🛠️ Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## 📦 Installation

1. **Clone or download** this template to your local machine
2. **Navigate** to the project directory:
   ```bash
   cd sitetemplate
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## 🚀 Usage

### Development Mode

Start the development server with hot reloading:

```bash
npm start
```

This will:
- Start the development server
- Open your browser automatically
- Enable hot reloading for instant updates
- Serve files from the `dist` directory

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This will:
- Bundle and minify all assets
- Generate source maps for debugging
- Output files to the `dist` directory
- Clean the dist folder before building

### Watch Mode

Watch for file changes and rebuild automatically:

```bash
npm run watch
```

## 🔧 Configuration

### Webpack Configuration

The `webpack.config.js` file is configured with:

- **Entry Point**: `./src/assets/js/index.js`
- **Output**: `dist/` directory with organized subdirectories (js/, css/, images/)
- **Vue SFC Support**: Vue Single File Component compilation with vue-loader
- **CSS Processing**: Mini CSS Extract Plugin for production CSS files
- **HTML Template**: Automatic HTML generation
- **Asset Copying**: Images copied to `dist/images/`
- **jQuery Global**: jQuery available as `$` and `jQuery`
- **Vue Alias**: Vue.js ES module bundler configuration
- **Development Server**: Hot reloading enabled
- **Source Maps**: For better debugging

### Customization

To customize the template:

1. **Modify HTML**: Edit `src/index.html`
2. **Add Styles**: Write CSS in `src/assets/css/style.css`
3. **Add JavaScript**: Write JS in `src/assets/js/index.js`
4. **Add Vue Components**: Create `.vue` files in `src/components/`
5. **Add Images**: Place images in `src/assets/img/`
6. **Update Dependencies**: Modify `package.json` and run `npm install`

## 🎨 Frontend Framework

### Vue.js 3
This template includes Vue.js 3 for modern component-based development:

- **Single File Components** - `.vue` files with template, script, and style
- **Composition API** - Modern Vue.js development approach
- **Hot Module Replacement** - Instant component updates during development
- **ES Module Support** - Modern JavaScript module system

### Bootstrap 5
Responsive CSS framework for styling:

- Mobile-first approach
- Responsive grid system
- Pre-built components
- Utility classes for spacing and layout

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)

## 📚 Dependencies

### Production Dependencies
- **Vue.js**: `^3.5.19` - Progressive JavaScript framework
- **Bootstrap**: `^5.3.3` - CSS framework
- **jQuery**: `^3.7.1` - JavaScript library

### Development Dependencies
- **Webpack**: `^5.90.0` - Module bundler
- **Webpack CLI**: `^5.1.4` - Command line interface
- **Webpack Dev Server**: `^5.0.4` - Development server
- **Vue Loader**: `^17.3.1` - Vue Single File Component loader
- **Vue Compiler SFC**: `^3.5.19` - Vue Single File Component compiler
- **Vue Style Loader**: `^4.1.3` - Vue-specific style loader
- **HTML Webpack Plugin**: `^5.6.0` - HTML generation
- **CSS Loader**: `^7.1.2` - CSS processing
- **Mini CSS Extract Plugin**: `^2.9.4` - CSS extraction for production
- **Style Loader**: `^4.0.0` - CSS injection (development)
- **File Loader**: `^6.2.0` - File handling
- **Copy Webpack Plugin**: `^12.0.2` - Asset copying

## 🚀 Deployment

### Local Testing
```bash
npm run build
npm start
```

### Production Deployment
1. Run `npm run build`
2. Upload the contents of the `dist/` folder to your web server
3. Ensure your server is configured to serve static files
4. The build creates organized output:
   - `dist/css/` - Extracted CSS files
   - `dist/js/` - JavaScript bundles
   - `dist/images/` - Static images

## 🔍 Troubleshooting

### Common Issues

**Port already in use**: Change the port in webpack.config.js or kill the process using the port

**Build errors**: Check that all dependencies are installed with `npm install`

**Hot reload not working**: Ensure you're using `npm start` for development

**Vue components not loading**: Check that vue-loader and @vue/compiler-sfc are properly installed

**CSS not extracting**: Verify Mini CSS Extract Plugin is configured correctly

### Getting Help

If you encounter issues:
1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure Node.js version is compatible
4. Check file paths in webpack.config.js
5. Verify Vue.js version compatibility

## 📝 License

This template is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please open an issue on the project repository.

---

**Happy Coding! 🎉**
