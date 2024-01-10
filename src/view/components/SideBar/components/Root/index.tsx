import { Link } from "react-router-dom";

import { Container } from "./styles";
import { Composition } from "../../entities/Composition";

interface RootState extends Composition {
  isActive?: boolean | undefined,
  setItemActive: (itemName: string) => void,
  path: string | null,
}

export default function Root({children, isActive, setItemActive, path}: RootState) {
  return (
    <Container
      to={path}
      as={path !== '' && Link}
      isActive={isActive}
      onClick={setItemActive}>
      {children}
    </Container>
  )
}
