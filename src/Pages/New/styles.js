import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > main {
    padding: 0 15rem 0rem 15rem;
    max-height: 53rem;
    > header {
      display: flex;
      flex-direction: column;

      /* border: red solid 1px; */

      > a {
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        padding: 1rem 0;

        > svg {
          font-size: 1rem;
          margin-right: 0.5rem;
        }
      }
      > h2 {
        color: white;
        padding-bottom: 0.7rem;
      }
    }
    > section {
      > div {
        display: flex;
        flex-wrap: wrap;
        background: ${({ theme }) => theme.COLORS.BG200};
        border-radius: 0.5rem;
        border: ${({ theme }) => `${theme.COLORS.BG100} solid 2px`};
        width: 100%;

        > span {
          padding: 0.5rem;
          background-color: ${({ theme, isnew }) => {
            isnew ? "white" : theme.COLORS.BG100;
          }};
        }
      }
    }
    > div {
      display: flex;
      justify-content: space-between;

      padding-top: 2rem;
      > button {
        width: 42%;
        margin: 0;
        font-size: 1.3rem;
      }

      > button:nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.BG200};
        > a {
          color: ${({ theme }) => theme.COLORS.BG100};
        }
      }
      > button:nth-child(2) {
        background-color: ${({ theme }) => theme.COLORS.BG100};
        border: ${({ theme }) => `${theme.COLORS.BG200} solid 2px`};
        > a {
          color: ${({ theme }) => theme.COLORS.BG200};
        }
      }
    }
  }
`;

export const Form = styled.form`
  > div {
    display: flex;

    justify-content: space-between;

    > section {
      width: 45%;
      margin: 0;
    }
  }
`;
