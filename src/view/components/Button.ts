import { keyframes } from "@stitches/react";
import { styled } from "../styles/stitches.config";

const spin = keyframes({
  '0%': { transform: 'rotate(0)' },
  '100%': { transform: 'rotate(1080deg)' },
});

const outlineVariants = {
  backgroundColor: 'transparent',
  color: '$blue500',
  borderColor: '$blue500',

  '&:hover': {
    backgroundColor: '$blue500',
    color: '$neutral50',
  }
}

const loadingVariants = {
  color: '#FFF',
  pointerEvents: 'none',
  opacity: 0.5
}

const dangerVariants = {
  backgroundColor: '$red500',
  borderColor: '$red500',
  '&:hover': {
    backgroundColor: '$red400',
  }
}

const invisibleVariable = {
  backgroundColor: 'transparent',
  color: '$neutral400',
  padding: '0',
}

export const Button = styled('button', {
  width: 'fit-content',
  height: 48,
  borderRadius: '$borderRadius$1',
  border: '1px solid transparent',
  padding: '0 $spacing$4',
  fontWeight: 600,
  fontSize: '$fontSize$base',
  letterSpacing: 1,
  cursor: 'pointer',
  color: '#FFF',
  backgroundColor: '$blue500',
  transition: 'all 100ms linear',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,

  '&:hover': {
    opacity: 0.9,
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
    },
    loading: {
      true: {...loadingVariants}
    },
    invisible: {
      true: {...invisibleVariable}
    },
    animate: {
      true: {
        'svg': {
          animation: `${spin} 2s ease-in-out infinite`,
        },
      }
    }
  }
})
