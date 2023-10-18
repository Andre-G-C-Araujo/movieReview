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

  background: red;
`;
export const Header = styled.div`
  grid-area: header;
  background: purple;
`;
export const Menu = styled.div`
  grid-area: menu;
  background: green;
`;
export const Search = styled.div`
  grid-area: search;
  background: blue;
`;
export const Content = styled.div`
  grid-area: content;
  background: yellow;
`;
export const Newnote = styled.div`
  grid-area: newnote;
  background: brown;
`;
