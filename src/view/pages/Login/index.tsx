import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Login() {
  return(
    <form>
      <Input type="text" name="email" placeholder="E-mail" maxLength={52} autoComplete="off"/>
      <Input name="password" type="password" placeholder="Senha" maxLength={32} autoComplete="off"/>

      <Button fullWidth type="submit">Entrar</Button>
      <p>Não tem uma conta? <Link to='/user/register'>Cadastre-se agora</Link></p>
    </form>
  )
}
