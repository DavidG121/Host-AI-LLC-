
import React from 'react';

const Step: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => {
  return (
    <div className="relative flex items-start space-x-6">
      <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-brand-primary text-white font-bold text-xl">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-1 text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="setup" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Simple Setup, Powerful Results</h2>
          <p className="text-lg text-gray-400 mt-2">Get up and running in three easy steps.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            <Step
              number={1}
              title="Provide Basic Info"
              description="Share your restaurant's name, phone number, hours, and menu link. We handle the rest."
            />
            <Step
              number={2}
              title="Configure Your Voice"
              description="Choose a voice profile that matches your brand—from friendly and casual to professional and upscale."
            />
            <Step
              number={3}
              title="Go Live"
              description="We connect your existing phone number to our system. Start capturing every call instantly."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
