
import React from 'react';

export const WelcomeSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-[3rem] shadow-sm group">
            <img 
              src="https://picsum.photos/id/201/800/1000" 
              alt="School Gateway" 
              className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 hidden lg:block liquid-glass p-10 rounded-[2.5rem] shadow-xl animate-float">
             <div className="text-5xl font-serif text-slate-900 mb-1">45<span className="text-emerald-500 font-sans">+</span></div>
             <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Years of Trust</div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-serif text-slate-900 leading-none tracking-tight">
              Where Clarity meets <br /> 
              <span className="italic text-emerald-600">Ambition.</span>
            </h2>
          </div>
          
          <div className="space-y-8 text-slate-500 font-medium leading-relaxed text-lg opacity-90">
            <p>
              Sabarigiri International School is more than just a place of learning; it's a sanctuary for intellectual growth and personal evolution.
            </p>
            <p className="text-base font-normal">
              Founded in 1978, we've spent decades refining an educational model that prioritizes individual potential and global perspectives.
            </p>
          </div>

          <div className="flex items-center gap-12 pt-4">
            <div>
              <div className="text-2xl font-black text-slate-900">100%</div>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Board Merit</div>
            </div>
            <div className="w-[1px] h-10 bg-slate-100"></div>
            <div>
              <div className="text-2xl font-black text-slate-900">2500+</div>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Global Alumni</div>
            </div>
          </div>

          <button className="group flex items-center gap-5 text-slate-900 font-black uppercase tracking-[0.2em] text-[10px] hover:gap-8 transition-all">
            Discover Our Story
            <span className="w-12 h-[1.5px] bg-emerald-500 transition-all group-hover:w-20"></span>
          </button>
        </div>
      </div>
    </div>
  );
};
