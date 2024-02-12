import { styled } from "../../../styles/stitches.config";

export const Name = styled('aside', {
  paddingTop: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  maxWidth: 280,

  '@lg': {
    maxWidth: "initial"
  }
});
