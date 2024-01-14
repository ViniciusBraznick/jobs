import { BellIcon, MagnifyingGlassIcon} from "@radix-ui/react-icons";
import { Actions, Container } from "./styles";
import { Icon } from "../../../../components/Icon";
import Menu from "../MenuBar";

export default function Header() {
  return (
  <Container>
    <MagnifyingGlassIcon />
    <Actions>
      <Icon>
        <BellIcon />
      </Icon>

      <Menu />
    </Actions>
  </Container>
  )
}
