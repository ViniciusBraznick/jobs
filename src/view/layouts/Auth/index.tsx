import { Outlet } from 'react-router-dom';
import { Aside, Container } from './styles';

export function AuthLayout() {
  return (
    <Container>
      <Aside />
      <Outlet />
    </Container>
    )
  }
