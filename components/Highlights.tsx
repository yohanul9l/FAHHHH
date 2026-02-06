
import React from 'react';

const highlights = [
  { title: 'Digital Library', image: 'https://picsum.photos/id/367/400/400' },
  { title: 'Robotics', image: 'https://picsum.photos/id/370/400/400' },
  { title: 'Wellness', image: 'https://picsum.photos/id/371/400/400' },
  { title: 'Transit', image: 'https://picsum.photos/id/372/400/400' },
  { title: 'Residency', image: 'https://picsum.photos/id/373/400/400' },
];

export const Highlights: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-serif text-slate-900 mb-6">World-Class <span className="italic text-slate-400 font-normal">Essentials.</span></h2>
        <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full mb-8"></div>
        <p className="text-slate-400 max-w-lg mx-auto font-medium text-sm leading-relaxed uppercase tracking-widest">Thoughtfully designed infrastructure for holistic growth.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
        {highlights.map((item, idx) => (
          <div key={idx} className="group text-center">
            <div className="relative w-full aspect-square mb-8 p-1">
              <div className="absolute inset-0 bg-white border border-slate-100 rounded-full group-hover:scale-105 transition-transform duration-500"></div>
              <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 p-1">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            <h3 className="text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase transition-colors group-hover:text-slate-900">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
