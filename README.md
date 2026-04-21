# Adejumo Olanrewaju — Portfolio

A clean, minimal React portfolio built with Vite and Framer Motion.

## Tech Stack
- React 18
- Vite
- Framer Motion (scroll animations)
- CSS Modules
- DM Sans font (Google Fonts)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```

---

## Customising Your Portfolio

### Update your personal info
- **Name / tagline** → `src/components/Hero.jsx`
- **About text** → `src/components/About.jsx`
- **Email / GitHub / LinkedIn** → `src/components/Contact.jsx`

### Add or edit projects
Open `src/data/index.js` — each project is one object:

```js
{
  id: 5,
  title: 'Your Project Name',
  description: 'What it does and why it matters.',
  stack: ['React', 'Node.js', 'MongoDB'],
  color: '#f0fdf4',        // card background tint
  iconColor: '#16a34a',   // icon accent color
  demo: 'https://your-live-demo.com',
  github: 'https://github.com/you/project',
  featured: false,        // set true to make it span full width
}
```

### Add or edit skills
Also in `src/data/index.js` — just edit the `skills` array.

---

## Deploying to Vercel

1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo — Vercel auto-detects Vite
4. Hit Deploy — done ✓

Your site will be live at `your-project.vercel.app` in under 2 minutes.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── Hero.jsx / .module.css
│   ├── About.jsx / .module.css
│   ├── Skills.jsx / .module.css
│   ├── Projects.jsx / .module.css
│   ├── Contact.jsx / .module.css
│   └── Footer.jsx / .module.css
├── data/
│   └── index.js        ← edit projects & skills here
├── styles/
│   └── global.css      ← design tokens & resets
├── App.jsx
└── main.jsx
```
