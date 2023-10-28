import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  background: ${({ theme }) => theme.COLORS.BG300};
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-bottom-style: solid;

  padding: 0 12%;

  > .leaveTextButton {
    display: flex;
    flex-direction: column;
    > button {
      margin-top: -3rem;

      margin-left: 4rem;
      z-index: 1;
    }
  }
`;
export const Profile = styled(Link)`
  display: flex;

  padding: 1rem;
  margin-left: 3rem;

  > img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: ${({ theme }) => `${theme.COLORS.BG100} solid 2px`};
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    padding: 0.7rem;
    > span {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > strong {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
export const Brand = styled.button`
  background-color: transparent;
  border: none;

  > h1 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    padding: 2rem;
  }
`;
