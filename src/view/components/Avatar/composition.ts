import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { styled } from "../../styles/stitches.config";

export const Root = styled(AvatarPrimitive.Root, {
  width: '$spacing$10',
  height: '$spacing$10',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '$borderRadius$100',
});

export const Image = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const Fallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$blue50',
  color: '$blue500',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 600,
});
