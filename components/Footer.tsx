
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-800">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} HostAI. All rights reserved.</p>
        <p className="text-sm mt-1">Transforming restaurant communications, one call at a time.</p>
      </div>
    </footer>
  );
};

export default Footer;
