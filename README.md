# C5C Construction

![C5C Construction Banner](public/website%20picture.png)

A high-end, modern landing page for **C5C Construction**, a premier construction company specializing in new builds, custom homes, and project management. This application is built with a focus on precision, luxury, and high-performance user experience.

## 🏗️ Project Overview

C5C Construction's digital presence is designed to reflect the company's commitment to quality and architectural excellence. The website features a clean, "Swiss Modernism" aesthetic with a bold color palette of construction yellow, charcoal gray, and crisp white.

## ✨ Key Features

- **Dynamic Hero Section**: A high-impact introduction to the brand with smooth entry animations.
- **Interactive Services Grid**: A visually engaging showcase of construction services with hover-based labels.
- **Expertly Completed Projects**: A sophisticated project gallery featuring:
  - Custom "leaf-shaped" interactive elements.
  - Hover-triggered project details and descriptions.
  - Smooth scaling effects and high-resolution imagery.
- **Client Testimonials**: An infinite-scrolling carousel of trust and commitment stories from satisfied clients.
- **Responsive Design**: Fully optimized for all devices, from ultra-wide monitors to smartphones.
- **Accessibility & SEO**: Built with semantic HTML, ARIA labels, and optimized metadata for search engine visibility.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter (Sans-serif) & JetBrains Mono

## 📂 Project Structure

```text
├── app/                  # Next.js App Router (Pages, Layouts, Favicons)
├── components/           # Reusable UI Components
│   ├── Hero.tsx          # Hero section with animations
│   ├── Services.tsx      # Services grid
│   ├── Projects.tsx      # Interactive project gallery
│   ├── Testimonials.tsx  # Infinite scroll testimonials
│   ├── Footer.tsx        # Site footer with social links
│   └── ...
├── lib/                  # Utility functions and shared data
├── public/               # Static assets (images, icons)
├── metadata.json         # Application metadata
└── tailwind.config.ts    # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build & Production

To create an optimized production build:

```bash
npm run build
npm start
```

## 🎨 Design Philosophy

The design follows a **Precision-First** approach:
- **Typography**: Bold, structured headings paired with legible body text.
- **Color**: High-contrast yellow (#FACC15) used strategically for Call-to-Action elements.
- **Interaction**: Micro-interactions and smooth transitions to provide a premium feel.

## 📄 License

This project is private and proprietary. All rights reserved © 2026 C5C Construction Company.
