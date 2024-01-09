import { styled } from "../../../../styles/stitches.config";

export const Container = styled('div',{
    marginLeft: 19,
    position: "relative",
    overflow: "hidden",
    transition: 'height 200ms ease',

    '@container sidebar (width < 247px)': {
      height: '0 !important',
    },

    '&:before': {
      content: "",
      width: 1,
      height: "calc(100% - 16px)",
      display: "block",
      backgroundColor: "$neutral900",
      position: "absolute",
      left: 0,
    },

    '& *': {
      position: 'relative',
      marginLeft: '$spacing$4',
      fontSize: 14,
    },

    '& *:before': {
      content: "",
      width: '$spacing$4',
      height: 1,
      display: "block",
      backgroundColor: "$neutral900",
      position: "absolute",
      left: -14,
    },
});
