import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

import { Button } from "../../components/Button";
import { H1 } from "../../components/h1";
import { Section } from './components';
import { Card } from '../../components/Card';
import CandidateForm from './components/CandidateForm';
import { Container } from "./styles";

import { useAuth } from '../../../app/hooks/useAuth';

export default function ConfigAccountData() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Container>
      <Button invisible onClick={() => navigate(-1)}> <ArrowLeftIcon /> Voltar </Button>
      <H1>Dados da Conta</H1>

      <Section.Container>
        <Section.Name>
          <strong>Dados da Conta</strong>
          {!user?.isCompany && (<p>Esses dados são usados por recrutadores para entrar em contato com você</p>)}
        </Section.Name>

        <Card fullWidth>
          { !user?.isCompany && ( <CandidateForm /> )}

          { user?.isCompany && (
            <div>
              é empresa
            </div>
          )}
        </Card>
      </Section.Container>
    </Container>
  )
}
