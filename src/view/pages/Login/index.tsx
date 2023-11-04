import { AuthHeader } from "../../components/AuthHeader";
import { Input } from "../../components/Input";
import { Container, Wrapper } from "./styles";

export function Login() {
  return(
    <Wrapper>
      <Container>
        <AuthHeader.Root>
          <AuthHeader.Title title="Acesse sua conta"/>
        </AuthHeader.Root>
        <form>
          <Input type="text" name="name" placeholder="Nome"/>
          <Input type="text" name="password" placeholder="Senha"/>
          <button>Entrar</button>
        </form>
      </Container>
    </Wrapper>
  )
}
