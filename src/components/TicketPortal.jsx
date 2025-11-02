import React from 'react';
import { CalendarDays, MapPin, Ticket } from 'lucide-react';

const shows = [
  { id: 1, date: '12. 11. 2025', city: 'Praha', venue: 'Lucerna Music Bar', url: '#' },
  { id: 2, date: '20. 11. 2025', city: 'Brno', venue: 'Sono Centrum', url: '#' },
  { id: 3, date: '5. 12. 2025', city: 'Ostrava', venue: 'Barrák Music Club', url: '#' },
  { id: 4, date: '18. 12. 2025', city: 'Plzeň', venue: 'Divadlo Pod lampou', url: '#' },
];

const TicketPortal = () => {
  return (
    <section id="tickets" className="bg-gray-900/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Ticket portál</h2>
            <p className="mt-2 text-sm text-white/70">Rezervujte si vstupenky na nadcházející koncerty.</p>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 sm:block">
            <span className="inline-flex items-center gap-1"><CalendarDays className="h-3 w-3" /> Nadcházející koncerty</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10">
          <ul className="divide-y divide-white/10">
            {shows.map((s) => (
              <li key={s.id} className="flex flex-col gap-4 bg-gray-950/60 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-1 items-center gap-4">
                  <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/80 ring-1 ring-white/10 sm:flex">
                    <Ticket className="h-5 w-5" />
                  </div>
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-6">
                    <div>
                      <p className="text-sm text-white/60">Datum</p>
                      <p className="font-semibold text-white">{s.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Město</p>
                      <p className="font-semibold text-white">{s.city}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Místo</p>
                      <p className="inline-flex items-center gap-1 font-semibold text-white">
                        <MapPin className="h-4 w-4 text-fuchsia-400" /> {s.venue}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={s.url}
                    className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:shadow"
                  >
                    Koupit lístky
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4 text-xs text-white/60">Bezpečný nákup zajištěn. Elektronické vstupenky dorazí na váš e‑mail.</p>
      </div>
    </section>
  );
};

export default TicketPortal;
