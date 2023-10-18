import styled from "styled-components";

export const Container = styled.button`
  width: 35%;

  padding: 1.1rem;
  margin: 6rem auto;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BG300};
`;
