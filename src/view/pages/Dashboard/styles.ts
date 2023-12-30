import { styled } from "../../styles/stitches.config";

export const Container = styled('aside', {
  minHeight: '100vh',
  maxWidth: 280,
  padding: 16,
  background: '#FFF',

  'ul': {
    marginTop: '$spacing$13'
  },

  'li + li': {
    marginTop: 16
  },

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
    cursor: 'pointer'
  }
})
