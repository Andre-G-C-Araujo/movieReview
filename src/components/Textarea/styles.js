import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;

  height: 10rem;

  background-color: ${({ theme, isonnote }) =>
    isonnote ? theme.COLORS.BG200 : theme.COLORS.GRAY_200};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isonnote }) =>
    isonnote ? `2px solid ${theme.COLORS.BG100}` : "none"};
  resize: none;

  margin: 1rem 0;

  border-radius: 1rem;
  padding: 1rem 2rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;
