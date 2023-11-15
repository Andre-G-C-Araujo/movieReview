import styled from "styled-components";

import imgBackground from "../../assets/backgroundMovie.jpg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50rem auto;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  background: transparent;

  width: 40rem;

  border-radius: 0.5rem;

  margin: 0 auto;

  > div {
    margin-top: 4.5rem;

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
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};

    margin: 2rem auto 6rem;

    font-size: 2rem;
  }

  > section {
    width: 55%;
    height: 3rem;
    margin-bottom: 0;
    margin-top: 1.5rem;
  }

  > .buttonsBottom {
    > a {
      display: block;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
      font-size: 1.5rem;
    }

    > button {
      align-self: center;
      margin: 1rem 13rem;
    }
  }
`;

export const Background = styled.div`
  background: url(${imgBackground}) no-repeat black center center;
  background-position: bottom;
`;
