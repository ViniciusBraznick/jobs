import * as Menubar from '@radix-ui/react-menubar';
import { Avatar } from './Avatar';
import { useAuth } from '../../app/hooks/useAuth';

export default function Teste() {
  const { user } = useAuth()

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger>
          <Avatar.Root>
            <Avatar.Image
            src="https://images.unsplash.com/photo-1511485s977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            alt="Pedro Duarte"/>
            <Avatar.Fallback delayMs={600}>{user?.email[0].toUpperCase()}</Avatar.Fallback>
          </Avatar.Root>
        </Menubar.Trigger>

        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.Item>
              Abc
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  )
}
