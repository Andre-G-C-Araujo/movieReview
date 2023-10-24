import styled from "styled-components";

export const Container = styled.div`
  > button {
    display: flex;
    margin: 2rem 0 3rem 75rem;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }

  > section {
    display: flex;
    flex-direction: column;

    max-width: 40rem;
    margin: auto;

    > a {
      width: fit-content;
      margin: 1rem 0 1rem 0;

      font-size: 1.7rem;
      color: white;
    }

    > div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > span {
        margin-top: 1rem;
        width: fit-content;
        margin-bottom: 0;
      }
    }
  }
`;

export const Content = styled.div`
  margin: auto;
  max-width: 40rem;

  > h1 {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.2rem;
    line-height: 1.8rem;
  }

  > small {
    font-size: 0.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
