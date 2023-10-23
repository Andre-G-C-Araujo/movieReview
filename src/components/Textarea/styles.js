import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;

  height: 9rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-top: 0.5rem;

  border-radius: 1rem;
  padding: 1rem 2rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
