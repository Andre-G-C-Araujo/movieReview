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

    background-color: ${({ theme }) => theme.COLORS.BG100};
    > svg {
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      margin-left: 3rem;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 6rem;

  margin-top: -8rem;
  > img {
    width: 10rem;
    border-radius: 50%;
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
      font-size: 2.2rem;
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
    width: 100%;
    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.5rem;
    border: black solid 2px;
    box-shadow: 0.2rem 0.2rem black;
  }
  > section {
    width: 100%;

    > input {
    }
  }
`;

// Container > header < > Form > Avatar > img > label > input < 4xInput Button <form < container
