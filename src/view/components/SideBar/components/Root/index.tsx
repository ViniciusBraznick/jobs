import { Link } from "react-router-dom";
import { Container } from "./styles";
import { Composition } from "../../entities/Composition";

interface RootState extends Composition {
  isActive?: boolean | undefined;
  setItemActive?: (itemName: string) => void;
  path: string | null;
  isSubCategory?: boolean;
  onClick?: () => void;
}

export default function Root({
  children,
  isActive,
  onClick,
  path,
  isSubCategory,
}: RootState) {
  return (
    <Container
      to={path || '/'}
      as={path !== '' ? Link : undefined}
      isActive={isActive}
      isSubCategory={isSubCategory && isActive}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
