import { Outlet } from "react-router-dom";
import SiderBar from "../../components/SideBar";
import { styled } from "../../styles/stitches.config";

const Container = styled('div', {
  display: "flex",
})

const Content = styled('div', {
  flex: 1,
  marginLeft: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: 1440 ,
  margin: '0 auto'
});

export function DashboardLayout() {
  return(
   <Container>
    <SiderBar />
      <Content>
        <Outlet />
      </Content>
   </Container>
  )
}
