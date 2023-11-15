import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function CompanyRegister() {
  return(
    <>
      <form>
        <Input type="text" name="nome" placeholder="Nome" maxLength={64} autoComplete="off"/>
        <Input type="text" name="email" placeholder="E-mail" maxLength={52} autoComplete="off"/>
        <Input type="password" name="password" placeholder="Senha" maxLength={32}/>

        <Button fullWidth type="submit">Criar conta</Button>
        <p>Já tem uma conta? <Link to='/login'>Entrar</Link></p>
      </form>

      <Link title="Cadastre-se como candidato" className="change-register" to='/user/register'>Sou candidato <ArrowRightIcon /></Link>
    </>
    )
  }
