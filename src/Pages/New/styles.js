import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

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

    > section {
      width: 100%;
    }
  }

  > button {
    width: 100%;
    margin-top: 1rem;
  }
`;
