
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-brand-dark to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Your Restaurant's AI Receptionist That Never Misses a Call
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          HostAI answers calls instantly with a warm, human voice, handles common requests, and frees up your staff—turning every call into an opportunity.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#cta"
            className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Request a Demo
          </a>
          <a
            href="#features"
            className="bg-brand-secondary/50 text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-secondary/80 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
