import { Composition } from "../../entities/Composition";
import { Container } from "./styles";

export default function Wrapper({children}: Composition) {
  return (
    <Container>
      {children}
    </Container>
  )
}
