
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Soft background glow */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-emerald-100/30 rounded-full blur-[120px] -z-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-sky-100/30 rounded-full blur-[100px] -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <div className="mb-8 inline-flex items-center gap-3 bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full shadow-sm animate-[fadeIn_0.8s_ease-out]">
           <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
           <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Admissions 2026-27 Now Open</span>
        </div>
        
        <h1 className="text-6xl lg:text-[7.5rem] font-serif text-slate-900 mb-10 leading-[0.9] tracking-tighter animate-[fadeInUp_1s_ease-out]">
          Cultivating <span className="italic text-slate-400 font-normal">Thought</span><br /> 
          Leaders.
        </h1>
        
        <p className="text-slate-500 text-lg lg:text-xl max-w-xl mx-auto mb-12 font-medium leading-relaxed animate-[fadeInUp_1.3s_ease-out] opacity-80">
          A minimalist approach to world-class education. Shaping the visionaries of tomorrow through clarity and excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-[fadeInUp_1.6s_ease-out]">
          <button className="bg-slate-900 hover:bg-black text-white px-12 py-5 rounded-full font-bold tracking-widest text-[11px] uppercase transition-all shadow-xl shadow-slate-200 hover:-translate-y-1">
            Apply Now
          </button>
          <button className="group bg-transparent hover:bg-slate-50 border border-slate-200 text-slate-900 px-12 py-5 rounded-full font-bold tracking-widest text-[11px] uppercase transition-all flex items-center gap-3">
            Our Legacy
            <span className="w-5 h-[1px] bg-slate-300 group-hover:w-8 transition-all"></span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-slate-900 to-transparent"></div>
      </div>
    </section>
  );
};
