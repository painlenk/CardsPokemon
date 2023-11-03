import styled from "styled-components";

export const Container = styled.div`
  max-width: 350px;

  border: 2px solid white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 80%;
  margin: 0 auto;
`;

export const Name = styled.h5`
  font-weight: bolder;
  font-size: 1.25rem;
`;

export const SkillsContainer = styled.div`
  width: 100%;
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;
