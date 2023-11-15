import { styled } from "../../styles/stitches.config";

export const Container = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$spacing$13',

  'img':{
    marginBottom: '$spacing$9'
  },

  'p': {
    color: '$neutral400'
  }
});
