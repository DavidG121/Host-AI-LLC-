
import React from 'react';

const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);


const Benefits: React.FC = () => {
    return (
        <section id="benefits" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Stop Losing Revenue to Missed Calls</h2>
                    <p className="text-lg text-gray-400 mt-2">Transform your biggest frustration into your greatest asset.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Pain */}
                    <div className="bg-red-900/20 border border-red-500/30 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-red-300 mb-4">The Pain</h3>
                        <ul className="space-y-3 text-red-200">
                            <li className="flex items-start"><XCircleIcon className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0 text-red-400" />Phones ring unanswered during peak hours.</li>
                            <li className="flex items-start"><XCircleIcon className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0 text-red-400" />Staff is overwhelmed and can't get to the phone.</li>
                            <li className="flex items-start"><XCircleIcon className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0 text-red-400" />Customers hang up, leading to lost reservations.</li>
                            <li className="flex items-start"><XCircleIcon className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0 text-red-400" />Missed calls result in angry customers and bad reviews.</li>
                        </ul>
                    </div>
                    {/* The Gain */}
                    <div className="bg-green-900/20 border border-green-500/30 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-green-300 mb-4">The Gain with HostAI</h3>
                        <ul className="space-y-3 text-green-200">
                            <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0 text-green-400" />Every single call is answered instantly, 24/7.</li>
                            <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0 text-green-400" />Removes interruptions, letting staff focus on guests.</li>
                            <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0 text-green-400" />Increases table bookings and takeout order opportunities.</li>
                            <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0 text-green-400" />Improves customer satisfaction and operational flow.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
