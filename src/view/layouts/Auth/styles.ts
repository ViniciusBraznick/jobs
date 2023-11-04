import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  background: 'red',
  height: '100vh',
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'center',
  backgroundColor: '#FFF',

  '& > *': {
    flex: '1'
  }
});

export const Aside = styled('aside', {
  background: '$primary'
})
