import { styled } from "../../../../styles/stitches.config";

export const Container = styled('nav', {
  height: '$spacing$14',
  backgroundColor: 'transparent',
  display: "flex",
  alignItems: 'center',
  justifyContent: "space-between",
  padding: '$spacing$9',
})


export const Actions = styled('div', {
  display: "flex",
  alignItems: "center",
  gap: "$spacing$2"
})
