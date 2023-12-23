import { keyframes } from "@stitches/react";
import { styled } from "../../styles/stitches.config";

const rotate = keyframes({
  'from': {
    transform: 'rotate(0)'
  },

  'to': {
    transform: 'rotate(720deg)'
  }
})

export const Container = styled('div',{
  position: 'fixed',
  inset: 0,
  background: '$blue500',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  placeItems: "center",
  gap: '12px',

  'p': {
    color: '$neutral100'
  },

  '&::before': {
    content: "",
    width: 32,
    height: 32,
    display: 'block',
    borderRadius: 100,
    border: '5px solid $blue400',
    borderTopColor: '$blue200',
    animation: `${rotate} 1.7s ease-in-out infinite`
  }
});
