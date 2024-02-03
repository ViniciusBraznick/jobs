import { styled } from "../styles/stitches.config";

export const Icon = styled('span', {
  width: '$spacing$10',
  height: '$spacing$10',
  backgroundColor: '$neutral50',
  display: "grid",
  placeItems: "center",
  borderRadius: '$borderRadius$1',
  color: '$neutral600',
  transition: 'all 200ms',

  '&:hover': {
    backgroundColor: '$neutral150',
    color: '$neutral950',
  },

  variants: {
    roundly: {
      true: {
        borderRadius: '$borderRadius$100',
      }
    }
  }
});
