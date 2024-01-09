import { Container } from "./styles";

interface BadgeProp {
  type?: 'default' | 'danger' | 'primary',
  text?: string
}

const colors = {
  'default': '$neutral900',
  'danger': '$red500',
  'primary': '$blue500'
};

export default function Badge({type = 'default', text}:BadgeProp) {
  return (
    <Container css={{
      backgroundColor: colors[type],
      ...(!text && {padding: '$spacing$1 $spacing$1',borderRadius: '$borderRadius$6'})
    }}>
      {text}
    </Container>
  )
}
