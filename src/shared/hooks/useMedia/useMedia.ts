'use client';

import { useEffect, useState } from 'react';

type UseMediaProps = {
  smallMobileBreakpoint?: number;
  mobileBreakpoint?: number;
  tabletBreakpoint?: number;
  pcBreakpoint?: number;
  largePcBreakpoint?: number;
};

export const useMedia = (props: UseMediaProps = {}) => {
  const [width, setWidth] = useState<number | null>(null);
  const {
    smallMobileBreakpoint = 374,
    mobileBreakpoint = 767,
    tabletBreakpoint = 1023,
    pcBreakpoint = 1279,
    largePcBreakpoint = 1439,
  } = props;

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const isSmallMobile = width !== null && width <= smallMobileBreakpoint;
  const isMobile = width !== null && width <= mobileBreakpoint;
  const isTablet = width !== null && width <= tabletBreakpoint;
  const isPC = width !== null && width <= pcBreakpoint;
  const isLargePC = width !== null && width <= largePcBreakpoint;

  return {
    isSmallMobile,
    isMobile,
    isTablet,
    isPC,
    isLargePC,
    width,
  };
};
