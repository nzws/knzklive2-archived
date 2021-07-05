import { MutableRefObject, useEffect, useState } from 'react';

export const useIsFocusing = (ref: MutableRefObject<HTMLElement>) => {
  const [isFocusing, setIsFocusing] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const handleFocus = () => setIsFocusing(true);
    const handleBlur = () => setIsFocusing(false);

    element.addEventListener('focus', handleFocus);
    element.addEventListener('blur', handleBlur);

    return () => {
      element.removeEventListener('focus', handleFocus);
      element.removeEventListener('blur', handleBlur);
    };
  }, [ref]);

  return [isFocusing];
};
