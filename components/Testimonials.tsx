
import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-5xl text-center">
      <div className="mb-12">
        <svg className="w-16 h-16 text-emerald-500/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56928 13 6.017 13H4.017V21H6.017Z" />
        </svg>
        <h2 className="text-4xl font-serif mb-8 italic">What Our Parents Say</h2>
      </div>

      <div className="space-y-10">
        <p className="text-2xl lg:text-3xl font-light leading-relaxed text-slate-300">
          "The experience for each child at Sabarigiri International will be unique. All the teachers and staff are so loving and caring. It doesn't come with the age-old teaching methods, where all the students are pushed into the same mold."
        </p>
        
        <div className="flex flex-col items-center gap-4">
           <div className="w-20 h-20 rounded-full border-2 border-emerald-500 p-1">
              <img src="https://picsum.photos/id/65/100/100" alt="Avatar" className="w-full h-full object-cover rounded-full" />
           </div>
           <div>
              <p className="font-bold text-white text-lg tracking-wider">DR. GOURI K PARVATHY</p>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mt-1">Parent & Professional</p>
           </div>
        </div>
      </div>
    </div>
  );
};
