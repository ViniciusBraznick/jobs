import { styled } from "../../styles/stitches.config";

const hiddenState = {
  width: '80px',

  'header button': {
    right: '-80%',
  },

  'header button svg': {
    transform: 'rotate(180deg)',
  }
}

export const Aside = styled('aside', {
  minHeight: '100vh',
  width: '280px',
  height: '100vh',
  minWidth: 80,
  maxWidth: 280,
  padding: 16,
  background: '#FFF',
  transition: 'width 250ms',

  'header': {
    position: "relative"
  },

  'header button': {
    backgroundColor: "#FFF",
    position: "absolute",
    top: '50%',
    right: '-12%',
    transform: 'translateY(-50%)',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50px',
    overflow: 'hidden',
    border: '4px solid $neutral100',
  },

  variants: {
    visible: {
      false: { ...hiddenState },
    },
  }
})

export const Container = styled('main', {
  marginTop: '$spacing$13',
  height: '85%',
  overflowY: "scroll",
  container: 'sidebar / inline-size',

  '@container sidebar (width < 200px)': {
    'div span:last-child': {
      display: 'none'
    },

    'div div, a': {
      justifyContent: 'center'
    },
  },

  '&::-webkit-scrollbar':{
    width: 4,
    backgroundColor: 'transparent',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$neutral100',
    visibility: "hidden",
    borderRadius: 10,
  },

  '&:hover::-webkit-scrollbar-thumb':{
    visibility: "visible"
  },
})
