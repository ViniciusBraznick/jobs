import { styled } from "../../../../styles/stitches.config";

const active = {
  backgroundColor: '$blue500',
  color: '$neutral100 !important',

  '&:hover': {
    backgroundColor: '$blue600'
  },

  '& *': {
    backgroundColor: 'transparent',
    color: '$neutral100',
  },
}

export const Container = styled('div', {
  padding: "$spacing$2",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  transition: 'background-color 500ms ease',
  borderRadius: '$borderRadius$1',

  '&:hover': {
    backgroundColor: '$neutral50'
  },

  variants: {
    isActive: {
      true: { ...active }
    },
  }
});
