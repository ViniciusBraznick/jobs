import { keyframes } from "@stitches/react";
import { styled } from "../../styles/stitches.config";


const fadeIn = keyframes({
  '0%': { transform: 'translateX(-100%)'  },
  '100%': { transform: 'translateX(0)' },
});

const opacityIn = keyframes({
  '0%': { opacity: 0  },
  '100%': { opacity: 1 },
});

export const Wrapper = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  animation: `${fadeIn} 300ms 100ms ease forwards , ${opacityIn} 800ms 90ms ease forwards `
});

export const Container =styled('div', {
  maxWidth: 448,
  width: '90%',

  'form': {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,

    'button':{
      marginTop: 8
    },

    'p': {
      textAlign: 'center'
    },

    'a': {
      color: '$blue500'
    },
  },

  '.change-register': {
    width: 'fit-content',
    color: '$neutral400',
    textDecoration: 'none',
    textAlign: "center",
    display: 'flex',
    gap: 8,
    margin: '0 auto',
    marginTop: 64,
    transition: 'all 100ms ease',
    padding: '8px 0',

    '&:hover': {
      color: '$neutral500',
      gap: 16,
    },

    'svg': {
      width: 24,
      height: 24
    }
  }
})
