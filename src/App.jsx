import React from 'react';
import Hero from './components/Hero';
import BlogPreview from './components/BlogPreview';
import ShopGrid from './components/ShopGrid';
import TicketPortal from './components/TicketPortal';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Simple top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
            <span className="text-sm font-semibold">Vítkovo Kavareto</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a className="hover:text-white" href="#blog">Blog</a>
            <a className="hover:text-white" href="#shop">E‑shop</a>
            <a className="hover:text-white" href="#tickets">Lístky</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <BlogPreview />
        <ShopGrid />
        <TicketPortal />
      </main>

      <footer className="border-t border-white/10 bg-gray-950/80">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Vítkovo Kavareto. Všechna práva vyhrazena.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">YouTube</a>
              <a href="#" className="hover:text-white">Spotify</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
