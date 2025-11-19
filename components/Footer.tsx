
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12 text-center">
        <p className="font-serif text-gray-400 text-lg">&copy; {new Date().getFullYear()} Economia Aziendale Interactive Guide.</p>
        <p className="text-xs font-mono text-gray-600 mt-2 tracking-widest uppercase">Designed for Excellence</p>
      </div>
    </footer>
  );
};

export default Footer;
