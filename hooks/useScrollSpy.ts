
import { useState, useEffect, useRef } from 'react';

interface ScrollSpyOptions {
  rootMargin?: string;
  threshold?: number | number[];
}

export const useScrollSpy = (
  ids: string[],
  options: ScrollSpyOptions = { rootMargin: '0% 0% -40% 0%' }
): string | null => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));
    
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });

    return () => observer.current?.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(','), options.rootMargin, options.threshold]); 

  return activeId;
};
