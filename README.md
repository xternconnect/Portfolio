# Portfolio Website

A modern, responsive portfolio website built with React, featuring a liquid glass (glassmorphism) design aesthetic. This portfolio showcases UI/UX design and front-end development work.

## Features

- **Liquid Glass Design**: Modern glassmorphism effects with backdrop blur and transparency
- **Responsive Layout**: Fully responsive design that works on all devices
- **React Router**: Multi-page navigation with smooth transitions
- **Component-Based Architecture**: Modular, reusable React components
- **Modern CSS**: Advanced CSS features including backdrop-filter and gradients
- **Performance Optimized**: Fast loading and smooth animations

## Tech Stack

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with modern features
- **JavaScript (ES6+)** - Modern JavaScript features

## Project Structure

```
src/
├── Components/          # Reusable React components
│   ├── Navbar.js
│   ├── Hero.js
│   ├── ProjectCard.js
│   ├── AboutSection.js
│   └── ContactForm.js
├── Pages/              # Page components
│   ├── Home.js
│   ├── Projects.js
│   ├── About.js
│   └── Contact.js
├── styles/             # CSS stylesheets
│   ├── Navbar.css
│   ├── Hero.css
│   ├── ProjectCard.css
│   ├── AboutSection.css
│   ├── ContactForm.css
│   ├── Home.css
│   ├── Projects.css
│   ├── About.css
│   ├── Contact.css
│   ├── Global.css
│   └── styles.js       # Centralized CSS imports
├── Assets/             # Static assets
├── App.js              # Main app component
└── index.js            # Entry point
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Customization

### Adding New Projects

1. Add project data to the `projects` array in `src/Pages/Projects.js`
2. Update project images in the `src/Assets/images/projects/` folder
3. Modify the `ProjectCard` component if needed

### Styling

- All styles are organized in the `src/styles/` folder
- Each component has its own CSS file
- Global styles are in `Global.css`
- The `styles.js` file imports all CSS files centrally

### Content Updates

- Update personal information in the respective page components
- Modify the hero section in `src/Components/Hero.js`
- Update contact information in `src/Components/ContactForm.js`

## Design System

The portfolio uses a consistent design system with:

- **Color Palette**: Dark theme with purple/blue gradients
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Glass Effects**: Backdrop blur with transparency
- **Animations**: Smooth transitions and hover effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The app can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting service

Popular hosting options:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

