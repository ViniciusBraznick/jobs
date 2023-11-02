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
      },
      fonts: {
        title: 'Kumbh Sans, sans-serif',
        paragraph: 'Outfit, sans-serif'
      }
    }
  });
