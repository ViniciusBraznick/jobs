import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss, createTheme, theme } =
  createStitches({
    theme: {
      colors: {
        primary: '#3B82F6',
        backgroundBody: '#FAFAFA',
        title: '#262626',
        paragraph: '#A1A1AA',
        gray: '#6E8098',
        buttonText: '#FFF',
        // Blue
        blue50: '#eff6ff',
        blue100: '#dbeafe',
        blue200: '#bfdbfe',
        blue300: '#93c5fd',
        blue400: '#60a5fa',
        blue500: '#3b82f6',
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
      }
    }
  });
