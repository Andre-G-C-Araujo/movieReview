import styled from "styled-components";

export const Container = styled.button`
  width: 35%;
  padding: 1.1rem 0;
  margin: 6rem auto;
  border-radius: 0.5rem;
  border: purple solid 2px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BG200};

  > a {
    color: white;
    padding: 1.2rem;

    > svg {
      margin-bottom: -0.3rem;
      margin-right: 1rem;
      font-size: 1.6rem;
    }
  }
`;
