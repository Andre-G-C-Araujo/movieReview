import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  margin: 2rem 0 0 0;

  border-radius: 0.5rem;
  border: none;

  padding: 1.3rem;
  background-color: ${({ theme }) => theme.COLORS.BG100};

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  /* width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  } */
`;
