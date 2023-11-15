import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'button, input, textarea': {
    border: 0,
    fontFamily: '$outfit',
  },
  'ul, ol': {
    listStyle: 'none',
  },
  'p, a': {
    fontFamily: '$outfit'
  },
  'a': {
    color: '$blue500',
    '&:hover': {
      color: '$blue400'
    }
  }
});
