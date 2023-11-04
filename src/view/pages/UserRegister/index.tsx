import { Link } from "react-router-dom";
import { AuthHeader } from "../../components/AuthHeader";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Wrapper } from "../Login/styles";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function UserRegister() {
  return(
    <>
    <Wrapper>
      <Container>
      <AuthHeader.Root>
        <AuthHeader.Title title="Cadastre-se como candidato"/>
        <AuthHeader.Text text="Encontre a oportunidade perfeita para você"/>
      </AuthHeader.Root>
        <form>
          <Input type="text" name="nome" placeholder="Nome" maxLength={64} autoComplete="off"/>
          <Input type="text" name="email" placeholder="E-mail" maxLength={52} autoComplete="off"/>
          <Input type="password" name="password" placeholder="Senha" maxLength={32}/>

          <Button type="submit">Criar conta</Button>
          <p>Já tem uma conta? <Link to='/login'>Acesse sua conta</Link></p>
        </form>

        <Link title="Cadastre-se como empresa" className="change-register" to='/company/register'>Sou empresa <ArrowRightIcon /></Link>
      </Container>
    </Wrapper>
    </>
  )
}
