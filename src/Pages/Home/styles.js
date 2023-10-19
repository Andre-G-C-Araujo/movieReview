import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 18rem auto;
  grid-template-rows: 7rem 6rem auto 5rem;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.BG100};
  border-bottom: 0.1rem;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-bottom-style: solid;
  > h1 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  background: ${({ theme }) => theme.COLORS.BG100};

  text-align: center;
  padding-top: 8rem;

  > li {
    margin-bottom: 1rem;
  }
`;
export const Search = styled.div`
  grid-area: search;

  padding: 2.4rem 1rem;
  background: ${({ theme }) => theme.COLORS.BG300};

  > section {
    width: 95%;
    background-color: ${({ theme }) => theme.COLORS.BG100};

    margin-left: 3rem;
    > input {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
export const Content = styled.div`
  grid-area: content;

  background: ${({ theme }) => theme.COLORS.BG300};
`;
export const Newnote = styled.a`
  grid-area: newnote;
  display: flex;

  font-size: 1.8rem;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BG200};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

  > .plusButton {
    margin-left: 0.7rem;
  }
`;
