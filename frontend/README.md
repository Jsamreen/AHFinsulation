# AHF Insulation Website  

Professional static website for **AHF Insulation Pty Ltd**, built with **React + Vite** and styled with **Tailwind CSS**.  
The site showcases company services, gallery, and a contact form integrated with serverless email API.  

🔗 **Live site**: [https://www.ahfinsulation.com](https://www.ahfinsulation.com)  

---

## 🚀 Features  

- ⚡ **Fast & lightweight** — React + Vite + Tailwind stack  
- 🎨 **Modern UI** — Hero slider, smooth animations (Framer Motion), responsive design  
- 📷 **Gallery** — image & video lightbox with tags  
- 🛠 **Services pages** — Residential, Commercial, Old Insulation Removal, Wall Wraps  
- 📩 **Contact form** — integrated via serverless API (Resend / SMTP)  
- 🔍 **SEO Optimized**  
  - Meta tags (title, description, OG, Twitter)  
  - Canonical links  
  - Favicon set (32x32, 48x48, 192x192, 512x512, apple-touch)  
- 📱 **PWA Ready**  
  - `manifest.webmanifest` with icons (192x192, 512x512, maskable)  
  - Theme color + standalone display  
- 🌐 **Deployed on Vercel** with custom domain  

---

## 🛠 Tech Stack  

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Framer Motion](https://www.framer.com/motion/) (animations)  
- [Lucide Icons](https://lucide.dev/) (icons)  
- [Slick Carousel](https://react-slick.neostack.com/) (hero slider)  
- [Resend](https://resend.com/) or SMTP (email API for contact form)  
- Deployed on [Vercel](https://vercel.com/)  


## 📦 Installation  

```bash
# Clone the repo
git clone https://github.com/YOUR_GITHUB_USERNAME/ahfinsulation.git

cd ahfinsulation/frontend

# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

```
## 📦 Installation 

```bash

frontend/
├── api/               # Serverless functions (contact form)
├── public/            # Static assets (favicon, manifest, images)
├── src/               # React source code
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components (Home, Services, Gallery, About, Contact)
│   └── main.jsx       # Entry point
├── index.html         # Root HTML template
├── tailwind.config.js # Tailwind config
├── vite.config.js     # Vite config
├── vercel.json        # Vercel rewrites & functions setup
└── README.md

```
## 🌍 Deployment


Hosted on Vercel → https://ahfinsulation.com

Custom domain configured via DNS (GoDaddy/Cloudflare)

Favicon cache-busting (?v=3) added to fix Google favicon indexing

Sitemap + SEO optimized for Google Search Console

## 📝 License

This project is private and licensed to AHF Insulation Pty Ltd.
All rights reserved © 2025.