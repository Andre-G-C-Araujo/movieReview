import styled from "styled-components";

export const Container = styled.span`
  height: 2.2rem;
  width: 12rem;

  margin: 0rem 1rem 0.7rem 0;

  display: flex;

  border: black solid 1px;
  border-radius: 0.5rem;

  font-size: 1.1rem;
  background-color: ${({ theme, isnew }) =>
    isnew ? "transparent" : theme.COLORS.BG100};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: ${({ theme, isnew }) =>
    isnew ? `${theme.COLORS.BG100} dashed 2px` : "none"};

  align-items: center;

  > svg {
    color: ${({ theme, isnew }) =>
      isnew ? theme.COLORS.RED : theme.COLORS.WHITE};
    margin-left: 0.5rem;

    height: 1rem;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;
