import { useEffect, useState } from 'react';

const mobileMediaQuery = window.matchMedia('(max-width: 576px)');
const tabletMediaQuery = window.matchMedia('(min-width:767px and max-width: 992px)');

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 576 && window.innerWidth < 992);

  useEffect(() => {
    const queryMobileChanged = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    const queryTabletChanged = (e: MediaQueryListEvent) => {
      setIsTablet(e.matches);
    };

    mobileMediaQuery.addEventListener('change', queryMobileChanged);
    tabletMediaQuery.addEventListener('change', queryTabletChanged);

    return () => {
      mobileMediaQuery.removeEventListener('change', queryMobileChanged);
      tabletMediaQuery.removeEventListener('change', queryTabletChanged);
    };
  }, []);

  return { isTablet, isMobile };
}
