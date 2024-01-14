import { Outlet } from "react-router-dom";
import SiderBar from "../../components/SideBar";
import { styled } from "../../styles/stitches.config";
import Header from "./components/Header";

const Container = styled('main', {
  display: "flex",
})

const Content = styled('section', {
  flex: 1,
  marginLeft: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: 1440 ,
  margin: '0 auto'
});

const Wrapper = styled('div', {
  display: "flex",
  flexDirection: 'column',
  flex: 1,
  justifyContent: "flex-start",
  gap: '$spacing$9',

})

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
