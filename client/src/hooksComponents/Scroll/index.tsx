import { useEffect, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

export default function useScroll(): Size {
  const [windowSize, setWindowSize] = useState<Size>({ width: 0, height: 0 });

  const windowChange = () => {
    const width = window.scrollX;
    const height = window.scrollY;
    setWindowSize({ width, height });
  };
  useEffect(() => {
    window.addEventListener('scroll', windowChange);

    return () => {
      window.removeEventListener('scroll', windowChange);
    };
  }, []);
  return windowSize;
}
