import { Link } from "react-router-dom";
import { AuthHeader } from "../../components/AuthHeader";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Wrapper } from "./styles";


export function Login() {
  return(
    <Wrapper>
      <Container>
        <AuthHeader.Root>
          <AuthHeader.Title title="Acesse sua conta"/>
          <AuthHeader.Text text="Digite seu e-mail e senha"/>
        </AuthHeader.Root>
        <form>
          <Input type="text" name="email" placeholder="E-mail" maxLength={52} autoComplete="off"/>
          <Input type="password" name="password" placeholder="Senha" maxLength={32} autoComplete="off"/>

          <Button type="submit">Entrar</Button>
          <p>Não tem uma conta? <Link to='/user/register'>Cadastre-se agora</Link></p>
        </form>
      </Container>
    </Wrapper>
  )
}
