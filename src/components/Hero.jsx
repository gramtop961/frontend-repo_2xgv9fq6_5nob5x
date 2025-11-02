import React from 'react';
import { Music, Star, Calendar, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_0%,rgba(217,70,239,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_100%,rgba(249,115,22,0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 shadow-sm backdrop-blur">
          <Star className="h-4 w-4 text-yellow-300" />
          Oficiální stránky kapely
        </div>
        <h1 className="text-balance font-extrabold tracking-tight text-white drop-shadow-sm">
          <span className="block text-4xl sm:text-5xl md:text-6xl">Vítkovo Kavareto</span>
          <span className="mt-2 block text-xl font-medium text-white/80 sm:text-2xl">Blog • E‑shop • Ticket portál</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          Novinky z kapely, exkluzivní merch a lístky na nejbližší koncerty — vše na jednom místě.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#tickets" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:shadow">
            <Calendar className="h-4 w-4" />
            Lístky na koncerty
          </a>
          <a href="#blog" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 backdrop-blur transition hover:bg-white/20">
            <Music className="h-4 w-4" />
            Přečíst blog
          </a>
          <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 backdrop-blur transition hover:bg-white/20">
            <ShoppingBag className="h-4 w-4" />
            Do e‑shopu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
