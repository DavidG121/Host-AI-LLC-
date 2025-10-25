import React from 'react';

// A quote icon for visual flair
const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className} viewBox="0 0 16 16">
        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zM4 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H2.612q0-.527.062-1.054.094-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 1 7.558V11a1 1 0 0 0 1 1z"/>
    </svg>
);


interface TestimonialCardProps {
  quote: string;
  name: string;
  restaurant: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, restaurant }) => {
  return (
    <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg flex flex-col h-full">
      <QuoteIcon className="h-8 w-8 text-brand-primary/50 mb-4" />
      <blockquote className="text-gray-300 italic flex-grow">"{quote}"</blockquote>
      <footer className="mt-6">
        <p className="font-bold text-white">{name}</p>
        <p className="text-gray-400 text-sm">{restaurant}</p>
      </footer>
    </div>
  );
};

const Testimonials: React.FC = () => {
    const testimonialList: TestimonialCardProps[] = [
        {
            quote: "HostAI has been a game-changer. Our staff is less stressed during peak hours, and we've seen a noticeable increase in reservations. We're capturing calls we definitely would have missed before.",
            name: 'Maria Rodriguez',
            restaurant: 'Owner, La Trattoria',
        },
        {
            quote: "I was skeptical about an AI voice, but our customers love it. It's clear, professional, and handles 90% of our calls without needing to interrupt my team. The setup was incredibly simple.",
            name: 'David Chen',
            restaurant: 'Manager, The Golden Wok',
        },
        {
            quote: "The best part is the peace of mind. Knowing that every call is answered, every customer is helped... that's invaluable. It's like having a perfect host who never takes a day off.",
            name: 'Samantha Jones',
            restaurant: 'Co-Founder, The Urban Bistro',
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">What Our Customers Say</h2>
                    <p className="text-lg text-gray-400 mt-2">Real results from restaurants just like yours.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                   {testimonialList.map(testimonial => <TestimonialCard key={testimonial.name} {...testimonial} />)}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;