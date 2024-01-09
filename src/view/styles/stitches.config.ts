import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss, createTheme, theme } =
createStitches({
  theme: {
    colors: {
      primary: '#3B82F6',
      backgroundBody: '#FAFAFA',
      // Blue
      blue50: '#eff6ff',
      blue100: '#dbeafe',
      blue200: '#bfdbfe',
      blue300: '#93c5fd',
      blue400: '#60a5fa',
      blue500: '#1d6ded',
      blue600: '#2563eb',
      blue700: '#1d4ed8',
      blue800: '#1e40af',
      blue900: '#1e3a8a',
      blue950: '#172554',
      // Red
      red50: '#fef2f2',
      red100: '#fee2e2',
      red200: '#fecaca',
      red300: '#fca5a5',
      red400: '#f87171',
      red500: '#ef4444',
      red600: '#dc2626',
      red700: '#b91c1c',
      red800: '#991b1b',
      red900: '#7f1d1d',
      red950: '#450a0a',
      // Neutral
      neutral50: '#fafafa',
      neutral100: '#f5f5f5',
      neutral200: '#e5e5e5',
      neutral300: '#d4d4d4',
      neutral400: '#a3a3a3',
      neutral500: '#737373',
      neutral600: '#525252',
      neutral700: '#404040',
      neutral800: '#262626',
      neutral900: '#171717',
      neutral950: '#0a0a0a',
    },
    fonts: {
      kumbhSans: 'Kumbh Sans, sans-serif',
      outfit: 'Outfit, sans-serif',
      notFound: 'Major Mono Display, monospace'
    },
    fontSize: {
      sm: '0.75rem',
      '2sm': '0.875rem',
      base: '1rem',
      md: '1.5rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
    },
    spacing: {
      1: '0.25rem', //4px
      2: '0.5rem', //8px
      3: '0.75rem', //12px
      4: '0.875rem', //14px
      5: '1rem', //16px
      6: '1.125rem', //18px
      7: '1.5rem', //24px
      8: '1.75rem', //28px
      9: '2rem', //32px
      10: '2.625rem', //42px
      11: '3rem', //48px
      12: '3.25rem', //52px
      13: '4rem', //64px
      14: '4.5rem', //72px
      15: '5rem', //80px
    },
    borderRadius: {
      1: '0.25rem', //4px
      2: '0.5rem', //8px
      3: '0.75rem', //12px
      4: '1rem', //16px
      6: '1.5rem', //24px
    },

  },
  media: {
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    base: '(max-width: 1024px)',
    lg: '(max-width: 1240px)',
    xlg: '(max-width: 1920px)',
  },
});
