
import React from 'react';

const achievers = [
  { name: 'Ethan Philip', achievement: 'Skating Gold', image: 'https://picsum.photos/id/342/600/800' },
  { name: 'Vaiga', achievement: 'Arts Fest Winner', image: 'https://picsum.photos/id/343/600/800' },
  { name: 'Nandakishor', achievement: 'District Skating', image: 'https://picsum.photos/id/344/600/800' },
  { name: 'Lukmanul Hakim', achievement: 'Hockey Gold', image: 'https://picsum.photos/id/345/600/800' },
  { name: 'Ishal Zaira', achievement: 'Bronze Medalist', image: 'https://picsum.photos/id/349/600/800' },
];

export const Achievers: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-sm mb-2 block">Wall of Fame</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-slate-900">Our Achievers</h2>
        </div>
        <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-slate-800 transition-all">
          View All Achievers
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {achievers.map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-3xl aspect-[3/4] shadow-lg">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-1">{item.achievement}</p>
              <h3 className="text-lg font-bold">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
