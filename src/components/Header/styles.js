import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  background: ${({ theme }) => theme.COLORS.BG300};
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-bottom-style: solid;
`;
export const Profile = styled.a`
  display: flex;

  padding: 1rem;
  margin-left: 3rem;

  > img {
    width: 5rem;
    height: 5rem;

    border-radius: 50%;
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
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
export const Logout = styled.button`
  background: none;
  border: none;
  padding: 2rem 2rem 0 0;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: 2.5rem;

  width: 7rem;
  height: 100%;
`;
