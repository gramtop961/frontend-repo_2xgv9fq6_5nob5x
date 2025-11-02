import React from 'react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Tričko VK – Noční Město (černé)',
    price: '590 Kč',
    color: 'from-fuchsia-500 to-purple-600',
  },
  { id: 2, name: 'Mikina VK – Signature', price: '1 190 Kč', color: 'from-orange-500 to-rose-600' },
  { id: 3, name: 'Kšiltovka VK – Classic', price: '390 Kč', color: 'from-blue-500 to-cyan-500' },
  { id: 4, name: 'Limitovaný plakát (A2)', price: '290 Kč', color: 'from-emerald-500 to-teal-600' },
];

const ShopGrid = () => {
  return (
    <section id="shop" className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">E‑shop</h2>
            <p className="mt-2 text-sm text-white/60">Oficiální merch kapely — kvalitní materiály a limitované edice.</p>
          </div>
          <a href="#shop" className="hidden items-center gap-2 text-sm font-semibold text-white/90 hover:text-white sm:inline-flex">
            Prohlédnout vše
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-sm">
              <div className={`relative h-44 w-full bg-gradient-to-br ${p.color}`}>
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <ShoppingBag className="h-16 w-16" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-white/80">{p.price}</span>
                  <button className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 hover:shadow">
                    Do košíku
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopGrid;
