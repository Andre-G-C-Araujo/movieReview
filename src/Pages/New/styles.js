import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > main {
    /* max-width: 40rem; */
    align-self: center;
    border: red solid 1px;

    > header {
      border: red solid 1px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Form = styled.form`
  align-self: center;

  > textarea {
    width: 100%;
  }

  > section {
    width: 100%;
    margin-left: 0;

    border: red solid 1px;
  }
`;
