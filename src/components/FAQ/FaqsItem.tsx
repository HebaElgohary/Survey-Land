import React, { useRef, useEffect, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../../lib/types';

interface FaqsItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const FaqsItem: React.FC<FaqsItemProps> = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-6 text-left"
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-lg">
          {item.question}
        </span>
        <span className="text-border">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{ height: `${height}px` }}
      >
        <div className="pb-6 text-border">{item.answer}</div>
      </div>
    </div>
  );
};

export default FaqsItem;
