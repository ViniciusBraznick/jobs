import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

import { Container } from "./styles";
import { Button } from "../../components/Button";
import { H1 } from '../../components/h1';
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';
import { useAuth } from '../../../app/hooks/useAuth';
import { SectionName } from './components/SectionName';
import { FormGroup } from '../../components/FormGroup';
import { SectionContainer } from './components/SectionContainer';

export default function AccountData() {
  const navigate = useNavigate();
  const {user} = useAuth();

  return (
    <Container>
      <Button invisible onClick={() => navigate(-1)}> <ArrowLeftIcon /> Voltar </Button>
      <H1>Dados da Conta</H1>

      <SectionContainer>
        <SectionName>
          <strong>Dados da Conta</strong>
          <p>Esses dados são usados por recrutadores para entrar em contato com você</p>
        </SectionName>

        <Card fullWidth>
          <form>
            <FormGroup>
              <Input type="text" placeholder="Nome Completo" autoComplete="off" />
              <Input type="text" placeholder="Cargo" />
            </FormGroup>

            <FormGroup>
              <Input disabled type="email" placeholder="E-mail" autoComplete="off" value={user?.email}/>
              <Input type="text" placeholder="(00) 00000-0000" autoComplete="off"/>
            </FormGroup>

            <FormGroup>
              <Input type="email" placeholder="Cidade" autoComplete="off" />
              <Input type="text" placeholder="Estado" autoComplete="off" />
              <Input type="text" placeholder="País" autoComplete="off" />
            </FormGroup>
          </form>
        </Card>
      </SectionContainer>

      <Button css={{
        marginTop: '24px',
        marginLeft: 'auto'
      }}>Salvar Alterações</Button>
    </Container>
  )
}
