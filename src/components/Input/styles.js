import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 40%;
  height: 2.5rem;

  margin: auto;
  align-items: center;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BG200};
  border: ${({ theme }) => `2px solid ${theme.COLORS.BG100}`};

  > svg {
    margin-left: 1.5rem;
    margin-right: -1.5rem;
    position: relative;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > input {
    padding: 1rem 2.5rem;
    background: transparent;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;
