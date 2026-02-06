
import React from 'react';

const news = [
  {
    title: "World Students' Day",
    date: "15 Oct",
    excerpt: "Celebrating the visionary legacy of Dr. APJ Abdul Kalam through aerospace research.",
    image: "https://picsum.photos/id/400/600/400"
  },
  {
    title: "Kids Film Festival",
    date: "26 Nov",
    excerpt: "A week-long celebration of storytelling and international cinematic arts.",
    image: "https://picsum.photos/id/401/600/400"
  },
  {
    title: "Kerala Piravi",
    date: "01 Nov",
    excerpt: "Exploring the cultural heritage of God's Own Country through student performances.",
    image: "https://picsum.photos/id/402/600/400"
  }
];

export const NewsEvents: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <h2 className="text-5xl font-serif text-slate-900 mb-4 tracking-tight">Journal & <span className="italic text-slate-400 font-normal">Insights.</span></h2>
          <p className="text-slate-400 font-medium text-xs uppercase tracking-widest">Stay updated with the latest from our vibrant community.</p>
        </div>
        <button className="text-[10px] font-black uppercase tracking-[0.2em] bg-slate-50 border border-slate-200 px-10 py-4 rounded-full hover:bg-slate-900 hover:text-white transition-all">
          View All Updates
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-16">
        {news.map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-sm grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700">
               <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
               <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900">
                 {item.date}
               </div>
            </div>
            <div className="space-y-4">
               <h3 className="text-2xl font-serif text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">{item.title}</h3>
               <p className="text-slate-500 font-medium leading-relaxed text-sm opacity-80">{item.excerpt}</p>
               <div className="pt-2">
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-100 group-hover:border-emerald-500 transition-all pb-1">
                   Read Full Story
                 </span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
