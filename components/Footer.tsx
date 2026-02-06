
import React from 'react';
import { Instagram, Facebook, Youtube, Twitter, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center p-0.5">
                <img src="https://picsum.photos/id/237/100/100" alt="Logo" className="w-full h-full object-contain rounded-full brightness-0 invert" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-slate-900">SABARIGIRI</span>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.3em] leading-none">International</span>
              </div>
            </div>
            
            <h3 className="text-4xl font-serif text-slate-900 leading-tight">
              Crafting a <span className="italic text-slate-400 font-normal">Legacy</span> of <br /> Wisdom & Truth.
            </h3>

            <div className="flex gap-8">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-[10px]">Navigation</h4>
            <ul className="space-y-4 text-slate-500 text-xs font-bold tracking-widest uppercase">
              {['About', 'Academics', 'Admission', 'Gallery', 'Contact'].map((item) => (
                <li key={item}><a href="#" className="hover:text-emerald-600 transition-colors flex items-center gap-2 group">{item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" /></a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-[10px]">Contact</h4>
            <ul className="space-y-6 text-slate-500 text-xs font-medium leading-relaxed">
              <li>
                Sreekaryam, <br /> Trivandrum-695587
              </li>
              <li className="font-bold text-slate-900">+91 80756 80558</li>
              <li className="font-bold text-slate-900">sistvm17@gmail.com</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
             <div className="liquid-glass p-10 rounded-[3rem] border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Ready to Join?</p>
                <button className="w-full bg-slate-900 text-white py-5 rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-black transition-all shadow-xl shadow-slate-200">
                  Enrol Today
                </button>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-100 gap-8">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">© 2026 Sabarigiri International. All rights reserved.</p>
          <div className="flex gap-10 text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Suffix E Solutions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
