# Digital Assistant Personal Website

A clean, modern, mobile-first personal brand website for a freelance digital assistant. Built with React, Vite, and React Router.

## Features

- 🎨 Clean, modern design with neutral color palette
- 📱 Fully responsive and mobile-first
- ⚡ Fast loading with Vite
- ♿ Accessible and SEO-friendly
- 🔄 Single Page Application with React Router

## Pages

- **Home** - Clear headline, value proposition, and call-to-action
- **Services** - Detailed service offerings (Digital Design, Content & Updates, Digital Support)
- **How I Work** - Step-by-step process explanation
- **Capabilities** - Skills and tools presented as outcomes
- **About** - Professional introduction and values
- **Contact** - Contact form and contact information

## Getting Started

### Prerequisites

- Node.js (v20.19+ or v22.12+)
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

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Deployment to Railway

Railway can automatically detect and deploy Vite projects. Here's how to deploy:

1. **Push your code to GitHub** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Railway:**
   - Go to [Railway.app](https://railway.app)
   - Sign up or log in
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure Build Settings:**
   Railway should auto-detect Vite. If needed, configure:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run preview` (or use a static file server)
   - **Output Directory:** `dist`

4. **For Static Site Deployment:**
   Railway can serve static sites. You may want to:
   - Add a `railway.json` or configure via Railway dashboard
   - Or use Railway's static site deployment option

5. **Environment Variables (if needed):**
   Add any environment variables in the Railway dashboard if your contact form requires backend services.

## Customization

### Update Contact Information

1. **Footer** (`src/components/Footer.jsx`):
   - Update email address
   - Update WhatsApp link (replace `1234567890` with your number)

2. **Contact Page** (`src/pages/Contact.jsx`):
   - Update email address
   - Update WhatsApp link
   - Configure form backend (currently uses mailto fallback)

### Update Colors

Edit CSS variables in `src/index.css`:
- `--color-primary`: Primary accent color
- `--color-text`: Main text color
- `--color-bg`: Background color

### Update Content

All page content can be customized in the respective page components in `src/pages/`.

### Update Branding

- **Logo/Title:** Edit the logo text in `src/components/Header.jsx`
- **Fonts:** Update Google Fonts import in `index.html` and CSS variables in `src/index.css`

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components (Header, Footer)
│   ├── pages/       # Page components
│   ├── App.jsx      # Main app component with routing
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── vite.config.js   # Vite configuration
└── README.md        # This file
```

## Future Enhancements

Consider adding:
- Portfolio/Examples section with project showcases
- Testimonials from clients
- Booking/Calendar integration for consultations
- Blog section
- Backend integration for contact form (e.g., Formspree, EmailJS, or custom API)
- Analytics (Google Analytics, Plausible, etc.)
- SEO optimization with meta tags and Open Graph images

## Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables
- **Google Fonts** - Typography (Inter & Playfair Display)

## License

This project is private and proprietary.

## Support

For questions or issues, please contact via the website's contact form.