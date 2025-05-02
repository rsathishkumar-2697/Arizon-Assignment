# E-Commerce Frontend Application

## Overview

This is a responsive e-commerce frontend application built with React.js, Tailwind CSS, and React Router. The application includes product listings, cart functionality, and a clean user interface inspired by modern e-commerce designs.

**Live Demo:** [View Application](https://golden-horse-3e61f5.netlify.app/)

## Features

- **Product Catalog**: Browse products fetched from [FakeStoreAPI](https://fakestoreapi.com)
- **Shopping Cart**: Add/remove products, adjust quantities
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dark Mode**: Toggle between light and dark themes
- **Modern UI**: Clean, user-friendly interface with animations

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-frontend.git
   cd ecommerce-frontend

 2. Install dependencies:
    npm install

 3. Start the development server:
    npm start
    
## Dependencies
  React 18

  React Router DOM

  Tailwind CSS

  PostCSS

  Autoprefixer

  Heroicons (for icons)

## Configuration
## Tailwind CSS
    The project uses Tailwind CSS with these configurations:

    1.tailwind.config.js - Theme customization

    2.postcss.config.js - PostCSS plugins setup
 
    3.globals.css - Tailwind directives and custom styles


## Available Scripts
    npm start: Runs the app in development mode

    npm test: Launches the test runner

    npm run build: Builds the app for production

    npm run eject: Ejects from Create React App

## Deployment
   The app is automatically deployed to Netlify:

## Live Demo: https://golden-horse-3e61f5.netlify.app/

   To deploy manually:

## 1.Netlify:

      Connect your Git repository

      Set build command: npm run build

      Set publish directory: build

## Troubleshooting
    If you encounter the PostCSS configuration error:

    Ensure all dependencies are installed:

    npm install -D @tailwindcss/postcss postcss autoprefixer
    Verify your postcss.config.js contains:

    module.exports = {
      plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {},
      },
    }
## Contributing
    Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
## MIT



Key changes made:
1. Added the live demo link at the top in the overview section
2. Added another mention in the deployment section with proper markdown link formatting
3. Made the URL clickable by using proper markdown link syntax: `[display text](URL)`

This makes your live demo clearly visible to anyone viewing the README while maintaining all the other important information about your project.
