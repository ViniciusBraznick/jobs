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

const subCategoryActive = {
  backgroundColor: 'transparent',
  color: '$neutral900 !important',
  fontWeight: "bold",

  '&:hover': {
    backgroundColor: 'transparent'
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
    isSubCategory: {
      true: {...subCategoryActive}
    },
  }
});
