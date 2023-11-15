import styled from "styled-components";

export const Container = styled.button`
  width: 35%;
  padding: 1.1rem 0;
  margin: 6rem auto;
  border-radius: 0.5rem;
  border: ${({ theme }) => `${theme.COLORS.BG100} solid 2px;`};

  background-color: ${({ theme }) => theme.COLORS.BG300};

  > a {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    padding: 1.2rem;

    > svg {
      margin-bottom: -0.3rem;
      margin-right: 1rem;
      font-size: 1.6rem;
    }
  }
`;
