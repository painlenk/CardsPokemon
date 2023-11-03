import { Progress, Container, SkillName } from "./style";

interface IProps {
  skill: number;
  title: string;
}
export const Bars = ({ skill, title }: IProps) => {
  return (
    <Container>
      <div>
        <SkillName>{title}:</SkillName>

        <span> {skill}</span>
      </div>

      <Progress value={skill} max={100} />
    </Container>
  );
};
