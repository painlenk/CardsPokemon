import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: start;
  gap: 0.5rem;

  width: 90%;
`;

export const Progress = styled.progress`
  height: 10px;
  border: none;
  width: 100%;
  background: #00a9ff;
  &::-moz-progress-bar {
    background: #00a9ff;
  }

  &::-webkit-progress-value {
    background: #00a9ff;
  }

  &::-webkit-progress-bar {
    background: white;
  }
`;

export const SkillName = styled.span`
  color: #fffb73;
`;
