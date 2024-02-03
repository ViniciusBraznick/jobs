import { styled } from "../../../../styles/stitches.config";

export const Header = styled('div', {
  display: 'flex',
  flexDirection: "column",


  'strong': {
    color: '$neutral900',
    fontSize: '$fontSize$2sm'
  },

  'p': {
    color: '$neutral500',
    letterSpacing: .1,
    fontSize: '$fontSize$sm',
  }
})
