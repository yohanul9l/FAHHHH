
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Academics', href: '#highlights' },
    { label: 'Admission', href: '#' },
    { label: 'Facilities', href: '#highlights' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <>
      <div className={`hidden lg:flex fixed top-0 w-full bg-slate-900/5 backdrop-blur-sm z-[60] py-1 px-12 justify-between items-center text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase transition-all duration-500 ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="flex gap-8 items-center">
          <span className="flex items-center gap-2 hover:text-slate-900 transition-colors cursor-pointer">
            <Phone size={12} /> +91 80756 80558
          </span>
          <span className="flex items-center gap-2 hover:text-slate-900 transition-colors cursor-pointer">
            <Mail size={12} /> sistvm17@gmail.com
          </span>
        </div>
        <div className="flex gap-6 items-center">
          <span className="hover:text-slate-900 transition-colors cursor-pointer">Follow Us</span>
        </div>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-700 flex justify-center px-4 lg:px-0 ${isScrolled ? 'top-4' : 'top-10 lg:top-14'}`}>
        <div className={`w-full lg:w-auto max-w-6xl liquid-glass rounded-full px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between lg:gap-12 transition-all duration-500 ${isScrolled ? 'shadow-2xl' : ''}`}>
          
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 lg:w-11 lg:h-11 bg-white rounded-full flex items-center justify-center p-0.5 shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-500">
               <img src="https://picsum.photos/id/237/100/100" alt="SIST" className="w-full h-full object-contain rounded-full" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-black tracking-tight text-slate-900">SABARIGIRI</span>
              <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest leading-none">International</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-all uppercase tracking-[0.15em] relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-emerald-500 rounded-full transition-all group-hover:w-2"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-slate-900 hover:bg-slate-800 text-white px-7 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all shadow-lg active:scale-95">
              Enquire
            </button>
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100/50 text-slate-800 hover:bg-slate-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div className={`absolute top-full left-0 right-0 mt-4 mx-4 liquid-glass rounded-3xl transition-all duration-500 lg:hidden overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 py-8 shadow-2xl' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-slate-900" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <button className="mt-4 bg-emerald-600 text-white px-10 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase">
              Admission Open
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
