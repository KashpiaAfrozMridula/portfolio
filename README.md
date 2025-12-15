<<<<<<< HEAD
# portfolio
This repository is for building my personal portfolio
=======
# Product Manager Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing product management experience, skills, and case studies.

## Features

- **Modern Design**: Minimal, clean design with black/white color scheme and blue accent
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Navigation**: Smooth scrolling navigation with fixed header
- **Sections**:
  - Hero section with quick snapshot
  - About Me with PM philosophy
  - Skills (Technical, UX, Business, Interpersonal)
  - Experience timeline
  - Case Studies (detailed project stories)
  - How I Work (workflow visualization)
  - Contact information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Contact Information

Edit `src/components/Contact.jsx` to update:
- Email address
- LinkedIn profile URL
- Calendly link (optional)

### Update CV Download

In `src/components/Hero.jsx`, update the CV download button to link to your actual CV file.

### Customize Colors

Edit CSS variables in `src/index.css`:
- `--primary-color`: Main text color (default: black)
- `--secondary-color`: Background color (default: white)
- `--accent-color`: Accent color (default: blue)
- `--text-gray`: Secondary text color
- `--bg-light`: Light background color

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── HowIWork.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- React 18
- Vite
- CSS3 (with CSS Variables)
- React Router (for navigation)

## License

This project is open source and available for personal use.

>>>>>>> bcf66b9 ( initial portfolio)
