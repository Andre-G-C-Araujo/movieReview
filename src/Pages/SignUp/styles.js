import styled from "styled-components";

import imgBackground from "../../assets/backgroundMovie.jpg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 50rem;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  background: transparent;

  width: 40rem;

  border-radius: 0.5rem;

  margin: 0 auto;

  > a {
    margin-top: 3rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    font-size: 1.5rem;
  }

  > section {
    width: 55%;
    margin-top: 1rem;
    margin-bottom: 0;
    height: 3rem;
  }

  > div {
    margin-top: 4rem;

    > h1,
    p {
      text-align: center;
    }
    > h1 {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

      font-size: 3.8rem;
    }

    > p {
      font-size: 1.4rem;
    }
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_50};

    margin: 3rem auto;

    font-size: 2rem;
  }
`;

export const Background = styled.div`
  background: url(${imgBackground}) no-repeat black center center;
  background-position: bottom;
`;
