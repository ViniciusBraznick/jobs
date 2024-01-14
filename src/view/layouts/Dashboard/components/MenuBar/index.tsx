import { useAuth } from '../../../../../app/hooks/useAuth';
import { Avatar } from '../../../../components/Avatar';

import { ExitIcon } from '@radix-ui/react-icons'


import { Menu as MenuHeader } from './composition';

export default function Menu() {
  const { user, signout } = useAuth();

  return (
    <MenuHeader.Root>
      <MenuHeader.MenuContainer>
        <MenuHeader.Trigger>
          <Avatar.Root>
            <Avatar.Image
            src="https://images.unsplash.com/photo-1511485s977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            alt="Pedro Duarte"/>
            <Avatar.Fallback>{user?.email[0].toUpperCase()}</Avatar.Fallback>
          </Avatar.Root>
        </MenuHeader.Trigger>

        <MenuHeader.Portal>
          <MenuHeader.Content>
            <MenuHeader.Item >
              Preferências
            </MenuHeader.Item>
            <MenuHeader.Item >
              Termos de uso
            </MenuHeader.Item>
            <MenuHeader.Divider />
            <MenuHeader.Item danger onClick={signout}>
              <ExitIcon />
              Sair
            </MenuHeader.Item>
          </MenuHeader.Content>
        </MenuHeader.Portal>
      </MenuHeader.MenuContainer>
    </MenuHeader.Root>
  )
}
