import styled from "styled-components";

export const Container = styled.div`
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

  > div {
    > button {
      display: flex;

      margin: 2rem 0;
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    }

    > section {
      padding: 2rem 0;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const Content = styled.div`
  padding: 0 15rem 0rem 15rem;
`;

export const HeaderContent = styled.div`
  > header {
    display: flex;
    flex-direction: row;

    gap: 2rem;
    > h1 {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    > div {
      > svg {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-right: 2rem;
        padding-bottom: 0.2rem;
      }
    }
  }

  > .detailsUserNote {
    display: flex;
    flex-direction: row;

    color: ${({ theme }) => theme.COLORS.WHITE};

    gap: 1rem;
    > span {
      display: flex;
      flex-direction: row;

      align-items: center;

      font-size: 1rem;
      > img {
        margin: 0.5rem;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: ${({ theme }) => `${theme.COLORS.BG100} solid 1px`};
      }
      > svg {
        margin: 0 0.5rem;
        color: ${({ theme }) => theme.COLORS.BG100};
      }
    }
  }
`;

export const TextContent = styled.p`
  overflow-y: auto;
  max-height: 25rem;

  color: white;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;
