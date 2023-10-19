import styled from "styled-components";

export const Container = styled.section`
  margin: 0 4rem;

  padding: 3rem 0rem 0.6rem 0rem;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  > h2 {
    font-size: 1.6rem;
    font-weight: 400;
    border-bottom: 0.1rem;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-bottom-style: solid;
  }
`;
