import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 0.7rem;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.GRAY_200};
  border: ${({ isNew }) => (isNew ? "gray dashed 2px" : "none")};

  margin: 0.5rem;

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: 1.8rem;
    border: none;
    background: transparent;
    padding: 1.4rem 1rem;
  }

  > button {
    height: 2rem;
    width: 2rem;
    border: none;
    background: none;
  }
`;

/*
export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;

    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > input {
    background: transparent;
    height: 50px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;*/
