
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-brand-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to Improve Your Restaurant's Flow?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          See how HostAI can eliminate lost revenue and reduce staff workload. Schedule a free, no-obligation demo today.
        </p>
        <a
          href="#"
          className="bg-white text-brand-primary font-bold py-4 px-10 rounded-full shadow-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
        >
          Schedule Your Free Demo
        </a>
      </div>
    </section>
  );
};

export default CTA;
