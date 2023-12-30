import { styled } from "../../styles/stitches.config";

export const Container = styled('aside', {
  minHeight: '100vh',
  maxWidth: 280,
  padding: 16,
  background: '#FFF',

  '.teste': {
    marginTop: '$spacing$13'
  },

  '.teste > li + li': {
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
  },

  '.sub-category': {
    marginLeft: 20,
    position: 'relative',

    '&:before': {
      content: '',
      height: 'calc(100% - 18px)',
      width: 2,
      backgroundColor: '#000',
      display: 'block',
      position: 'absolute',
      left: 0
    },

    'li': {
      position: 'relative',
      marginLeft: 10,

      '&:before': {
        content: '',
        height: 2,
        width: 10,
        backgroundColor: '#000',
        display: 'block',
        position: 'absolute',
        left: -10
      }
    }
  }
})
