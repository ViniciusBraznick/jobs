import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'input, textarea': {
    fontFamily: '$paragraph'
  },
  'button':{
    fontFamily:'$title'
  },
  'ul, ol': {
    listStyle: 'none',
  },
});
