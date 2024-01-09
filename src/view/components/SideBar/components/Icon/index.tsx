import { Container } from "./styles";
import { Composition } from "../../entities/Composition";

export default function Icon({children}: Composition) {
  return (
    <Container>
      {children}
    </Container>
  )
}
