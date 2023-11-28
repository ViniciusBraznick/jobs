import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useLoginController } from "./useLoginController";
import { ReloadIcon } from "@radix-ui/react-icons";

export function Login() {
  const { handleSubmit, register, errors, isPending } = useLoginController();

  return(
    <form onSubmit={handleSubmit}>
      <Input {...register('email')} error={errors.email?.message} type="email" placeholder="E-mail" autoComplete="off"/>
      <Input {...register('password')} error={errors.password?.message} type="password" placeholder="Senha" autoComplete="off"/>
      <Button fullWidth type="submit" loading={isPending}>
          {isPending ? <ReloadIcon/> : 'Entrar'}
        </Button>
      <p>Não tem uma conta? <Link to='/user/register'>Cadastre-se agora</Link></p>
    </form>
  )
}
