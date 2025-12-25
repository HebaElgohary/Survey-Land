import React from 'react';
import { useFAQAccordion } from '../../hooks/use-FAQaccordtion';
import { FaqItem } from '../../lib/types';
import FaqsItem from './FaqsItem';

interface FaqSectionProps {
  items: FaqItem[];
}

const groupFaqsBySubject = (items: FaqItem[]) => {
  const groups: Record<string, FaqItem[]> = {};

  items.forEach((item) => {
    const subject = item.subject || '';
    if (!groups[subject]) {
      groups[subject] = [];
    }
    groups[subject].push(item);
  });

  return groups;
};

const FaqSection: React.FC<FaqSectionProps> = ({ items }) => {
  const groupedFaqs = groupFaqsBySubject(items);
  const { toggleItem, isOpen } = useFAQAccordion();

  return (
    <div className="w-full max-w-7xl mx-auto">
      {Object.entries(groupedFaqs).map(([subject, categoryItems]) => (
        <div
          key={subject}
          className="grid lg:grid-cols-12 gap-6 lg:gap-12 mt-4 lg:mt-8"
        >
          <div className="lg:col-span-3 mt-5">
            <h3 className="text-2xl font-bold text-primary leading-tight">
              {subject}
            </h3>
          </div>
          <div className="lg:col-span-9">
            <div className="space-y-0">
              {categoryItems.map((item) => (
                <FaqsItem
                  key={item.id}
                  item={item}
                  isOpen={isOpen(item.id)}
                  onToggle={toggleItem}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
