import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#FFF',

  '& > *': {
    flex: '1'
  }
});

export const Wrapper = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ContainerForm =styled('div', {
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


export const Aside = styled('aside', {
  background: '$blue500',
  '@base': {
    display: 'none',
  }
});
