import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;

  max-height: 100vh;

  ::-webkit-scrollbar {
    border-radius: 2rem;
    border: ${({ theme }) => `${theme.COLORS.BG100} solid 2px`};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BG100};
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.BG200};
  }

  > main {
    padding: 0 15rem 0rem 15rem;
    > section {
      max-height: 29rem;
      overflow-y: scroll;
      padding: 0 1rem;
    }
    > header {
      display: flex;
      justify-content: space-between;
      align-self: center;

      height: 8rem;
      align-items: center;
      > h2 {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
      > button {
        margin: 0;

        width: fit-content;
      }
    }
  }
`;
