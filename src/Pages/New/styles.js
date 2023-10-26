import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > header {
    > section {
      width: 60%;
      height: 2.5rem;
      margin: auto;
    }
  }

  > main {
    width: 40rem;
    align-self: center;

    > header {
      display: flex;
      justify-content: space-between;
      padding: 1.7rem 0 1.7rem 0;
      /* border: red solid 1px; */

      > h1 {
        color: white;
      }
      > a {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
    }
  }
`;

export const Form = styled.form`
  align-self: center;

  > section {
    width: 100%;
    margin-left: 0;
    margin-bottom: 0.5rem;
  }

  > button {
    margin: 0;
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    padding-bottom: 1rem;
    margin-top: 1rem;

    box-shadow: ${({ theme }) => `${theme.COLORS.BG200}  0.2rem 0.2rem 1.5rem`};
  }
`;
