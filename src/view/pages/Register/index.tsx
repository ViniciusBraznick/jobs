import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ArrowRightIcon, ReloadIcon  } from "@radix-ui/react-icons";

import {useRegisterController} from "./useRegisterController";

interface linkDataProps {
  [key:string]: {
    type: string,
    route: string,
  }
}

const linkData: linkDataProps = {
  '/user/register':  {
    type: 'empresa',
    route: '/company',
  },
  '/company/register': {
    type: 'candidato',
    route: '/user',
  }
};

export function Register() {
  const { handleSubmit, register, errors, pathname, isPending } = useRegisterController();

  return(
    <>
      <form onSubmit={handleSubmit}>
        <Input {...register('name')} error={errors.name?.message} type="text" placeholder="Nome" maxLength={32} autoComplete="off"/>
        <Input {...register('email')} error={errors.email?.message} type="text" placeholder="E-mail" autoComplete="off"/>
        <Input {...register('password')} error={errors.password?.message} type="password" placeholder="Senha" />

        <Button fullWidth type="submit" loading={isPending}>
          {isPending ? <ReloadIcon/> : 'Criar conta'}
        </Button>
        <p>Já tem uma conta? <Link to='/login'>Entrar</Link></p>
      </form>

      <Link className="change-register" title={`Cadastre-se como ${linkData[pathname].type}`} to={`${linkData[pathname].route}/register`}>
        {`Sou ${linkData[pathname].type}`}
        <ArrowRightIcon />
      </Link>
    </>
    )
  }
