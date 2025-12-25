import React from 'react';
import { FaqItem } from '../../lib/types';
import { useFAQAccordion } from '../../hooks/use-FAQaccordtion';
import FaqsItem from './FaqsItem';

interface FaqsCategoryProps {
  items: FaqItem[];
}

const FaqsCategory: React.FC<FaqsCategoryProps> = ({
  items,
}) => {
  const { toggleItem, isOpen } = useFAQAccordion();
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="mb-12 last:mb-0">     
      <div className="space-y-0">
        {items.map((item) => (
          <FaqsItem
            key={item.id}
            item={item}
            isOpen={isOpen(item.id)}
            onToggle={toggleItem}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqsCategory;
