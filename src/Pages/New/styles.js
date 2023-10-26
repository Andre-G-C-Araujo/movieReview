import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > main {
    padding: 0 15rem 0rem 15rem;
    > header {
      display: flex;
      flex-direction: column;

      /* border: red solid 1px; */

      > a {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        padding: 1rem 0;

        > svg {
          font-size: 1.2rem;
          margin-right: 0.5rem;
        }
      }
      > h1 {
        color: white;
        padding-bottom: 2rem;
      }
    }
    > section {
      > div {
        display: flex;
        background: red;
        padding: 0.8rem 0 0.1rem 0.5rem;
        > span {
          padding: 0.5rem;
        }
      }
    }
  }
`;

export const Form = styled.form`
  > div {
    display: flex;

    justify-content: space-between;
    padding-bottom: 2rem;
    > section {
      width: 45%;
      margin: 0;
    }
  }
`;
