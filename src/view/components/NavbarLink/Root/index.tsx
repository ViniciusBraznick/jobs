import { ReactNode } from "react";
import { Container } from "./styles";

interface Props{
  children: ReactNode,
}

export default function Root({children}: Props) {
  return(
    <Container>
      {children}
    </Container>
  )
}
