# Personal CV Site

A modern, interactive personal CV website built with React, TypeScript, and Vite. It features a fast, responsive design with a dark mode aesthetic and glassmorphism effects.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (usually comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/personal_site.git
    cd personal_site
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

To start the development server (with hot reload):

```bash
npm run dev
```

### Previewing Production Build

To preview the built site locally (simulating a real server), **do not** open `index.html` directly. Instead run:

```bash
npm run build
npx serve dist
```

---

## 🛠️ Customization

You can easily customize the site with your own information without touching the core code.

### Updating Personal Information

All the content (Name, Experience, Education, Social Links) is managed in a single file:

👉 **`src/data/content.ts`**

Open `src/data/content.ts` in your code editor. You will see an object structure like this:

```typescript
export const content = {
  hero: {
    name: "Alvaro", // Change to your name
    role: "Full Stack Developer", // Change to your role
    tagline: "Building digital experiences that matter.",
    social: {
      github: "...",
      linkedin: "...",
      email: "..."
    }
  },
  experience: [
    // Add or remove experience items here
    {
      id: 1,
      role: "Your Role",
      company: "Company Name",
      period: "2023 - Present",
      description: "Description of your work..."
    }
  ],
  education: [
    // Add your education here
  ]
};
```

Simply replace the existing text with your own data, save the file, and the site will automatically update!

### Changing Colors

If you want to tweak the color scheme, check `src/index.css`. The main colors are defined as CSS variables at the top:

```css
:root {
  --bg-dark: #0f172a;
  --accent-primary: #38bdf8; /* Change this to your favorite color */
  /* ... */
}
```

## 📄 License

This project is open source and available for personal use.
