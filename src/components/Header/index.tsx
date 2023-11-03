import type { ReactElement } from "react";
import { Container, Description, SubTitle, Title } from "./styles";

interface IProps {
  children?: ReactElement;
}

export const Header = ({ children }: IProps) => {
  return (
    <Container>
      <Title>Pokemons Cards</Title>

      <SubTitle> Carsds dos pokemons e suas skills</SubTitle>
      <Description>{children}</Description>
    </Container>
  );
};
