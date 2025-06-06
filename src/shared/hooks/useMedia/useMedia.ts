'use client';

import { useMediaQuery } from 'react-responsive';

type UseMediaProps = {
  smallMobileBreakpoint?: string;
  mobileBreakpoint?: string;
  tabletBreakpoint?: string;
  PCBreakpoint?: string;
  largePCBreakpoint?: string;
};

export const useMedia = ({
  smallMobileBreakpoint = '374px',
  mobileBreakpoint = '767px',
  tabletBreakpoint = '1023px',
  PCBreakpoint = '1279px',
  largePCBreakpoint = '1439px',
}: UseMediaProps = {}) => {
  const isSmallMobile = useMediaQuery({ query: `(max-width: ${smallMobileBreakpoint})` });
  const isMobile = useMediaQuery({ query: `(max-width: ${mobileBreakpoint})` });
  const isTablet = useMediaQuery({ query: `(max-width: ${tabletBreakpoint})` });
  const isPC = useMediaQuery({ query: `(max-width: ${PCBreakpoint})` });
  const isLargePC = useMediaQuery({ query: `(max-width: ${largePCBreakpoint})` });

  return {
    isLargePC,
    isPC,
    isTablet,
    isMobile,
    isSmallMobile,
  };
};
