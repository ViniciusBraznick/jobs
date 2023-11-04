import { styled } from "../../styles/stitches.config";

export const Container = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 64,

  'img':{
    marginBottom: 32
  },

  'p': {
    color: '$neutral400'
  }
});
