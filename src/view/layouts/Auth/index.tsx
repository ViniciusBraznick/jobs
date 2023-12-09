import { Outlet, useLocation } from 'react-router-dom';
import { Container, Wrapper, ContainerForm } from './styles';
import { AuthHeader } from '../../components/AuthHeader';

interface routesTitle {
  [key:string]: {
    title: string,
    text: string,
  }
}
export function AuthLayout() {
  const {pathname} = useLocation();

  const routesTitle: routesTitle = {
    '/login':  {
      title: 'Acesse sua conta',
      text: 'Digite seu e-mail e senha'
    },
    '/user/register': {
      title: 'Cadastre-se como candidato',
      text: 'Encontre a oportunidade perfeita para você'
    },
    '/company/register': {
      title: 'Cadastre-se como empresa', text: 'Conecte-se com mais de 2.000 profissionais'
    }
  };

  return (
    <Container>
      <Wrapper>
        <ContainerForm>
          <AuthHeader.Root>
            <AuthHeader.Title title={routesTitle[pathname].title}/>
            <AuthHeader.Text text={routesTitle[pathname].text}/>
          </AuthHeader.Root>
          <Outlet />
        </ContainerForm>
      </Wrapper>
    </Container>
    )
  }
