import { ReactNode } from "react";
import { Container } from "./styles";

import logo from '../../../assets/images/logo.svg'

interface AuthHeaderRootProps{
  children: ReactNode
}

export default function AuthHeaderRoot({children}:AuthHeaderRootProps) {
  return (
    <Container>
      <img src={logo} alt="Jobs" width={48} height={48}/>
      {children}
    </Container>
  )
}
