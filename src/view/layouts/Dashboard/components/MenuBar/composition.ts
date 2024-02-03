import { styled } from "../../../../styles/stitches.config";
import * as Menubar from '@radix-ui/react-menubar';

const Root = styled(Menubar.Root, {
  backgroundColor: 'transparent',
})

const MenuContainer = styled(Menubar.Menu, {
  backgroundColor: 'transparent',
})

const Trigger = styled(Menubar.Trigger, {
  backgroundColor: 'transparent',
})

const Portal = styled(Menubar.Portal, {
  marginTop: '$spacing$4',
})

const Content = styled(Menubar.Content, {
  minWidth: '200px',
  border: '1px solid $neutral150',
  borderRadius: '$borderRadius$1',
  backgroundColor: '#FFF',
  padding: '$spacing$1 0',
  marginTop: '$spacing$2',
  marginLeft: '$spacing$9',
  outline: '$neutral150',
  marginRight: '32px',
})

const Divider = styled('span', {
  height: '1px',
  width: '90%',
  margin: '0 auto',
  background: '$neutral150',
  display: "block",
})

const Item = styled(Menubar.Item, {
  backgroundColor: 'transparent',
  padding: '$spacing$2 $spacing$5',
  color: '$neutral900',
  cursor: "pointer",
  display: 'flex',
  alignItems: "center",
  justifyContent: "flex-start",
  gap: '$spacing$1',
  fontFamily: '$outfit',
  fontSize: '14px',

  '&:hover': {
    color: '$neutral950',
    outline: '$neutral150',
  },

  variants: {
    danger: {
      true: {
        color: '$red500',

        '&:hover': {
          color: '$red400',
        }
      }
    },
  }
})

export const Menu = {
  Root,
  MenuContainer,
  Trigger,
  Portal,
  Content,
  Item,
  Divider
};
