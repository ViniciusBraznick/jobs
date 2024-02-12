import { Outlet } from "react-router-dom";

import { Container, Content, Wrapper } from "./styles";
import SiderBar from "../../components/SideBar";
import Header from "./components/Header";


export function DashboardLayout() {
  return(
   <Container>
    <SiderBar />
    <Wrapper>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
   </Container>
  )
}
