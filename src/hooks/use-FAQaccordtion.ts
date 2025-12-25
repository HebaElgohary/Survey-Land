import { useState, useCallback } from 'react';

export const useFAQAccordion = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const isOpen = useCallback((id: string) => openId === id, [openId]);

  return { toggleItem, isOpen };
};
