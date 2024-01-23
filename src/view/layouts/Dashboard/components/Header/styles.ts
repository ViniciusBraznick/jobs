import { styled } from "../../../../styles/stitches.config";

export const Container = styled('nav', {
  height: '$spacing$14',
  backgroundColor: 'transparent',
  display: "flex",
  alignItems: 'center',
  justifyContent: "space-between",
  padding: '$spacing$9',

  '@sm': {
    position: "fixed",
    bottom: 0,
    background: '#FFF',
    backdropFilter: 'blur(10px)',
    width: '100%',
    boxShadow: '0 0 4px #f3f3f3'
  }
})

export const Actions = styled('div', {
  display: "flex",
  alignItems: "center",
  gap: "$spacing$2",
});
