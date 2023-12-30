import { ReactNode } from "react";
import { Container } from "./styles";

interface Prop {
  children: ReactNode
}

export default function Icon({children}: Prop) {
  return (
   <Container as={'button'}>
      {children}
   </Container>
  )
}
