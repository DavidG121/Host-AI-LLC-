
import React from 'react';

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.279-.087.431l4.108 7.552a.75.75 0 0 0 .93.342l.01-.004c.882-.414 1.958-.825 3.026-1.206a.75.75 0 0 1 .65.127l2.25 2.25a.75.75 0 0 1-.217 1.153l-1.076.622a3 3 0 0 1-3.28 0l-6.845-3.98a3 3 0 0 1-1.58-2.651l-2.2-9.755A3 3 0 0 1 1.5 4.5Z" clipRule="evenodd" />
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-md shadow-black/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <PhoneIcon className="h-8 w-8 text-brand-primary"/>
          <h1 className="text-2xl font-bold text-white tracking-tight">HostAI</h1>
        </div>
        <nav>
          <a
            href="#cta"
            className="bg-brand-primary text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
