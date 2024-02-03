import { styled } from "../../../styles/stitches.config";

export const SectionContainer = styled('div', {
  display: 'flex',
  gap: '80px',
  flex: 'wrap',
  marginTop: '42px',

  '@base': {
    flexDirection: "column",
    gap: '24px',
  }
});
