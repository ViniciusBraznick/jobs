import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#FFF',

  '& > *': {
    flex: '1'
  }
});

export const Aside = styled('aside', {
  background: '$blue500'
});
