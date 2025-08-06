# Wallet Ledger Dashboard

A modern, responsive dashboard for tracking wallet transactions and managing your cryptocurrency portfolio. Built with Next.js, React, TypeScript, Tailwind CSS, and Zustand.

## ✨ Features

- **Responsive UI**: Mobile-first, adapts to all screen sizes
- **Component-based architecture**: Clean, reusable React components
- **Sortable & Searchable Table**: Sort and filter transactions in real time
- **Summary Cards**: At-a-glance financial metrics
- **Modern Design**: Figma-accurate, accessible, and visually appealing
- **State Management**: Global search state with Zustand
- **Fast & Performant**: Optimized rendering and smooth interactions

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Google Fonts: Public Sans, Timmana](https://fonts.google.com/)

## 🚀 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yunushabeeb/venture-studio.git
   cd venture-studio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🖼️ Design Reference

- [Figma Design File](https://drive.google.com/file/d/1rwC8iEBBU9YpSF7iDbEDZJ9i_JqslHT5/view?usp=sharing)

## 📝 Project Structure

```
app/
  components/      # Reusable UI components
  lib/             # Zustand store, sample data, and utilities
  summary/         # Summary section components
  table/           # Transaction table components
  upperbar/        # Upper bar (header) components
  globals.css      # Tailwind and custom CSS variables
  layout.tsx       # App layout
  page.tsx         # Main dashboard page
public/
  icons/           # App icons
  images/avatars/  # User avatars
```

## 🛠️ Customization

- **Colors & Fonts:** Managed via CSS variables in [`app/globals.css`](app/globals.css )
- **Sample Data:** Edit or extend in [`app/lib/content.ts`](app/lib/content.ts )
- **State Management:** See [`app/lib/store.ts`](app/lib/store.ts ) for Zustand setup

## 🧪 Testing

- Manual UI/UX testing recommended (no automated tests included)

## 🌐 Deployment

Deploy easily on [Vercel](https://vercel.com/) and live version is [here](https://venture-studio-peach.vercel.app/) 

## 🙏 Credits

- [Resilience 17 Venture Studio](https://resilience17.com/)
- [Figma Design](https://drive.google.com/file/d/1rwC8iEBBU9YpSF7iDbEDZJ9i_JqslHT5/view?usp=sharing)

---

**Ready to track your wallet with style and precision!**
