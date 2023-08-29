import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../context/ActiveSectionContext';
import type { SectionName } from '../lib/types';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  // Utilize react-intersection-observer and useEffect to implement dynamic Header items tracing section into view effect while scrolling
  // focus of Header item changes only if 50% content of About section showing on the page
  // Since we need this block of code for each item in the header, we'd better build a custom hook for it
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
