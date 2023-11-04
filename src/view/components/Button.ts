import { styled } from "../styles/stitches.config";

export const Button = styled('button', {
  width: '100%',
  height: 48,
  borderRadius: 4,
  fontWeight: 600,
  fontSize: 16,
  letterSpacing: 1,
  cursor: 'pointer',
  color: '#FFF',
  backgroundColor: '$blue500',
  transition: 'all 100ms linear',

  '&:hover': {
    backgroundColor: '$blue400',
  },

  '&:active': {
    backgroundColor: '$blue600',
  }
})
