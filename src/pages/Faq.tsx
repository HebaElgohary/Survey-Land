import React from 'react';
import FaqSection from '../components/FAQ/FaqsSection';
import { faqData } from '../lib/faq-data';

const Faq: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-center mb-16 gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-primary">FAQs</h1>
            <p className="text-lg text-secondary max-w-md">
              Have questions about creating surveys, quizzes, or collecting
              responses? We've got answers! Below are some common questions and
              helpful responses to get you started with Survey Infinity.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg mx-auto">
              <img src="/amico.png" alt="FAQs" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="p-8 md:p-12">
          <FaqSection items={faqData} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
