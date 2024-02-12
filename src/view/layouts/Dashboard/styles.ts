import { styled } from "../../styles/stitches.config";

export const Container = styled('main', {
  display: "flex",
})

export const Content = styled('section', {
  flex: 1,
  width: '100%',
  marginLeft: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: 1040 ,
  margin: '0 auto',
});

export const Wrapper = styled('div', {
  display: "flex",
  flexDirection: 'column',
  flex: 1,
  justifyContent: "flex-start",
  gap: '$spacing$9',

})
