import { ItemContainer } from "./styles";
import { Composition } from "../../entities/Composition";

export default function Container({children}: Composition) {
  return (
    <ItemContainer>
      {children}
    </ItemContainer>
  )
}
