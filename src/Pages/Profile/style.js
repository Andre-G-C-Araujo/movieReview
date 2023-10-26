import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > header {
    height: 11rem;
    display: flex;
    align-items: center;

    border-bottom: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

    background-color: ${({ theme }) => theme.COLORS.BG300};

    > a {
      > svg {
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-left: 3rem;
      }
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2.5rem;

  margin-top: -9.5rem;
  > img {
    width: 13rem;
    border-radius: 50%;
    border: ${({ theme }) => `2px solid ${theme.COLORS.BG100}`};
  }
  > label {
    border: ${({ theme }) => theme.COLORS.BG100} dashed 4px;
    border-radius: 9999px;
    padding: 0.3rem;

    margin: -3.11rem 0rem 0rem 9rem;

    &:hover {
      cursor: pointer;
    }

    > .cameraFi {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.BG100};
    }
    > input {
      display: none;
    }
  }
`;

export const Form = styled.div`
  max-width: 40rem;

  background: none;
  margin: 3rem auto 0;

  > section:nth-child(3) {
    margin-bottom: 1.2rem;
  }

  > button {
    height: 4rem;
    width: 100%;
    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;
    border: black solid 2px;
    box-shadow: 0.2rem 0.2rem black;

    > svg {
      margin-left: -1.4rem;
      margin-top: -0.4rem;
    }
  }
  > section {
    width: 100%;
    margin-top: 0.3rem;
  }
`;

// Container > header < > Form > Avatar > img > label > input < 4xInput Button <form < container
