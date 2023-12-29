import { styled } from "../../../styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  gap: 8,
  alignItems: 'center',

  'a': {
    color: 'inherit',
    textDecoration: 'none'
  }
});
