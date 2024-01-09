import { Container } from './styles'
import { Composition } from '../../entities/Composition'

interface SubCategory extends Composition {
  itemsToShow: number,
  toShow: boolean,
  isActive?: boolean,
}

export default function SubCategory({children, toShow, itemsToShow}: SubCategory) {
  return (
   <Container css={{
    height: toShow ? `calc(34px * ${itemsToShow})` : 0,
   }}>
    {children}
   </Container>
  )
}
