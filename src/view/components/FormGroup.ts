import { styled } from "../styles/stitches.config";

export const FormGroup = styled('fieldset', {
  display: 'flex',
  gap: '16px',
  border: 0,
  flexWrap: 'wrap',

  '& fieldset': {
    flex: 1,
    width: '100%'
  },

  '& + &': {
    marginTop: '24px'
  },

  '@sm': {
      flexDirection: "column"
  }
});
