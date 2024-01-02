import { styled } from "../../styles/stitches.config";

const visibleState = {
  width: '80px',

  'header button': {
    right: '-80%',
  },

  'header button svg': {
    transform: 'rotate(180deg)',
  }
}

export const Container = styled('aside', {
  minHeight: '100vh',
  width: '280px',
  height: '100vh',
  minWidth: 80,
  maxWidth: 280,
  padding: 16,
  background: '#FFF',
  transition: 'width 100ms',

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
      false: { ...visibleState },
    },
  }
})
