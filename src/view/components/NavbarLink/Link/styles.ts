import { styled } from "../../../styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  color: '$neutral900',

  'a': {
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    gap: 'inherit',
    alignItems: 'center',
  }
});
