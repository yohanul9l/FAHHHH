
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WelcomeSection } from './components/WelcomeSection';
import { Messages } from './components/Messages';
import { Achievers } from './components/Achievers';
import { Highlights } from './components/Highlights';
import { NewsEvents } from './components/NewsEvents';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <section id="about" className="py-32 lg:py-48 bg-white overflow-hidden">
          <WelcomeSection />
        </section>

        <section className="bg-[#fafafa] py-32 lg:py-48">
          <Messages />
        </section>

        <section id="highlights" className="py-32 lg:py-48 bg-white">
          <Highlights />
        </section>

        <section id="achievements" className="py-32 lg:py-48 bg-[#fafafa]">
          <Achievers />
        </section>

        <section id="news" className="py-32 lg:py-48 bg-white">
          <NewsEvents />
        </section>

        <section className="py-32 lg:py-48 bg-slate-900 text-white rounded-t-[4rem] lg:rounded-t-[6rem]">
          <Testimonials />
        </section>
      </main>

      <Footer />
      
      {/* Refined Quick Action Floating Menu */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button className="group relative w-12 h-12 bg-white/80 backdrop-blur-xl border border-slate-200 text-slate-900 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all hover:bg-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <span className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Email Us</span>
        </button>
        <button className="group relative w-12 h-12 bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-200 flex items-center justify-center hover:scale-110 transition-all">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.125l-1.02 3.116 3.103-1.011c.823.513 1.838.877 3.016.877 3.18 0 5.767-2.586 5.767-5.766 0-3.181-2.587-5.767-5.767-5.767zm3.39 8.044c-.147.413-.85.753-1.2.803-.311.043-.721.066-1.155-.066-.271-.082-.619-.18-1.041-.362-1.791-.773-2.946-2.593-3.036-2.712-.089-.12-1.357-1.801-1.357-3.435 0-1.634.854-2.438 1.156-2.768.257-.282.684-.42 1.08-.42.128 0 .243.006.342.012.285.013.435.031.624.475.234.551.8 1.954.87 2.094.07.14.117.303.024.489-.092.186-.14.303-.277.466-.138.164-.29.366-.413.49-.139.14-.286.294-.123.573.163.28.723 1.192 1.555 1.934.782.697 1.44.912 1.766 1.052.326.139.516.117.708-.105.192-.222.827-.963 1.048-1.293.221-.33.443-.276.746-.164.303.111 1.921.905 2.251 1.069.33.163.55.242.63.38.081.139.081.803-.066 1.216z"/></svg>
          <span className="absolute right-full mr-4 bg-emerald-600 text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default App;
