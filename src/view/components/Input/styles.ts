import { styled } from "../../styles/stitches.config";

export const Fieldset = styled('fieldset', {
  position: 'relative',
  border: 0,

  'input': {
    width: '100%',
    height: 52,
    borderRadius: 4,
    border: '1.5px solid $neutral300',
    fontSize: 16,
    padding: 12,

    '&:focus':{
      outline: '$neutral500',
      borderColor: '$neutral500'
    },

    '&:not(:placeholder-shown), &:focus': {
     paddingTop: 18
    },

    '&:not(:placeholder-shown) ~ label, &:focus ~ label': {
      top: 4,
      fontSize: 12,
    }
  }
});

export const Label = styled('label', {
  position: 'absolute',
  left: 13,
  top: 16,
  fontSize: 16,
  fontWeight: 300,
  fontFamily: '$outfit',
  pointerEvents: 'none',
  color: '$neutral400',
  transition: 'all 100ms ease',
})
