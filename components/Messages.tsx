
import React from 'react';

export const Messages: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-7xl space-y-32">
      {/* Chairman's Message */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
          <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-sm block">Visionary Leadership</span>
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-900">Chairman's Message</h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
          <p className="text-slate-600 font-light leading-relaxed text-lg italic">
            "School life is the most creative, innovative and joyous period in one's life. Your Alma mater must be precious to you. Always feel proud of your school. Identify your special talent in arts and sports and develop them."
          </p>
          <div className="pt-4">
            <p className="font-bold text-slate-900 text-xl">Dr. V. K. Jayakumar</p>
            <p className="text-slate-500 text-sm uppercase tracking-widest">Founder & Chairman</p>
          </div>
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2">
           <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://picsum.photos/id/64/800/1000" alt="Chairman" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>

      {/* Principal's Message */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
           <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/id/65/800/1000" alt="Principal" className="w-full h-full object-cover" />
           </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-sm block">Academic Excellence</span>
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-900">Principal's Address</h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
          <p className="text-slate-600 font-light leading-relaxed text-lg italic">
            "Our ethos are good, contemporary yet traditional, strict with importance placed on discipline and respect. We seek to inspire, guide and learn with your children in an approachable atmosphere."
          </p>
          <div className="pt-4">
            <p className="font-bold text-slate-900 text-xl">Dr. Gouri K Parvathy</p>
            <p className="text-slate-500 text-sm uppercase tracking-widest">Principal, SIST</p>
          </div>
        </div>
      </div>
    </div>
  );
};
