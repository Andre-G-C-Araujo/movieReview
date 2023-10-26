import styled from "styled-components";

export const Container = styled.div`
  margin: 0.5rem auto 1rem;
  padding: 1rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLORS.BG300};
  border: ${({ theme }) => `2px solid ${theme.COLORS.BG100}`};
  border-radius: 0.5rem;

  > header {
    > h1 {
      color: ${({ theme }) => theme.COLORS.CLARA};
    }
  }
`;

export const Content = styled.div`
  flex-wrap: wrap;
  display: flex;
  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > span {
    margin: 0.5rem 0.5rem 0 0;
  }
`;
