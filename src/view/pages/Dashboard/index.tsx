import { useAuth } from "../../../app/hooks/useAuth";
import { Button } from "../../components/Button";
import { Container } from "./styles";

export function Dashboard() {
  const { signout } = useAuth();
  return(
    <Container>
      <h1>Dashboard page</h1>
      <Button danger onClick={signout}>
        Sair
      </Button>
    </Container>
  )
}
