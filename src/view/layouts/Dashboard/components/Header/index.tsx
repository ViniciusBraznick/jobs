import { BellIcon, MagnifyingGlassIcon, HamburgerMenuIcon} from "@radix-ui/react-icons";
import { Actions, Container } from "./styles";
import { Icon } from "../../../../components/Icon";
import Menu from "../MenuBar";

export default function Header() {
  return (
  <Container>
    <Actions>
        <Icon>
          <HamburgerMenuIcon />
        </Icon>
        <Icon>
          <MagnifyingGlassIcon />
        </Icon>
    </Actions>

    <Actions>
      <Icon>
        <BellIcon />
      </Icon>
      <Menu />
    </Actions>
  </Container>
  )
}
