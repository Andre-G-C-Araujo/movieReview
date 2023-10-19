import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 55%;

  margin: 0.3rem auto;
  align-items: center;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_50};
  > svg {
    margin-left: 1.5rem;
    margin-right: -1.5rem;
    position: relative;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > input {
    padding: 1rem 2.5rem;
    width: 100%;
    background: transparent;

    width: 20rem;
    border: 0;
  }
`;
