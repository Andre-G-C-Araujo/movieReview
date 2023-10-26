import styled from "styled-components";

export const Container = styled.span`
  height: 2.2rem;
  width: fit-content;
  padding: 0.5rem 1rem;
  margin: 0rem 1rem 1rem 0;

  display: flex;

  border: black solid 1px;
  border-radius: 0.5rem;

  font-size: 1.1rem;
  background-color: ${({ theme }) => theme.COLORS.BG100};
  color: ${({ theme }) => theme.COLORS.WHITE};

  > svg {
    color: ${({ theme, isnew }) =>
      isnew ? theme.COLORS.RED : theme.COLORS.WHITE};
    margin-left: 0.5rem;
    margin-top: 0.2rem;
    height: 0.8rem;
    /* Fazer condiçoes para que tire o bg da tag. border dash etc. */
  }
`;
