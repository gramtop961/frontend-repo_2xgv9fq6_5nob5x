import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Nový singl je venku! Poslechněte si „Noční Město“',
    excerpt:
      'Po měsících práce vám představujeme náš nový singl inspirovaný pulzem pražských ulic. Podívejte se do zákulisí nahrávání a poslechněte si ukázku.',
    date: '21. září 2025',
    tag: 'Novinka',
  },
  {
    id: 2,
    title: 'Report: Letní turné 2025 očima kapely',
    excerpt:
      'Fotky, momentky a naše osobní postřehy z nejlepších zastávek. Děkujeme všem, kdo přišli – byli jste úžasní!',
    date: '5. září 2025',
    tag: 'Report',
  },
  {
    id: 3,
    title: 'Jak vzniká merch: od nápadu k tričku',
    excerpt:
      'Nahlédněte do kreativního procesu, materiálů i tisku. Přidali jsme limitovanou edici s ručním podpisem.',
    date: '18. srpna 2025',
    tag: 'Backstage',
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Z blogu</h2>
            <p className="mt-2 text-sm text-white/60">Čerstvé novinky, zákulisí a reporty z koncertů.</p>
          </div>
          <a href="#blog" className="hidden items-center gap-2 text-sm font-semibold text-white/90 hover:text-white sm:inline-flex">
            Všechny články
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:bg-white/10">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
                {post.tag}
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:underline">{post.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-white/70">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-white/60">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                <button className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-white/90 transition hover:bg-white/10">
                  Číst dál
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
