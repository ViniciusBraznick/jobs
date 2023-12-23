import { useEffect, useState } from "react";
import { Container } from "./styles";

const loadMessages = [
  'Buscando dados do usuário...',
  'Configurando exibição das informações...',
  'Estilizando componentes...'
];

export default function PageLoader() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messagesInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadMessages.length);
      setMessageIndex(randomIndex);
    }, 3000);

    return () => clearInterval(messagesInterval);
  }, [messageIndex]);

  return (
    <Container>
        <p>{ loadMessages[messageIndex]}</p>
    </Container>

  )
}
