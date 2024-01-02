import { useState } from "react";
import { Container } from "./styles";

import logo from '../../../assets/images/logo.svg'
import SiderBar from "../../components/SideBar";
import DoubleArrow from "../../components/Icons/DoubleChevron";


export function Dashboard() {
  const [isVisible, seIsVisible] = useState(true);

  return(
    <Container visible={isVisible}>
      <header>
        <img src={logo} alt="Jobs" width={48} height={48}/>
        <button title={isVisible ? 'Ocultar menu' : 'Exibir menu'} onClick={() => seIsVisible(!isVisible)}>
          <DoubleArrow />
        </button>
      </header>
      <SiderBar />
    </Container>
  )
}
