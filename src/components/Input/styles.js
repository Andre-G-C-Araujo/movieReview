import styled from "styled-components";

export const Container = styled.section`
  margin: 0.3rem auto;
  display: flex;
  align-items: center;
  > svg {
    margin-right: -1.8rem;
    position: relative;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > input {
    background-color: ${({ theme }) => theme.COLORS.GRAY_50};
    padding: 1rem 2.2rem;

    width: 20rem;
    border-radius: 1rem;
    border: 0;
  }
`;
