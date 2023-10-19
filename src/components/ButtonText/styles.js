import styled from "styled-components";

export const Container = styled.button`
  background: none;

  color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.TEXT_COLOR : theme.COLORS.GRAY_100};

  font-size: 1.2rem;
  border: 0;
`;
