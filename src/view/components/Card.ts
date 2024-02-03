import { styled } from "../styles/stitches.config";

export const Card = styled('div', {
  padding: '24px',
  width: 'fit-content',
  height: 'fit-content',
  background: "#FFF",
  borderRadius: '4px',

  variants: {
    fullWidth: {
      true: {
        width: '100%',
        height: '100%',
        flex: 1
      }
    }
  }
});
