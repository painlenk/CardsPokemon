import { IPokemon } from "../../types/IPokemon";
import { Bars } from "./Bars";
import { Container, Image, Name, SkillsContainer } from "./style";

interface IProps {
  pokemon: IPokemon;
}

export const Card = ({ pokemon }: IProps) => {
  return (
    <Container>
      <Image
        src={`https://unite.pokemon.com/images/pokemon/${pokemon.avatar}/stat/stat-${pokemon.avatar}.png`}
        alt={pokemon?.avatar}
      />
      <Name>{pokemon?.avatar}</Name>
      <SkillsContainer>
        <Bars skill={pokemon.skills.attack} title={"Attack"} />
        <Bars skill={pokemon.skills.resistance} title={"Resistance"} />
        <Bars skill={pokemon.skills.mobility} title={"Mobility"} />
        <Bars skill={pokemon.skills.support} title={"Support"} />
        <Bars skill={pokemon.skills.punctuation} title={"Punctuation"} />
      </SkillsContainer>
    </Container>
  );
};
