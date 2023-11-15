import { styled } from "../../styles/stitches.config";

export const Fieldset = styled('fieldset', {
  position: 'relative',
  border: 0,

  'input': {
    width: '100%',
    height: 52,
    borderRadius: '$borderRadius$1',
    border: '1.5px solid $neutral300',
    fontSize: '$fontSize$base',
    padding: '$spacing$3',

    '&:focus':{
      outline: '$neutral500',
      borderColor: '$neutral500'
    },

    '&:disabled': {
      backgroundColor: '$neutral200',
      cursor: 'not-allowed',
      borderColor: '$neutral200'
    },

    '&:disabled ~ label': {
      color: '$neutral400',
    },

    '&:not(:placeholder-shown), &:focus': {
     paddingTop: '$spacing$6'
    },

    '&:not(:placeholder-shown) ~ label, &:focus ~ label': {
      top: '$spacing$1',
      fontSize: '$fontSize$sm',
    }
  }
});

export const Label = styled('label', {
  position: 'absolute',
  left: '$spacing$3',
  top: '$spacing$5',
  fontSize: '$fontSize$base',
  fontWeight: 300,
  fontFamily: '$outfit',
  pointerEvents: 'none',
  color: '$neutral400',
  transition: 'all 100ms ease',
})
