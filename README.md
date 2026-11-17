# Lumière Hair Studio Website

A modern, elegant hair salon website built with React, Tailwind CSS, and Framer Motion. Features bilingual support (English/Turkish) with beautiful animations and responsive design.

## ✨ Features

- 🎨 **Modern Design**: Elegant color palette with warm neutrals and gold accents
- 🌍 **Bilingual**: Full English and Turkish language support
- 📱 **Responsive**: Mobile-first design that works on all devices
- ✨ **Animations**: Smooth scroll animations, parallax effects, and interactive elements
- 🎭 **Interactive**: Hover effects, testimonial carousel, and smooth navigation
- 📧 **Contact Form**: Fully functional contact form with validation
- 🔝 **Back to Top**: Smooth scroll-to-top button
- 🎬 **Loading Screen**: Elegant loading animation on page load

## 🛠️ Technologies

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **i18next** - Internationalization
- **React i18next** - React bindings for i18n

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hairStudio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
hairStudio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Header with language switcher
│   │   ├── Hero.jsx            # Hero section with parallax
│   │   ├── Services.jsx        # Services grid
│   │   ├── Gallery.jsx         # Image gallery
│   │   ├── Stylists.jsx        # Team members
│   │   ├── Testimonials.jsx    # Client reviews carousel
│   │   ├── Contact.jsx         # Contact form and info
│   │   ├── Booking.jsx         # CTA section
│   │   ├── Footer.jsx          # Footer
│   │   ├── BackToTop.jsx       # Scroll to top button
│   │   └── LoadingScreen.jsx   # Initial loading animation
│   ├── i18n/
│   │   └── config.js           # i18n configuration
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎨 Customization

### Colors

Update the color palette in `tailwind.config.js`:

```js
colors: {
  cream: {
    50: '#faf8f5',
    100: '#f3ebe1',
    200: '#e2d5c4',
  },
  gold: {
    500: '#ffc94d',
    600: '#a07c55',
  },
  dark: '#2b2b2b',
}
```

### Translations

Add or modify translations in `src/i18n/config.js`:

```js
const resources = {
  en: {
    translation: {
      // English translations
    }
  },
  tr: {
    translation: {
      // Turkish translations
    }
  }
};
```

### Images

Replace image URLs in component files with your own images. Current images are from Unsplash.

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Animation Features

- Scroll-triggered fade-in animations
- Parallax scrolling on Hero section
- Mouse-tracking parallax effect
- Smooth navigation scrolling
- Interactive hover effects
- Loading screen animation
- Testimonial carousel

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact: hello@lumiere.studio

---

Built with ❤️ using React and Tailwind CSS
