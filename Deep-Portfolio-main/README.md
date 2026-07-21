# Deep Kabariya — Portfolio Website 🚀

A modern, interactive portfolio website built with **React**, **TypeScript**, **Three.js**, and **GSAP** animations featuring a 3D character model, physics-based tech stack visualization, and smooth scroll animations.

🔗 **Live Site**: [Coming Soon — Deploy to Vercel]

## ✨ Features

- 🎭 Interactive 3D character model (Three.js + WebGL)
- 🎱 Physics-based tech stack spheres (Rapier physics engine)
- 🎞️ Smooth scroll animations (GSAP ScrollSmoother + ScrollTrigger)
- 📱 Fully responsive design
- 🎠 Project carousel with live demo & GitHub links
- ⚡ Fast loading with Vite

## 🛠️ Tech Stack

| Category       | Technologies                                               |
| -------------- | ---------------------------------------------------------- |
| **Frontend**   | React 18, TypeScript, Three.js, GSAP                       |
| **3D/WebGL**   | @react-three/fiber, @react-three/drei, @react-three/rapier |
| **Build Tool** | Vite                                                       |
| **Styling**    | Vanilla CSS with custom properties                         |
| **Deployment** | Vercel                                                     |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Deep-2308/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📂 Project Structure

```
├── public/
│   ├── images/          # Project screenshots & tech stack icons
│   ├── models/          # 3D character model & environment
│   └── draco/           # Draco decoder for 3D model compression
├── src/
│   ├── components/      # React components (Landing, About, Work, etc.)
│   │   ├── Character/   # 3D character model component
│   │   ├── styles/      # Component-specific CSS files
│   │   └── utils/       # GSAP animation utilities
│   ├── context/         # React context (Loading state)
│   ├── data/            # Data files (bone animations)
│   ├── App.tsx          # Root component
│   └── main.tsx         # Entry point
└── index.html           # HTML template with SEO meta tags
```

## ✏️ How to Customize

| What to change          | File(s)                          |
| ----------------------- | -------------------------------- |
| Name & hero text        | `src/components/Landing.tsx`     |
| About me bio            | `src/components/About.tsx`       |
| Skills & tools          | `src/components/WhatIDo.tsx`     |
| Work experience         | `src/components/Career.tsx`      |
| Projects                | `src/components/Work.tsx`        |
| Social links            | `src/components/SocialIcons.tsx` |
| Contact & footer        | `src/components/Contact.tsx`     |
| Navbar email & initials | `src/components/Navbar.tsx`      |
| Loading screen text     | `src/components/Loading.tsx`     |
| SEO title & meta        | `index.html`                     |
| Project images          | `public/images/`                 |

## 🌐 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"New Project"** → Import your repository
4. Framework Preset: **Vite**
5. Click **Deploy**

> **Note**: This project uses `gsap-trial` plugins (ScrollSmoother). For production hosting, you'll need GSAP Club plugins. See: https://gsap.com/docs/v3/Installation/

## 👤 About Me

**Deep Kabariya** — Computer Engineering Student at Gujarat Technological University, Surat.
Full Stack Developer specializing in the MERN stack with a passion for building scalable, secure web applications.

- 🌐 [GitHub](https://github.com/Deep-2308)
- 💼 [LinkedIn](https://linkedin.com/in/deep-kabariya)
- 📧 deepkabariya2308@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
