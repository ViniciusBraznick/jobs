import { styled } from "../styles/stitches.config";

const outlineVariants = {
  backgroundColor: 'transparent',
  color: '$blue500',
  borderColor: '$blue500',
  '&:hover': {
    backgroundColor: '$blue500',
    color: '$neutral50',
  }
}

const dangerVariants = {
  backgroundColor: '$red500',
  borderColor: '$red500',
  '&:hover': {
    backgroundColor: '$red400',
  }
}

export const Button = styled('button', {
  width: 'fit-content',
  height: 48,
  borderRadius: '$borderRadius$1',
  border: '1px solid transparent',
  padding: '0 $spacing$5',
  fontWeight: 600,
  fontSize: '$fontSize$base',
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
  },

  '&:disabled': {
    backgroundColor: '$neutral200',
    color: '$neutral400',
    cursor: 'not-allowed',
  },

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    outline: {
      true: { ...outlineVariants },
    },

    danger: {
      true: { ...dangerVariants },
    }
  }
})
