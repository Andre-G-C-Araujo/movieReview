import styled from "styled-components";

export const Container = styled.span`
  height: 2.2rem;
  padding: 0.5rem 1rem;
  margin: 0rem 1rem 1rem 0;

  display: flex;

  border: black solid 1px;
  border-radius: 0.5rem;

  font-size: 1.1rem;
  background-color: ${({ theme }) => theme.COLORS.BG300};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
