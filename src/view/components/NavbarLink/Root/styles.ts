import { styled } from "../../../styles/stitches.config";

export const Container = styled('li', {
  padding: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: 'background-color 500ms',

  '&:hover': {
    backgroundColor: '$neutral100'
  }
});
